import LearningDetailDashboardWrapper from "@/components/organism/dashboard/user/learning/LearningDetailDashboardWrapper";

interface DashboardLearningDetailPageParams {
  params: { id: number };
}

export default function DashboardLearningDetailPage({
  params,
}: DashboardLearningDetailPageParams) {
  return (
    <>
      <LearningDetailDashboardWrapper id={params.id} />
    </>
  );
}
