"use client";

import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

const BotDashboardContent = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<
    {
      text: string;
      sender: "user" | "bot";
    }[]
  >([]);

  const { mutate, isPending, error } = useMutation({
    mutationFn: async (message: string) => {
      const res = await fetch("/api/bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      return data.data;
    },
    onSuccess: (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data, sender: "bot" },
      ]);
      setMessage("");
    },
    onError: (error: any) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error: " + error.message, sender: "bot" },
      ]);
    },
  });

  const handleSend = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "user" },
      ]);
      setMessage("");
      mutate(message);
    }
  };

  useEffect(() => {
    setMessages([
      {
        text: "👋 Hai! Aku Pandu yang akan memandu kamu selama kamu belajar! Ada yang bisa pandu bantu?",
        sender: "bot",
      },
    ]);
  }, []);

  const convertTextToHtml = (text: string) => {
    let htmlText = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    htmlText = htmlText.replace(/\n/g, "<br />");
    return htmlText;
  };

  return (
    <div className="flex h-full flex-col space-y-4">
      <ScrollArea className="flex-grow h-[50vh]">
        <div className="mb-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs rounded-xl px-4 py-3 text-base ${
                  msg.sender === "user" ? "bg-surface" : "bg-surface"
                }`}
              >
                {msg.sender === "bot" ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: convertTextToHtml(msg.text),
                    }}
                    className="prose"
                  />
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}

          {isPending && (
            <div className="flex justify-start items-center space-x-2">
              <span className="text-sm text-gray-500">
                Pandu sedang mengetik...
              </span>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="flex items-center space-x-2">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="resize-none overflow-hidden p-2 rounded-md border"
          style={{
            height: `${Math.max(50, message.split("\n").length * 20)}px`,
          }}
        />
        <Button className="h-fit" onClick={handleSend} disabled={isPending}>
          <SendHorizonal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BotDashboardContent;
