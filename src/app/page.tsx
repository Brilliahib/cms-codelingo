import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center md:px-0 px-4">
      <div className="flex flex-col justify-center items-center space-y-6">
        <div className="flex gap-2 items-center text-center">
          <TriangleAlert className="md:flex hidden" />
          <h1>
            This project is currently under development, Please click the
            following button to try it out.
          </h1>
        </div>
        <Button className="w-fit">
          <Link href={"/login"}>Coba Sekarang</Link>
        </Button>
      </div>
    </div>
  );
}
