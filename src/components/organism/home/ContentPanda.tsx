import Image from "next/image";
import learnPanda from "/public/images/learn-panda.gif";
import { Zap } from "lucide-react";

export default function ContentPanda() {
  return (
    <>
      <div className="bg-[#273856] w-full flex flex-col md:flex-row items-center justify-center gap-16 py-12  ">
      <div className="bg-[#273856] w-full flex flex-col md:flex-row items-center justify-center gap-12 pad-x md:py-16 py-12">
        <Image
          src={learnPanda}
          alt="learn panda"
          width="1000"
          height="1000"
          className="md:max-w-[300px] max-w-[200px]"
        />
        <div className="md:w-6/12 text-justify space-y-6">
        <div className="md:w-6/12 text-justify space-y-4">
          <div className="flex items-center gap-4">
            <Image src={"/images/zap.svg"} alt="Petir" width={32} height={32}/>
            <h1 className="font-bold tracking-wider text-primary md:text-xl text-2xl">
              Belajar Mulai dari Dasar hingga Mahir
            </h1>
          </div>
          <p className="opacity-80 md:text-base text-sm">
            CodeLingo adalah program pembelajaran coding yang dirancang khusus
            untuk anak-anak, mulai dari pemula hingga level intermediate. Materi
            disampaikan dengan pendekatan yang ramah, interaktif, dan
            menyenangkan, sehingga proses belajar coding terasa seperti
            permainan yang seru!
          </p>
        </div>
        <div id="our-service"></div>
      </div>
    </>
  );
}
