"use client";

import { quizColumns } from "@/components/atoms/datacolumn/DataQuiz";
import DialogCreateQuizzes from "@/components/atoms/dialog/DialogCreateQuizzes";
import SearchInput from "@/components/atoms/search/SearchInput";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { Button } from "@/components/ui/button";
import { useGetAllQuizAdmin } from "@/http/(admin)/quiz/get-all-quiz";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function QuizzesDashboardAdminWrapper() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetAllQuizAdmin(
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

  const [dialogCreateQuizzesOpen, setDialogCreateQuizzesOpen] = useState(false);

  const handleQuizzesDialogOpen = () => {
    setDialogCreateQuizzesOpen(true);
  };
  return (
    <>
      <div className="py-8 space-y-8">
        <div className="flex justify-between">
          <SearchInput
            onSearch={setSearchQuery}
            className="min-w-[250px]"
            props="Search Quiz..."
          />
          <Button onClick={handleQuizzesDialogOpen}>Tambah Quiz</Button>
        </div>
        <DataTable columns={quizColumns} data={filteredData} />
      </div>
      <DialogCreateQuizzes
        open={dialogCreateQuizzesOpen}
        setOpen={setDialogCreateQuizzesOpen}
      />
    </>
  );
}
