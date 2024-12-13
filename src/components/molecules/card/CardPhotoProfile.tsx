import Image from "next/image";
import Link from "next/link";

export default function CardPhotoProfile() {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:space-y-6 space-y-4">
        <Image
          src="/images/profile.png"
          alt="profile"
          height={100}
          width={100}
        />
        <div>
          <Link
            href={"/dashboard/profile/avatar"}
            className="uppercase text-primary font-bold text-xl hover:underline"
          >
            Ubah Avatar
          </Link>
        </div>
      </div>
      <hr className="border-t-2 border-[#90A3BD]" />
    </>
  );
}
