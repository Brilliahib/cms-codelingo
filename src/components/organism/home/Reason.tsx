import { MatchingPair } from "@/components/molecules/card/CardMatchingPairs";
"use client";

import { useEffect } from "react";
import flowchart from "/public/images/flowchart.gif";
import pairs from "/public/images/pairs.gif";
import liga from "/public/images/liga.gif";
import Image from "next/image";

export default function Reason() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 } // Elemen terlihat 10% baru animasi berjalan
    );

    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="my-24 flex flex-col items-center px-8">
      <h1 className="fade-in-section opacity-0 transition-all duration-[2000] text-green-500 font-bold text-3xl tracking-wider text-center pb-56">
        Kenapa Memilih CodeLingo?
      </h1>

      {/* Section 1 */}
      <div className="fade-in-section opacity-0 transition-all duration-[2000] flex flex-col items-center space-y-4 py-48">
        <Image src={liga} alt="flowchart" width={300} height={300} />
        <h1 className="text-[#38B5FC] md:text-2xl text-xl font-bold">
          Belajar Seperti Bermain
        </h1>
        <p className="md:w-1/2 text-center opacity-80">
          Pembelajaran dikemas seperti permainan, di mana anak-anak bisa
          mengumpulkan EXP, mencapai level baru, dan bersaing di liga
          leaderboard yang akan meningkatkan rasa percaya diri dan semangat anak
          untuk menyelesaikan tantangan berikutnya.
        </p>
      </div>

      {/* Section 2 */}
      <div className="fade-in-section opacity-0 transition-all duration-[2000] flex flex-col items-center space-y-4 py-48">
        <Image src={pairs} alt="pairs" width={400} height={400} />
        <h1 className="text-[#38B5FC] md:text-2xl text-xl font-bold">
          Program Belajar Interaktif
        </h1>
        <p className="md:w-1/2 text-center opacity-80">
          Anak-anak belajar coding dengan materi visual yang menarik dan kuis
          interaktif seperti permainan, sehingga belajar terasa seru dan
          menyenangkan.
        </p>
      </div>

      {/* Section 3 */}
      <div className="fade-in-section opacity-0 transition-all duration-[2000] flex flex-col items-center space-y-4 py-48">
        <Image src={flowchart} alt="flowchart" width={400} height={400} />
        <h1 className="text-[#38B5FC] md:text-2xl text-xl font-bold">
          Pendekatan Ramah Anak
        </h1>
        <p className="md:w-1/2 text-center opacity-80">
          Pembelajaran dirancang khusus agar sesuai dengan kebutuhan anak-anak,
          menggunakan gambar berwarna-warni, animasi interaktif, dan narasi
          sederhana yang mudah dipahami.
        </p>
      </div>
    </div>
  );
}
