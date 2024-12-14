"use client";

import { materialColumns } from "@/components/atoms/datacolumn/DataMaterial";
import SearchInput from "@/components/atoms/search/SearchInput";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { Button } from "@/components/ui/button";
import { useGetAllMaterialAdmin } from "@/http/(admin)/material/get-all-material";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function MaterialsDashboardAdminWrapper() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetAllMaterialAdmin(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    }
  );

  const [searchQuery, setSearchQuery] = useState("");

  const filteredData =
    data?.data.filter((quiz) =>
      quiz.title?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];
  return (
    <>
      <div className="py-8 space-y-8">
        <div className="flex justify-between">
          <SearchInput
            onSearch={setSearchQuery}
            className="min-w-[250px]"
            props="Search Materials..."
          />
          <Link href={"/dashboard/admin/materials/create"}>
            <Button>Tambah Materials</Button>
          </Link>
        </div>
        <DataTable columns={materialColumns} data={filteredData} />
      </div>
    </>
  );
}
