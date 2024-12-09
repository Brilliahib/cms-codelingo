import { Button } from "@/components/ui/button";
import sparkling from "/public/images/sparkling.png";
import Image from "next/image";
import Link from "next/link";

export default function HomeContent() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${sparkling.src})` }}
    >
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex justify-center items-center md:px-0 px-4">
        <div className="flex flex-col justify-center items-center space-y-6">
          <div className="space-y-4 text-center">
            <h1 className="font-bold text-3xl">
              Belajar Coding Jadi <span className="text-green-500">Mudah</span>{" "}
              dan <span className="text-green-500">Menyenangkan</span>
            </h1>
            <p className="text-muted opacity-80">
              Belajar coding seperti bermain, penuh tantangan dan keseruan.
            </p>
          </div>
          <Button className="w-fit bg-yellow-300 border-yellow-600 hover:bg-yellow-300/80">
            <Link href={"/login"}>Coba Sekarang</Link>
          </Button>
          <div>
            <Image
              src={"/images/panda.gif"}
              alt="Charing Cub"
              width={1000}
              height={1000}
              className="md:max-w-[400px] max-w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
