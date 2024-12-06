import CardAchievement from "@/components/molecules/card/CardAchievement";
import CardDailyMission from "@/components/molecules/card/CardDailyMission";
import CardProfile from "@/components/molecules/card/CardProfile";
import CardProgress from "@/components/molecules/card/CardProgress";
import CardStatistics from "@/components/molecules/card/CardStatistics";
import CardUserProfile from "@/components/molecules/card/CardUserProfile";
import { authOptions } from "@/lib/auth";
import { getServerSession, Session } from "next-auth";

export default async function ProfileDashboardWrapper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-12 gap-8">
        <div className="md:w-8/12 w-full space-y-6">
          <CardUserProfile session={session!} />
          <CardStatistics />
          <CardAchievement />
        </div>
        <div className="md:w-4/12 w-full space-y-6">
          <CardProfile session={session!} />
          <CardProgress />
        </div>
      </div>
    </>
  );
}
