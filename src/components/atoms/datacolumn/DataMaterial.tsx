"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import ActionButton from "@/components/molecules/datatable/ActionButton";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Eye, SquarePen } from "lucide-react";
import { Material } from "@/types/material/material";
import { baseUrl } from "@/utils/misc";

export const materialColumns: ColumnDef<Material>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <p suppressHydrationWarning>{row.original.id}</p>;
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return (
        <p suppressHydrationWarning className="md:line-clamp-3 line-clamp-1">
          {row.original.title}
        </p>
      );
    },
  },
  {
    accessorKey: "material_image",
    header: "Material Image",
    cell: ({ row }) => {
      const imageUrl = row.original.material_image;
      const isValidUrl =
        imageUrl?.startsWith("http://") || imageUrl?.startsWith("https://");
      return (
        <Image
          src={`${baseUrl}/${row.original.material_image}`}
          alt={row.original.title}
          width={1000}
          height={1000}
          className="rounded object-cover"
        />
      );
    },
  },

  {
    accessorKey: "material_text",
    header: "Material Text",
    cell: ({ row }) => {
      return (
        <p suppressHydrationWarning className="md:line-clamp-3 line-clamp-1">
          {row.original.material_text}
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
              href={`/dashboard/admin/material/${data.id}/edit`}
              className="flex items-center text-white hover:text-background"
            >
              <SquarePen className="h-4 w-4" />
              <span className="ml-2">Edit Material</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href={`/dashboard/admin/material/${data.id}`}
              className="flex items-center text-white hover:text-background"
            >
              <Eye className="h-4 w-4" />
              <span className="ml-2">Detail Material</span>
            </Link>
          </DropdownMenuItem>
        </ActionButton>
      );
    },
  },
];
