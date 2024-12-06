import LearningDetailDashboardWrapper from "@/components/organism/dashboard/user/learning/LearningDetailDashboardWrapper";

interface DashboardLearningDetailPageProps {
  params: { id: number };
}

export default function DashboardLearningDetailPage({
  params,
}: DashboardLearningDetailPageProps) {
  return (
    <>
      <LearningDetailDashboardWrapper id={params.id} />
    </>
  );
}
