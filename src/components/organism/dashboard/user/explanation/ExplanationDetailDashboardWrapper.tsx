import CardDailyMission from "@/components/molecules/card/CardDailyMission";
import CardExplanationDetail from "@/components/molecules/card/CardExplanationDetail";
import CardLearningDetail from "@/components/molecules/card/CardLearningDetail";
import CardProfile from "@/components/molecules/card/CardProfile";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

interface LearningDetailProps {
  id: string;
}

export default async function ExplanationDetailDashboardWrapper({
  id,
}: LearningDetailProps) {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-12 gap-8">
        <div className="md:w-8/12 w-full space-y-8">
          <CardExplanationDetail quizId={id} />
        </div>
        <div className="md:w-4/12 w-full space-y-6">
          <CardProfile session={session!} />
          <CardDailyMission />
        </div>
      </div>
    </>
  );
}