import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Session } from "next-auth";
import { Badge } from "@/components/ui/badge";
import profile from "/public/images/profile.png";
import bronze from "/public/images/tier/bronze.svg";
import diamond from "/public/images/tier/diamond.svg";
import emerald from "/public/images/tier/emerald.svg";
import gold from "/public/images/tier/gold.svg";
import silver from "/public/images/tier/silver.svg";
import RankingLeaderboard from "./RankingLeaderboard";

export interface CardProfileLeaderboardProps {
  session: Session;
}

export default function CardProfileLeaderboard({
  session,
}: CardProfileLeaderboardProps) {
  return (
    <>
      {/* profile component */}
      <div className="flex flex-col lg:flex-row gap-4 mb-12">
        <Card className="w-full lg:w-3/4 p-4 flex flex-col lg:flex-row justify-start gap-4 items-center">
          <Image src={profile} alt="Profile" width="120" height="120" />
          <div>
            <h1 className="text-xl lg:text-2xl font-bold">
              {session.user.name}
            </h1>
            <h1 className="text-md lg:text-lg opacity-80 font-bold">
              #{session.user.username}
            </h1>
            <Badge className="text-yellow-300 text-md lg:text-lg font-bold">
              1260 XP
            </Badge>
          </div>
        </Card>
        <Card className="w-full lg:w-1/4 flex flex-col items-center justify-center">
          <h1 className="font-bold text-lg lg:text-base">Rank saat ini</h1>
          <div className="flex flex-row items-center justify-center">
            <Image src={bronze} alt="bronze" width={80} height={80} />
            <h1 className="font-bold text-xl lg:text-2xl">6th</h1>
          </div>
        </Card>
      </div>
      <hr className="border-t-2 border-[#90A3BD]" />
      {/* ranking bruh */}
      <RankingLeaderboard />
    </>
  );
}
