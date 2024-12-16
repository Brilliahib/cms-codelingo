"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetAllQuiz } from "@/http/(user)/explanation/get-all-quiz";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function CardListExplanation() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetAllQuiz(session?.access_token as string, {
    enabled: status === "authenticated",
  });
  return (
    <>
      <div className="space-y-4 md:space-y-6">
        {data?.data.map((quiz) => (
          <Card key={quiz.id}>
            <CardContent className="p-8">
              <div className="md:space-y-6 space-y-4">
                <Badge>Quiz</Badge>
                <div className="space-y-4">
                  <h1 className="text-xl md:text-2xl font-bold">
                    {quiz.title}
                  </h1>
                  <p className="opacity-80">{quiz.description}</p>
                </div>
                <Button>
                  <Link href={`/dashboard/explanation/${quiz.id}/`}>
                    Pembahasan
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
