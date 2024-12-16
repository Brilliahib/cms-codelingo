"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useGetQuestions } from "@/http/(user)/explanation/get-detail-user-quiz";
import { ArrowLeft } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CardLearningDetailProps {
  quizId: string;
}

export default function CardExplanationDetail({
  quizId,
}: CardLearningDetailProps) {
  const { data: session, status } = useSession();
  const { data, isLoading, error } = useGetQuestions(
    session?.access_token as string,
    quizId,
    { enabled: status === "authenticated" }
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <p>Loading explanation details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
        <p className="text-red-600">Error loading explanation details</p>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div className="max-w-4xl mx-auto md:space-y-8 space-y-6">
        <Link href="/dashboard/explanation" className="block">
          <Card className="bg-primary text-background hover:bg-primary/90 transition-colors">
            <CardContent className="p-6">
              <div className="flex gap-4 items-center">
                <ArrowLeft className="w-6 h-6" />
                <h1 className="font-bold text-2xl">Kembali</h1>
              </div>
            </CardContent>
          </Card>
        </Link>

        {data?.data.map((question) => (
          <div key={question.id} className="shadow-lg rounded-xl">
            <Card className="mb-6">
              <CardContent className="p-6">
                <Badge className="opacity-80 my-4">QUIZ</Badge>
                <h2 className="text-xl font-bold text-white mb-4">
                  {question.question_text}
                </h2>
                {question.answers.map((answer) => (
                  <div
                    key={answer.id}
                    className="flex flex-col text-center gap-3 py-1"
                  >
                    <Badge className="text-sm py-2 px-3 rounded-md">
                      {answer.answer_text}
                    </Badge>
                  </div>
                ))}
                <Link href={`/dashboard/explanation/key/${question.id}`}>
                  <Button className="my-4">Lihat Jawaban</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </TooltipProvider>
  );
}
