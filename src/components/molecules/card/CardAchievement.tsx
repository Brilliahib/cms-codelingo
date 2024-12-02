import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";

const achievements = [
  { title: "Pemrograman 1", badge: "5 MATERI", isCompleted: true },
  { title: "Pemrograman 2", badge: "8 MATERI", isCompleted: false },
  { title: "Algoritma", badge: "6 MATERI", isCompleted: true },
  { title: "Basis Data", badge: "7 MATERI", isCompleted: false },
];

export default function CardAchievement() {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Pencapaian</h1>
      <div className="grid gap-4">
        {achievements.map((achievement, index) => (
          <Card key={index}>
            <CardContent className="flex flex-row justify-between items-center p-6">
              <div>
                <Badge className="opacity-80 mb-4">{achievement.badge}</Badge>
                <h1 className="font-bold">{achievement.title}</h1>
              </div>
              <CircleCheck
                className={`h-10 w-10 ${
                  achievement.isCompleted ? "text-green-400" : "text-gray-400"
                }`}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
