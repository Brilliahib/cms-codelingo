"use client";

import { ColumnDef } from "@tanstack/react-table";

import ActionButton from "@/components/molecules/datatable/ActionButton";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Eye, SquarePen } from "lucide-react";
import { Quiz } from "@/types/quiz/quiz";

export const quizColumns: ColumnDef<Quiz>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <p suppressHydrationWarning>{row.original.id}</p>;
    },
  },
  {
    accessorKey: "learning_path_id",
    header: "Learning Path ID",
    cell: ({ row }) => {
      return <p suppressHydrationWarning>{row.original.learning_path_id}</p>;
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return (
        <p suppressHydrationWarning className="md:line-clamp-2 line-clamp-1">
          {row.original.title}
        </p>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return (
        <p suppressHydrationWarning className="md:line-clamp-2 line-clamp-1">
          {row.original.description}
        </p>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      return (
        <p suppressHydrationWarning className="md:line-clamp-2 line-clamp-1">
          {row.original.type}
        </p>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <ActionButton>
          <DropdownMenuLabel>Action</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              href={`/dashboard/admin/quiz/${data.id}/edit`}
              className="flex items-center text-white hover:text-background"
            >
              <SquarePen className="h-4 w-4" />
              <span className="ml-2">Edit Quiz</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href={`/dashboard/admin/quiz/${data.id}`}
              className="flex items-center text-white hover:text-background"
            >
              <Eye className="h-4 w-4" />
              <span className="ml-2">Detail Quiz</span>
            </Link>
          </DropdownMenuItem>
        </ActionButton>
      );
    },
  },
];
