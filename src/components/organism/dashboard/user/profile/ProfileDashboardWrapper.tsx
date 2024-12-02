import CardAchievement from "@/components/molecules/card/CardAchievement";
import CardDailyMission from "@/components/molecules/card/CardDailyMission";
import CardProfile from "@/components/molecules/card/CardProfile";
import CardStatistics from "@/components/molecules/card/CardStatistics";
import CardUserProfile from "@/components/molecules/card/CardUserProfile";

export default function ProfileDashboardWrapper() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-12 gap-8">
        <div className="md:w-8/12 w-full space-y-6">
          <CardUserProfile />
          <CardStatistics />
          <CardAchievement />
        </div>
        <div className="md:w-4/12 w-full space-y-6">
          <CardProfile />
          <CardDailyMission />
        </div>
      </div>
    </>
  );
}
