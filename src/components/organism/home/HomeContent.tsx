"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import sparkling from "/public/images/sparkling.png";
import Image from "next/image";
import Link from "next/link";

export default function HomeContent() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with "fade-in-section" class
    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${sparkling.src})` }}
      id="home"
    >
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex justify-center items-center md:px-0 px-4 overflow-hidden">
        <div className="flex flex-col items-center justify-start">
          <div className="space-y-6 text-center mt-36 fade-in-section opacity-0 transition-all duration-[2000]">
            <div className="space-y-2 ">
              <h1 className="font-bold text-3xl ">
                Belajar Coding Jadi{" "}
                <span className="text-green-500">Mudah</span> dan{" "}
                <span className="text-green-500">Menyenangkan</span>
              </h1>
              <p className="text-muted opacity-80">
                Belajar coding seperti bermain, penuh tantangan dan keseruan.
              </p>
            </div>
            <Button className="w-fit bg-yellow-300 border-yellow-600 hover:bg-yellow-300/80">
              <Link href={"/login"}>Coba Sekarang</Link>
            </Button>
      <div className="relative z-10 min-h-screen flex justify-center items-center md:px-0 px-4">
        <div className="flex flex-col justify-center items-center space-y-6 md:space-y-16">
          <div className="space-y-4 text-center">
            <h1 className="font-bold text-3xl">
              Belajar Coding Jadi <span className="text-green-500">Mudah</span>{" "}
              dan <span className="text-green-500">Menyenangkan</span>
            </h1>
            <p className="text-muted opacity-80">
              Belajar coding seperti bermain, penuh tantangan dan keseruan.
            </p>
            <Button className="w-fit bg-yellow-300 border-yellow-600 hover:bg-yellow-300/80">
              <Link href={"/login"}>Coba Sekarang</Link>
            </Button>
          </div>
          <div>
            <Image
              src={"/images/panda.gif"}
              alt="Charing Cub"
              width={1000}
              height={1000}
              className="md:max-w-[400px] max-w-[300px]"
            />
          </div>
          <Image
            src={"/images/panda.gif"}
            alt="Charing Cub"
            width={1000}
            height={1000}
            className="md:max-w-[400px] max-w-[200px] translate-y-12"
          />
          <div id="about"></div>
        </div>
      </div>
    </div>
  );
}
