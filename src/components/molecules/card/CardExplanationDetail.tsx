"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGetQuestions } from "@/http/(user)/explanation/get-detail-user-quiz";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { baseUrl } from "@/utils/misc";

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
                <h1 className="font-bold text-2xl">Explanation Details</h1>
              </div>
            </CardContent>
          </Card>
        </Link>

        {data?.data.map((question, index) => (
          <div key={question.id} className=" shadow-lg rounded-xl p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-4">
                {question.question_text}
              </h2>

              {question.explanation_image && (
                <div className="mb-6 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={`${baseUrl}/${question.explanation_image}`}
                    alt="Explanation Image"
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              <div className="space-y-3">
                {question.answers.map((answer) => (
                  <div
                    key={answer.id}
                    className="flex flex-col text-center gap-3"
                  >
                    <Badge
                      variant={answer.is_correct ? "secondary" : "destructive"}
                      className="text-sm py-1 px-3 rounded-md"
                    >
                      {answer.answer_text}
                    </Badge>
                  </div>
                ))}
              </div>

              {question.explanation_text && (
                <Card className="mt-6 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">
                    Explanation:
                  </h3>
                  <p className="text-white">{question.explanation_text}</p>
                </Card>
              )}
            </div>
          </div>
        ))}
      </div>
    </TooltipProvider>
  );
}
