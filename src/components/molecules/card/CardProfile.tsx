"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

import bronze from "/public/images/tier/bronze.svg";
import silver from "/public/images/tier/silver.svg";
import gold from "/public/images/tier/gold.svg";
import diamond from "/public/images/tier/diamond.svg";
import emerald from "/public/images/tier/emerald.svg";

import { useFetchLeague } from "@/http/(user)/profile/get-league";

interface CardProfileProps {
  session: Session;
}

const leagueImages: Record<string, string> = {
  bronze: bronze.src,
  silver: silver.src,
  gold: gold.src,
  diamond: diamond.src,
  emerald: emerald.src,
};

export default function CardProfile({ session }: CardProfileProps) {
  const { data, isLoading, isError } = useFetchLeague(session.access_token, {
    enabled: !!session.access_token,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error: Tidak dapat memuat data liga.</div>;
  }

  const currentLeagueImage = leagueImages[data.current_league];
  const nextLeagueImage = leagueImages[data.next_league];

  return (
    <Card className="bg-transparent border">
      <CardContent className="p-8">
        <div className="md:space-y-6 space-y-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold text-muted/80">Profile</h1>
            <Link
              href={"#"}
              className="text-lg font-bold uppercase text-primary hover:underline"
            >
              Lihat Semua
            </Link>
          </div>
          <div className="flex items-center md:gap-6 gap-4">
            <Image
              src="/images/avatar.svg"
              alt="Profile"
              width={1000}
              height={1000}
              className="w-20 h-20"
            />
            <div className="space-y-2">
              <h1 className="font-bold text-xl">{session.user.name}</h1>
              <p className="font-semibold uppercase tracking-wider">
                Liga {data.current_league}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Image
              src={currentLeagueImage}
              alt={data.current_league}
              height={50}
              width={50}
            />
            <Progress type="league" value={data.progress} />
            <Image
              src={nextLeagueImage}
              alt={data.next_league}
              height={50}
              width={50}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
