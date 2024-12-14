import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AvatarProfileDashboardContent() {
  return (
    <>
      <div className="flex flex-col lg:space-y-16 space-y-8">
        <div className="flex flex-col lg:space-y-16 space-y-8 items-center justify-center">
          <Image
            src="/images/profile/general.png"
            alt="profile"
            height={100}
            width={100}
            className="rounded-full"
          />
          <div className="flex items-center gap-4 md:gap-8">
            <Image
              src="/images/profile/general.png"
              alt="profile"
              height={100}
              width={100}
              className="rounded-full"
            />
            <Image
              src="/images/profile/zombie.png"
              alt="profile"
              height={100}
              width={100}
              className="rounded-full"
            />
            <Image
              src="/images/profile/pirates.png"
              alt="profile"
              height={100}
              width={100}
              className="rounded-full"
            />
            <Image
              src="/images/profile/dracula.png"
              alt="profile"
              height={100}
              width={100}
              className="rounded-full"
            />
            <Image
              src="/images/profile/devil.png"
              alt="profile"
              height={100}
              width={100}
              className="rounded-full"
            />
            <Image
              src="/images/profile/santa-1.png"
              alt="profile"
              height={100}
              width={100}
              className="rounded-full"
            />
            <Image
              src="/images/profile/santa-2.png"
              alt="profile"
              height={100}
              width={100}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Link href={"/dashboard/profile/settings"}>
            <Button variant={"secondary"}>Batalkan</Button>
          </Link>
          <Button>Simpan</Button>
        </div>
      </div>
    </>
  );
}
