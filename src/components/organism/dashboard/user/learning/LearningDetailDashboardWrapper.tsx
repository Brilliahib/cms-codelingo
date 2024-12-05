"use client";

import CardDailyMission from "@/components/molecules/card/CardDailyMission";
import CardProfile from "@/components/molecules/card/CardProfile";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useGetLearningPathDetail } from "@/http/(user)/learning/get-detail-learning";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface LearningDetailProps {
  id: number;
}

export default function LearningDetailDashboardWrapper({
  id,
}: LearningDetailProps) {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetLearningPathDetail(
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
                    <h1 className="font-bold text-2xl">{data?.data.title}</h1>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="md:space-y-6 space-y-4">
              <h1 className="font-bold text-2xl">Teruskan Belajar</h1>
              <Progress value={40} />
              <p>40% Progress Belajar</p>
            </div>
            <div className="md:space-y-6 space-y-4">
              {data?.data.materials.map((materials) => (
                <Card
                  key={materials.id}
                  className="hover:bg-primary hover:text-background"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between gap-4 items-center">
                      <div className="flex gap-4 items-center">
                        <h1 className="font-bold text-xl">{materials.title}</h1>
                        <p className="text-yellow-500 font-semibold">
                          + 120 Exp
                        </p>
                      </div>
                      <ChevronRight />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="md:w-4/12 w-full space-y-6">
          <CardProfile session={session!} />
          <CardDailyMission />
        </div> */}
      </div>
    </>
  );
}
