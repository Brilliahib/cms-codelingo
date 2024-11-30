import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CardProfile() {
  return (
    <>
      <Card className="bg-transparent border">
        <CardContent className="p-8">
          <div className="md:space-y-6 space-y-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold text-muted/80">Profile</h1>
              <Link
                href={"#"}
                className="text-lg font-bold uppercase text-primary hover:underline"
              >
                Lihat Semua
              </Link>
            </div>
            <div className="flex items-center md:gap-6 gap-4">
              <Image
                src="/images/avatar.svg"
                alt="Profile"
                width={1000}
                height={1000}
                className="w-20 h-20"
              />
              <div className="space-y-2">
                <h1 className="font-bold text-xl">Bagus Tri Atmojo</h1>
                <p className="font-semibold">Level 99</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Star
                className="text-yellow-400 h-8 w-8"
                fill="currentColor"
                stroke="none"
              />
              <Progress value={30} />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
