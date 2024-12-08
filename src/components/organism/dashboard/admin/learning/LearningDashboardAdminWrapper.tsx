"use client";

import { learningColumns } from "@/components/atoms/datacolumn/DataLearningPath";
import SearchInput from "@/components/atoms/search/SearchInput";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { Button } from "@/components/ui/button";
import { useGetAllLearningPathAdmin } from "@/http/(admin)/learning/get-all-learning";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function LearningDashboardAdminWrapper() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetAllLearningPathAdmin(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    }
  );

  const [searchQuery, setSearchQuery] = useState("");

  const filteredData =
    data?.data.filter((learning) =>
      learning.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];
  return (
    <>
      <div className="py-8 space-y-8">
        <div className="flex justify-between">
          <SearchInput
            onSearch={setSearchQuery}
            className="min-w-[250px]"
            props="Search learning path..."
          />
          <Link href={"/dashboard/admin/learning/create"}>
            <Button>Tambah Learning Path</Button>
          </Link>
        </div>
        <DataTable columns={learningColumns} data={filteredData} />
      </div>
    </>
  );
}
