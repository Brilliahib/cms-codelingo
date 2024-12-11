import Image from "next/image";
import learnPanda from "/public/images/learn-panda.gif";
import { Zap } from "lucide-react";

export default function ContentPanda() {
  return (
    <>
      <div className="bg-[#273856] w-full flex flex-col md:flex-row items-center justify-center gap-12 p-8">
        <Image
          src={learnPanda}
          alt="learn panda"
          width="200"
          height="200"
          className="w-1/8"
        />
        <div className="md:w-6/12 text-justify">
          <div className="flex items-center gap-4">
            <Zap className="h-10 w-10 text-yellow-400" fill="currentColor" />
            <h1 className="font-bold tracking-wider text-primary md:text-xl text-lg">
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
      </div>
    </>
  );
}
