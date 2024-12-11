import { MatchingPair } from "@/components/molecules/card/CardMatchingPairs";

import flowchart from "/public/images/flowchart.gif";
import pairs from "/public/images/pairs.gif";
import Image from "next/image";

export default function Reason() {
  const matches = {
    String: 'var x = "Hello"',
    Integer: "var x = 12",
  };

  return (
    <>
      <div className="my-24 flex flex-col items-center">
        <h1 className="text-green-500 font-bold text-2xl tracking-wider text-center">
          Kenapa Memilih CodeLingo?
        </h1>
        <div className="my-24">
          {/* pengganti dengan GIF aja sekarang mah */}
          {/* <MatchingPair pairs={matches} /> */}
          <Image src={pairs} alt="pairs" width={500} height={500} />
        </div>
        <div className="flex flex-col items-center space-y-4 pb-8">
          <h1 className="text-[#38B5FC] text-2xl font-bold">
            Program Belajar Interaktif
          </h1>
          <p className="w-1/2 text-center opacity-80">
            Anak-anak belajar coding dengan materi visual yang menarik dan kuis
            interaktif seperti permainan, sehingga belajar terasa seru dan
            menyenangkan.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 pb-8">
          <Image src={flowchart} alt="flowchart" width={500} height={500} />
          <h1 className="text-[#38B5FC] text-2xl font-bold">
            Pendekatan Ramah Anak
          </h1>
          <p className="w-1/2 text-center opacity-80">
            Pembelajaran dirancang khusus agar sesuai dengan kebutuhan
            anak-anak, menggunakan gambar berwarna-warni, animasi interaktif,
            dan narasi sederhana yang mudah dipahami.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 pb-8">
          {/* animasi tambahan lainnya? */}
          <Image src={flowchart} alt="flowchart" width={500} height={500} />
          <h1 className="text-[#38B5FC] text-2xl font-bold">
            Belajar Seperti Bermain
          </h1>
          <p className="w-1/2 text-center opacity-80">
            Pembelajaran dikemas seperti permainan, di mana anak-anak bisa
            mengumpulkan EXP, mencapai level baru, dan bersaing di liga
            leaderboard yang akan meningkatkan rasa percaya diri dan semangat
            anak untuk menyelesaikan tantangan berikutnya.
          </p>
        </div>
      </div>
    </>
  );
}
