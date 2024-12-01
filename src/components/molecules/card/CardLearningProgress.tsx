import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function CardLearningProgress() {
  return (
    <>
      <Card className="bg-transparent border">
        <CardContent className="p-8">
          <div className="md:space-y-6 space-y-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold text-muted/80">Misi Harian</h1>
              <Link
                href={"#"}
                className="text-lg font-bold uppercase text-primary hover:underline"
              >
                Lihat Semua
              </Link>
            </div>
            <div className="flex gap-4 items-center"></div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
