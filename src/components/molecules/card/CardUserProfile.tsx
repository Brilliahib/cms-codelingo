import Image from "next/image";
import profile from "/public/images/profile.png";

export default function CardUserProfile() {
  return (
    <>
      <div className="flex flex-row items-center gap-8">
        {/* dummy image */}
        <Image src={profile} alt="profile" height={100} width={100} />
        <div>
          <h1 className="text-2xl font-bold">Bagus Tri Atmojo</h1>
          <h1 className="text-xl opacity-80">#gggaming1234</h1>
        </div>
      </div>
      <hr className="border-t-2 border-[#90A3BD]" />
    </>
  );
}
