"use client";

import { learningColumns } from "@/components/atoms/datacolumn/DataLearningPath";
import DialogCreateLearningPath from "@/components/atoms/dialog/DialogCreateLearningPath";
import SearchInput from "@/components/atoms/search/SearchInput";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { Button } from "@/components/ui/button";
import { useGetAllLearningPathAdmin } from "@/http/(admin)/learning/get-all-learning";
import { useSession } from "next-auth/react";
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
      learning.title?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  const [dialogCreateLearningPathOpen, setDialogCreateLearningPathOpen] =
    useState(false);

  const handleLearningPathDialogOpen = () => {
    setDialogCreateLearningPathOpen(true);
  };
  return (
    <>
      <div className="py-8 space-y-8">
        <div className="flex justify-between">
          <SearchInput
            onSearch={setSearchQuery}
            className="min-w-[250px]"
            props="Search learning path..."
          />
          <Button onClick={handleLearningPathDialogOpen}>
            Tambah Learning Path
          </Button>
        </div>
        <DataTable columns={learningColumns} data={filteredData} />
      </div>
      <DialogCreateLearningPath
        open={dialogCreateLearningPathOpen}
        setOpen={setDialogCreateLearningPathOpen}
      />
    </>
  );
}
