"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useGetUserLearningPathDetail } from "@/http/(user)/user-learningpath/get-detail-user-learning-path";
import { ArrowLeft, BookOpen, Check, Play } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface LearningDetailProps {
  id: number;
}

export default function LearningDetailDashboardWrapper({
  id,
}: LearningDetailProps) {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetUserLearningPathDetail(
    { id, token: session?.access_token as string },
    { enabled: status === "authenticated" }
  );
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-12 gap-8">
        <div className="md:w-8/12 w-full space-y-8">
          <div className="md:space-y-12 space-y-4">
            <Link href={"/dashboard/learning"}>
              <Card className="bg-primary text-background">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-center">
                    <ArrowLeft />
                    <h1 className="font-bold text-2xl">
                      {data?.data.learning_path.title}
                    </h1>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="md:space-y-6 space-y-4">
              <h1 className="font-bold text-2xl">Teruskan Belajar</h1>
              <Progress value={40} />
              <p>40% Progress Belajar</p>
            </div>
            <div className="relative flex justify-center items-center w-full">
              <div className="relative w-1/2">
                {data?.data.user_materials.map((material, index) => {
                  const top = index * 80;
                  const isRight = index % 2 === 0;
                  const left = isRight
                    ? `${20 + (index % 3) * 20}%`
                    : `${60 - (index % 3) * 20}%`;

                  const bgColor = material.is_unlocked
                    ? "bg-primary"
                    : "bg-gray-500";
                  const borderColor = material.is_unlocked
                    ? "border-blue-700"
                    : "border-gray-700";

                  const Icon = material.is_completed
                    ? Check
                    : material.is_unlocked
                    ? Play
                    : BookOpen;

                  const MaterialLink = material.is_unlocked ? (
                    <Link href={`/materials/${material.id}`}>
                      <div className="flex flex-col items-center space-y-2">
                        <div
                          className={`p-4 rounded-full ${bgColor} w-fit border-b-8 ${borderColor}`}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="flex flex-col items-center space-y-2">
                      <div
                        className={`p-4 rounded-full ${bgColor} w-fit border-b-8 ${borderColor}`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  );

                  return (
                    <div
                      key={material.id}
                      className="absolute transition-all duration-300"
                      style={{ top: `${top}px`, left }}
                    >
                      {MaterialLink}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
