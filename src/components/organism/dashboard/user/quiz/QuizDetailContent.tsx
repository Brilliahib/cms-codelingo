"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useGetAllQuestion } from "@/http/(user)/learning/quiz/get-all-question";
import { useGetQuestionDetail } from "@/http/(user)/learning/quiz/get-detail-question";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface QuizDetailParams {
  id: number;
}

export default function QuizDetailContent({ id }: QuizDetailParams) {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetQuestionDetail(
    { id, token: session?.access_token as string },
    { enabled: status === "authenticated" }
  );
  const router = useRouter();

  const [learningPathId, setLearningPathId] = useState<string | null>(null);

  useEffect(() => {
    if (data?.data?.quiz_id) {
      setLearningPathId(data.data.quiz_id);
    }
  }, [data?.data?.quiz_id]);

  const { data: question } = useGetAllQuestion(
    {
      id: learningPathId!,
      token: session?.access_token as string,
    },
    { enabled: learningPathId !== null }
  );

  const [currentQuizId, setCurrentQuizId] = useState<number>(id);

  const quiz = question?.data || [];
  const currentIndex = quiz.findIndex((item) => item.id === currentQuizId);
  const goToMaterial = (index: number) => {
    if (index >= 0 && index < quiz.length) {
      const quizId = quiz[index].id;
      setCurrentQuizId(quizId);
      router.push(`/quizzes/${quizId}`);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col pt-12">
        <div className="flex-1 md:space-y-12 space-y-8 pad-x">
          <div className="flex items-center gap-4 md:gap-8">
            <Link href={"/dashboard/learning"}>
              <X className="cursor-pointer" />
            </Link>
            <Progress value={((currentIndex + 1) / quiz.length) * 100} />
          </div>
          <div>
            <h1 className="font-bold text-3xl uppercase">Quiz</h1>
          </div>
          <div className="grid grid-cols-1 md:gap-12 gap-8">
            <div>
              <h1 className="font-bold text-2xl">{data?.data.question_text}</h1>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-x-12 md:gap-y-6 gap-8">
            {data?.data.answers.map((answer) => (
              <Card
                key={answer.id}
                className="bg-[#273856] rounded-2xl text-white border-[#1D2941] font-semibold text-xl border-b-8 border-r-8 text-center"
              >
                <CardContent className="p-8">{answer.answer_text}</CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-end pad-x pb-8">
          <Button
            variant={"background"}
            onClick={() => goToMaterial(currentIndex - 1)}
            disabled={currentIndex <= 0}
          >
            <ArrowLeft /> Sebelumnya
          </Button>
          <Button
            onClick={() => goToMaterial(currentIndex + 1)}
            disabled={currentIndex >= quiz.length - 1}
          >
            Selanjutnya <ArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}
