"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bronze from "/public/images/tier/bronze.svg";
import diamond from "/public/images/tier/diamond.svg";
import emerald from "/public/images/tier/emerald.svg";
import gold from "/public/images/tier/gold.svg";
import silver from "/public/images/tier/silver.svg";
import profile from "/public/images/avatar.svg";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Player {
  rank: number;
  name: string;
  handle: string;
  xp: number;
}

const RankingLeaderboard: React.FC = () => {
  const leagues = ["bronze", "silver", "gold", "emerald", "diamond"] as const;
  const [activeLeagueIndex, setActiveLeagueIndex] = useState(0);
  const activeLeague = leagues[activeLeagueIndex];

  const leagueData: { [key: string]: Player[] } = {
    bronze: [
      { rank: 1, name: "Bagus Tri Atmojo", handle: "#bagus12234", xp: 1260 },
      { rank: 2, name: "Player Two", handle: "#player2", xp: 1150 },
      { rank: 3, name: "Player Three", handle: "#player3", xp: 1050 },
      { rank: 4, name: "Player Four", handle: "#player4", xp: 950 },
      { rank: 5, name: "Player Five", handle: "#player5", xp: 850 },
      { rank: 6, name: "Player Six", handle: "#player6", xp: 750 },
      { rank: 7, name: "Player Seven", handle: "#player7", xp: 650 },
      { rank: 8, name: "Player Eight", handle: "#player8", xp: 550 },
    ],
    silver: [
      { rank: 1, name: "Silver Player One", handle: "#silver1", xp: 1360 },
      { rank: 2, name: "Silver Player Two", handle: "#silver2", xp: 1250 },
      { rank: 3, name: "Silver Player Three", handle: "#silver3", xp: 1150 },
      { rank: 4, name: "Silver Player Four", handle: "#silver4", xp: 1050 },
      { rank: 5, name: "Silver Player Five", handle: "#silver5", xp: 950 },
      { rank: 6, name: "Silver Player Six", handle: "#silver6", xp: 850 },
      { rank: 7, name: "Silver Player Seven", handle: "#silver7", xp: 750 },
      { rank: 8, name: "Silver Player Eight", handle: "#silver8", xp: 650 },
    ],
    gold: [
      { rank: 1, name: "Gold Player One", handle: "#gold1", xp: 1460 },
      { rank: 2, name: "Gold Player Two", handle: "#gold2", xp: 1350 },
      { rank: 3, name: "Gold Player Three", handle: "#gold3", xp: 1250 },
      { rank: 4, name: "Gold Player Four", handle: "#gold4", xp: 1150 },
      { rank: 5, name: "Gold Player Five", handle: "#gold5", xp: 1050 },
      { rank: 6, name: "Gold Player Six", handle: "#gold6", xp: 950 },
      { rank: 7, name: "Gold Player Seven", handle: "#gold7", xp: 850 },
      { rank: 8, name: "Gold Player Eight", handle: "#gold8", xp: 750 },
    ],
    emerald: [
      { rank: 1, name: "Emerald Player One", handle: "#emerald1", xp: 1560 },
      { rank: 2, name: "Emerald Player Two", handle: "#emerald2", xp: 1450 },
      { rank: 3, name: "Emerald Player Three", handle: "#emerald3", xp: 1350 },
      { rank: 4, name: "Emerald Player Four", handle: "#emerald4", xp: 1250 },
      { rank: 5, name: "Emerald Player Five", handle: "#emerald5", xp: 1150 },
      { rank: 6, name: "Emerald Player Six", handle: "#emerald6", xp: 1050 },
      { rank: 7, name: "Emerald Player Seven", handle: "#emerald7", xp: 950 },
      { rank: 8, name: "Emerald Player Eight", handle: "#emerald8", xp: 850 },
    ],
    diamond: [
      { rank: 1, name: "Diamond Player One", handle: "#diamond1", xp: 1660 },
      { rank: 2, name: "Diamond Player Two", handle: "#diamond2", xp: 1550 },
      { rank: 3, name: "Diamond Player Three", handle: "#diamond3", xp: 1450 },
      { rank: 4, name: "Diamond Player Four", handle: "#diamond4", xp: 1350 },
      { rank: 5, name: "Diamond Player Five", handle: "#diamond5", xp: 1250 },
      { rank: 6, name: "Diamond Player Six", handle: "#diamond6", xp: 1150 },
      { rank: 7, name: "Diamond Player Seven", handle: "#diamond7", xp: 1050 },
      { rank: 8, name: "Diamond Player Eight", handle: "#diamond8", xp: 950 },
    ],
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case "bronze":
        return bronze;
      case "silver":
        return silver;
      case "gold":
        return gold;
      case "emerald":
        return emerald;
      case "diamond":
        return diamond;
      default:
        return bronze;
    }
  };

  const handlePrevLeague = () => {
    setActiveLeagueIndex((prevIndex) =>
      prevIndex === 0 ? leagues.length - 1 : prevIndex - 1
    );
  };

  const handleNextLeague = () => {
    setActiveLeagueIndex((prevIndex) => (prevIndex + 1) % leagues.length);
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrevLeague}
            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-md"
            aria-label="Previous League"
          >
            <ChevronLeft />
          </button>
          <div className="flex flex-row items-center justify-center">
            <Image
              height={32}
              width={32}
              src={getTierIcon(activeLeague)}
              alt={"rank"}
              className="h-20 w-20"
            />
            <h1 className="font-bold text-xl">Liga {activeLeague}</h1>
          </div>

          <button
            onClick={handleNextLeague}
            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-md"
            aria-label="Next League"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div>
        <div className="space-y-4">
          {leagueData[activeLeague].map((player, index) => (
            <Card
              key={index}
              className="flex items-center gap-4 p-4 hover:bg-gray-800 rounded-md transition-colors"
            >
              <h1
                className={`rounded-full flex items-center font-bold justify-center h-8 w-8 ${
                  index + 1 === 1
                    ? "bg-yellow-300 text-[#1D2941]"
                    : index + 1 === 2
                    ? "bg-white/80 text-[#1D2941]"
                    : index + 1 === 3
                    ? "bg-orange-500 text-[#1D2941]"
                    : "bg-[#273856] text-white"
                }`}
              >
                {index + 1}
              </h1>

              <Image
                height={32}
                width={32}
                src={profile}
                alt={`${activeLeague} Tier ${player.rank}`}
                className="h-12 w-12"
              />
              <div className="flex-grow">
                <div className="font-medium">{player.name}</div>
                <div className="text-gray-400">{player.handle}</div>
              </div>
              <Badge className="text-yellow-300">
                {player.xp.toLocaleString()} XP
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default RankingLeaderboard;
