import ExplanationDetailDashboardWrapper from "@/components/organism/dashboard/user/explanation/ExplanationDetailDashboardWrapper";

interface DashboardExplanationDetailPageProps {
  params: { id: string };
}

export default async function DashboardExplanationDetailPage({
  params,
}: DashboardExplanationDetailPageProps) {
  const { id } = await params;

  return (
    <>
      <ExplanationDetailDashboardWrapper id={id} />
    </>
  );
}
