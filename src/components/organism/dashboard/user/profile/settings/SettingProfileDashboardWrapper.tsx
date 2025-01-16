import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import CardDailyMission from "@/components/molecules/card/CardDailyMission";
import CardLearningProgress from "@/components/molecules/card/CardLearningProgress";
import CardPhotoProfile from "@/components/molecules/card/CardPhotoProfile";
import FormUpdateAccount from "@/components/molecules/form/FormUpdateAccount";
import { authOptions } from "@/lib/auth";
import { ArrowLeft } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function SettingProfileDashboardWrapper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-12 gap-8">
        <div className="md:w-8/12 w-full space-y-12">
          <Link href={"/dashboard/profile"}>
            <div className="md:space-y-6 space-y-4 rounded-xl bg-surface hover:text-opacity-100 transition text-opacity-80 text-white shadow p-2">
              <div className="flex items-center gap-2">
                <ArrowLeft className="md:h-10 md:w-10 w-6 h-6 text-white" />
                <h1 className="font-bold md:text-2xl text-xl">Kembali</h1>
              </div>
            </div>
          </Link>
          <DashboardTitle title="Setting Profile" />
          <CardPhotoProfile session={session!} />
          <FormUpdateAccount session={session!} />
        </div>
        <div className="md:w-4/12 w-full space-y-6">
          <CardDailyMission />
          <CardLearningProgress />
        </div>
      </div>
    </>
  );
}
