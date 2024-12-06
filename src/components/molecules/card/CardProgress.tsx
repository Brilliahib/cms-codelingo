import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function CardProgress() {
  return (
    <>
      <Card className="bg-transparent border">
        <CardContent className="p-8">
          <div className="md:space-y-6 space-y-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold text-muted/80">
                Progres Belajar
              </h1>
              <Link
                href={"#"}
                className="text-lg font-bold uppercase text-primary hover:underline"
              >
                Lihat Semua
              </Link>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <h1 className="font-bold text-xl tracking-widest">
                Pemrograman 1
              </h1>
              <div className="w-full">
                <Progress value={50} />
              </div>
              <h1 className="text-lg">40% Progress Belajar</h1>
              <div className="w-full h-full rounded-xl flex flex-row items-center justify-center bg-[#1C283F]">
                <div className="flex items-center justify-center gap-2 p-3">
                  <Badge className="bg-transparent text-xs border border-white">
                    LEVEL 2
                  </Badge>
                  <h1 className="text-sm">Apa itu Program Perangkat ...</h1>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
