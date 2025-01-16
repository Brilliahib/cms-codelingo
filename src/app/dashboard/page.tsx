"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardUserWrapper from "@/components/organism/dashboard/user/dashboard/DashboardUserWrapper";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    router.push("/login");
    return null;
  }
  if (session.user.role === "admin") {
    router.push("/dashboard/admin");
    return null;
  }
  return (
    <>
      <DashboardUserWrapper />
    </>
  );
}
