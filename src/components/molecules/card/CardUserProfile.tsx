import Image from "next/image";
import profile from "/public/images/profile.png";
import { Session } from "next-auth";
import { Settings } from "lucide-react";
import Link from "next/link";

export interface CardUserProfileProps {
  session: Session;
}

export default function CardUserProfile({ session }: CardUserProfileProps) {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-row items-center gap-8">
          <Image src={profile} alt="profile" height={100} width={100} />
          <div>
            <h1 className="text-2xl font-bold">{session.user.name}</h1>
            <h1 className="text-xl opacity-80">#{session.user.username}</h1>
          </div>
        </div>
        <Link
          href={"/dashboard/profile/settings"}
          className="p-3 bg-surface rounded-md h-fit"
        >
          <Settings className="h-7 w-7 text-gray-300" />
        </Link>
      </div>
      <hr className="border-t-2 border-[#90A3BD]" />
    </>
  );
}
