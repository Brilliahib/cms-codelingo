"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import flowchart from "/public/images/flowchart.gif";
import Image from "next/image";

export default function Reason() {
  const [selected, setSelected] = useState<{
    id: string;
    label: string;
  } | null>(null);
  const [matches, setMatches] = useState<{ [key: string]: string }>({
    String: 'var x = "Hello"',
    Integer: "var x = 12",
  });
  const [correctPairs, setCorrectPairs] = useState<string[]>([]);
  const [temporarilyDisabled, setTemporarilyDisabled] = useState<string[]>([]);

  const handleButtonClick = (id: string, label: string) => {
    if (selected) {
      if (matches[selected.label] === label) {
        // Cocok
        setCorrectPairs((prev) => [...prev, selected.label, label]);
        setSelected(null); // Reset pilihan
      } else {
        // Tidak cocok
        setTemporarilyDisabled((prev) => [...prev, selected.label, label]);
        setTimeout(() => {
          setTemporarilyDisabled((prev) =>
            prev.filter((item) => item !== selected.label && item !== label)
          );
        }, 1000); // Jeda 1 detik
        setSelected(null); // Reset pilihan
      }
    } else {
      // Pilih tombol pertama
      setSelected({ id, label });
    }
  };

  const isCorrect = (label: string) => correctPairs.includes(label);
  const isTemporarilyDisabled = (label: string) =>
    temporarilyDisabled.includes(label);
  const isSelected = (label: string) => selected?.label === label;

  return (
    <>
      <div className="my-24">
        <h1 className="text-green-500 font-bold text-2xl tracking-wider text-center">
          Kenapa Memilih CodeLingo?
        </h1>
        <div className="flex flex-row items-center justify-center gap-20 my-24">
          <div className="flex flex-col gap-4">
            {["String", "Integer"].map((item, index) => (
              <Button
                key={index}
                className={`w-36 rounded-lg transition-transform duration-500 ease-in-out transform ${
                  isCorrect(item)
                    ? "bg-green-500"
                    : isTemporarilyDisabled(item)
                    ? "bg-red-500 opacity-50 scale-95"
                    : isSelected(item)
                    ? "border-2 border-blue-500"
                    : ""
                }`}
                variant={"secondary"}
                onClick={() => handleButtonClick(`left-${index}`, item)}
                disabled={isCorrect(item) || isTemporarilyDisabled(item)}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {['var x = "Hello"', "var x = 12"].map((item, index) => (
              <Button
                key={index}
                className={`w-36 rounded-lg transition-transform duration-500 ease-in-out transform ${
                  isCorrect(item)
                    ? "bg-green-500"
                    : isTemporarilyDisabled(item)
                    ? "bg-red-500 opacity-50 scale-95"
                    : isSelected(item)
                    ? "border-2 border-blue-500"
                    : ""
                }`}
                variant={"secondary"}
                onClick={() => handleButtonClick(`right-${index}`, item)}
                disabled={isCorrect(item) || isTemporarilyDisabled(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 pb-8">
          <h1 className="text-[#38B5FC] text-2xl font-bold">
            Program Belajar Interaktif
          </h1>
          <p className="w-1/2 text-center opacity-80">
            Anak-anak belajar coding dengan materi visual yang menarik dan kuis
            interaktif seperti permainan, sehingga belajar terasa seru dan
            menyenangkan.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Image src={flowchart} alt="flowchart" width={500} height={500} />
          <h1 className="text-[#38B5FC] text-2xl font-bold ">
            Pendekatan Ramah Anak
          </h1>
          <p className="w-1/2 text-center opacity-80">
            Pembelajaran dirancang khusus agar sesuai dengan kebutuhan
            anak-anak, menggunakan gambar berwarna-warni, animasi interaktif,
            dan narasi sederhana yang mudah dipahami.
          </p>
        </div>
      </div>
    </>
  );
}
