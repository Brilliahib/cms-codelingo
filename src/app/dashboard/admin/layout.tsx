"use client";

import { PropsWithChildren, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AdminLayout = ({ children }: PropsWithChildren) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session.user.role !== "admin") {
      router.push("/dashboard");
    }
  }, [status, session, router]);

  if (status === "loading") {
    // load data before comes
    return <div>Loading...</div>;
  }

  if (
    status === "unauthenticated" ||
    (session && session.user.role !== "admin")
  ) {
    // Prevent rendering children if unauthenticated or not admin
    return null;
  }

  return <div className="min-h-full w-full">{children}</div>;
};

export default AdminLayout;
