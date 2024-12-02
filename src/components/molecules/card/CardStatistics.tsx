import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Flame, Trophy, Zap } from "lucide-react";
import Link from "next/link";

export default function CardStatistics() {
  return (
    <>
      <Card className="bg-transparent">
        <CardHeader className="font-bold text-2xl">Statistik</CardHeader>
        <CardContent>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-4 w-full items-center justify-center mb-4">
              <div className="border rounded-lg flex flex-row items-center justify-start w-1/2 gap-4 p-4">
                <Flame
                  className="text-orange-500 w-10 h-10"
                  fill="currentColor"
                />
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl">2</h1>
                  <h1 className="text-sm font-light opacity-80">
                    Runtunan hari
                  </h1>
                </div>
              </div>
              <div className="border rounded-lg flex flex-row items-center justify-start w-1/2 gap-4 p-4">
                <Zap className="h-8 w-8 text-yellow-400" fill="currentColor" />
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl">1260</h1>
                  <h1 className="text-sm font-light opacity-80">Total XP</h1>
                </div>
              </div>
            </div>
            <div className="border rounded-lg flex flex-row items-center justify-between gap-4 w-full p-4">
              <div className="flex flex-row gap-4">
                <Trophy className="h-10 w-10 text-yellow-400" />
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl">24th</h1>
                  <h1 className="text-sm font-light opacity-80">
                    Peringkat saat ini
                  </h1>
                </div>
              </div>
              <Link
                href={"#"}
                className="text-sm font-bold uppercase text-primary hover:underline"
              >
                Lihat Semua
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}