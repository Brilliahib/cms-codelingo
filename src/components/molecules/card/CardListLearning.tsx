"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useGetAllLearningPath } from "@/http/(user)/learning/get-all-learning";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function CardListLearning() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetAllLearningPath(
    session?.access_token as string,
    { enabled: status === "authenticated" }
  );
  return (
    <>
      <div className="space-y-4 md:space-y-6">
        {data?.data.map((learning) => (
          <Card key={learning.id}>
            <CardContent className="p-8">
              <div className="md:space-y-6 space-y-4">
                <Badge>5 Materi</Badge>
                <div className="space-y-4">
                  <h1 className="text-xl md:text-2xl font-bold">
                    {learning.title}
                  </h1>
                  <Progress value={40} />
                  <p>40% Progress Belajar</p>
                </div>
                <Button>
                  <Link href={`/dashboard/learning/${learning.id}`}>
                    Lanjut Belajar
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
