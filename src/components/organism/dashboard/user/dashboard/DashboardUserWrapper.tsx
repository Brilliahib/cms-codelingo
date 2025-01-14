import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollText, Trophy, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardUserWrapper() {
  return (
    <>
      <div className="space-y-8 my-8">
        <div className="text-center space-y-4">
          <h1 className="font-bold md:text-4xl text-2xl text-nature">
            Halo, <span className="text-white">kenalin namaku</span> Pandu!
          </h1>
          <p className="text-muted">
            Pandu akan memandumu belajar dan menjelajahi dunia pemrograman yang
            seru
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          {/* Panda Image */}
          <Image
            src={"/images/panda.gif"}
            alt="Charing Cub"
            width={1000}
            height={1000}
            className="md:max-w-[400px] max-w-[300px] md:inline hidden"
          />
          {/* Card Service */}
          <div className="md:absolute md:top-[95%] md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-full">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-6">
              <div>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-4">
                      <Zap
                        className="h-6 w-6 text-yellow-400"
                        fill="currentColor"
                      />
                      <h1 className="font-bold text-xl text-primary">
                        Lanjut Belajar
                      </h1>
                    </div>
                    <p>
                      Ayo, lanjutkan petualangan belajarmu! Setiap baris kode
                      membawamu menjadi programmer hebat.
                    </p>
                    <Button>
                      <Link href={"/dashboard/learning"}>Lihat Detail</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-4">
                      <ScrollText className="h-6 w-6 text-yellow-400" />
                      <h1 className="font-bold text-xl text-primary">
                        Pembahasan Quiz
                      </h1>
                    </div>
                    <p>
                      Yuk, cek kembali pembahasan quiz! Pelajari apa yang belum
                      kamu kuasai. Belajar dari kesalahan itu keren!
                    </p>
                    <Button>
                      <Link href={"/dashboard/explanation"}>Lihat Detail</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-4">
                      <Trophy className="h-6 w-6 text-yellow-400" />
                      <h1 className="font-bold text-xl text-primary">
                        Leaderboard
                      </h1>
                    </div>
                    <p>
                      Lihat kamu ada di peringkat berapa! Siapa tahu, kamu yang
                      terbaik. Belajar dan raih xp sebanyak mungkin!
                    </p>
                    <Button>
                      <Link href={"/dashboard/leaderboard"}>Lihat Detail</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
