import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Lock } from "lucide-react";

interface CardLearningProps {
  title: string;
  totalMateri: number;
  progress: number;
  isLocked: boolean;
}

export default function CardListLearning({
  title,
  totalMateri,
  progress,
  isLocked,
}: CardLearningProps) {
  return (
    <Card>
      <CardContent className="p-8">
        <div className="md:space-y-6 space-y-4">
          <Badge>{totalMateri} Materi</Badge>
          <div className="space-y-4">
            <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
            {isLocked ? (
              <div className="flex gap-4 items-center text-muted-foreground">
                <Lock />
                <p className="font-semibold">Masih Terkunci</p>
              </div>
            ) : (
              <>
                <Progress value={progress} />
                <p>{progress}% Progress Belajar</p>
              </>
            )}
          </div>
          {!isLocked && <Button>Lanjut Belajar</Button>}
        </div>
      </CardContent>
    </Card>
  );
}
