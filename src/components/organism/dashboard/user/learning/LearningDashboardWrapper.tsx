import CardDailyMission from "@/components/molecules/card/CardDailyMission";
import CardProfile from "@/components/molecules/card/CardProfile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Lock } from "lucide-react";

export default function LearningDashboardWrapper() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-12 gap-8">
        <div className="md:w-8/12 w-full space-y-6">
          <Card>
            <CardContent className="p-8">
              <div className="md:space-y-6 space-y-4">
                <Badge>5 Materi</Badge>
                <div className="space-y-4">
                  <h1 className="text-xl md:text-2xl font-bold">Pemrograman</h1>
                  <Progress value={40} />
                  <p>40% Progress Belajar</p>
                </div>
                <Button>Lanjut Belajar</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <div className="md:space-y-6 space-y-4">
                <Badge>5 Materi</Badge>
                <div className="space-y-4">
                  <h1 className="text-xl md:text-2xl font-bold">Pemrograman</h1>
                  <div className="flex gap-4 items-center text-muted-foreground">
                    <Lock />
                    <p className="font-semibold">Masih Terkunci</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <div className="md:space-y-6 space-y-4">
                <Badge>5 Materi</Badge>
                <div className="space-y-4">
                  <h1 className="text-xl md:text-2xl font-bold">Pemrograman</h1>
                  <div className="flex gap-4 items-center text-muted-foreground">
                    <Lock />
                    <p className="font-semibold">Masih Terkunci</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:w-4/12 w-full space-y-6">
          <CardProfile />
          <CardDailyMission />
        </div>
      </div>
    </>
  );
}
