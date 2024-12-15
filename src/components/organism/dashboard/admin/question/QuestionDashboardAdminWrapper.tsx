"use client";

import { questionColumns } from "@/components/atoms/datacolumn/DataQuestion";
import SearchInput from "@/components/atoms/search/SearchInput";
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { Button } from "@/components/ui/button";
import { useGetAllQuestion } from "@/http/(admin)/question/get-all-question";
import { useGetDetailQuiz } from "@/http/(admin)/quiz/get-detail-quiz";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

interface QuestionParams {
  id: string;
}

export default function QuestionDashboardAdminWrapper({ id }: QuestionParams) {
  const { data: session, status } = useSession();
  const { data } = useGetAllQuestion(
    {
      id,
      token: session?.access_token as string,
    },
    { enabled: status === "authenticated" }
  );

  const { data: quiz } = useGetDetailQuiz(
    {
      id,
      token: session?.access_token as string,
    },
    { enabled: status === "authenticated" }
  );

  const [searchQuery, setSearchQuery] = useState("");

  const filteredData =
    data?.data.filter((question) =>
      question.question_text.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];
  return (
    <>
      <DashboardTitle title={quiz?.data.title ?? ""} />
      <div className="py-8 space-y-8">
        <div className="flex justify-between">
          <SearchInput
            onSearch={setSearchQuery}
            className="min-w-[250px]"
            props="Cari pertanyaan..."
          />
          <Link href={"/dashboard/admin/quizzes/create"}>
            <Button>Tambah Pertanyaan</Button>
          </Link>
        </div>
        <DataTable columns={questionColumns} data={filteredData} />
      </div>
    </>
  );
}
