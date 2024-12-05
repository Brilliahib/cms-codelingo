import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeContent() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center md:px-0 px-4">
        <div className="flex flex-col justify-center items-center space-y-6">
          <div className="space-y-4 text-center">
            <h1 className="font-bold text-3xl">
              Belajar Coding Jadi <span className="text-green">Mudah</span> dan{" "}
              <span className="text-green">Menyenangkan</span>
            </h1>
            <p className="text-muted">
              Belajar coding seperti bermain, penuh tantangan dan keseruan.
            </p>
          </div>
          <Button className="w-fit bg-yellow-300 border-yellow-600 hover:bg-yellow-300/80">
            <Link href={"/login"}>Coba Sekarang</Link>
          </Button>
          <div>
            <Image
              src={"/images/mascot.png"}
              alt="Charing Cub"
              width={1000}
              height={1000}
              className="max-w-[400px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
