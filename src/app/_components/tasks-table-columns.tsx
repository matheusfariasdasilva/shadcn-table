"use client";

import { type Task } from "@/db/schema";
import type { DataTableRowAction } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";
import * as React from "react";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface GetColumnsProps {
  setRowAction: React.Dispatch<
    React.SetStateAction<DataTableRowAction<Task> | null>
  >;
}

function createRegionColumn(
  key: string,
  regionName: string
): ColumnDef<Task> {
  return {
    accessorKey: key,
    header: ({ column }) => (
      <div className="flex flex-col items-center justify-center border-r border-zinc-800">
        <span className="text-gray-400 text-sm font-medium pb-1">{regionName}</span>
        <div className="w-full border-b border-zinc-800"></div>
        <div className="w-row flex gap-2">
          <DataTableColumnHeader column={column} title="Necessário" />
          <DataTableColumnHeader column={column} title="Realizado" />
        </div>
      </div>
    ),
    cell: () => (
      <div className="flex space-x-2 border-r border-gray-300 px-2">
        <div className="grid grid-cols-2 w-full gap-2">
          <div className="text-center">-</div>
          <div className="text-center">22.942.970</div>
        </div>
      </div>
    ),
  };
}

export function getColumns({
  setRowAction,
}: GetColumnsProps): ColumnDef<Task>[] {
  return [
    {
      accessorKey: "code",
      header: ({ column }) => (
        <div className="w-full flex-col border-r border-zinc-800">
          <DataTableColumnHeader column={column} title="Descrição" />
        </div>
      ),
      cell: ({ row }) => (
        <div
          className="w-full cursor-pointer hover:text-primary hover:underline px-2"
          onClick={() => row.toggleExpanded()}
        >
          {row.getValue("code")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    createRegionColumn("title", "Anhanguera"),
    createRegionColumn("status", "Jales"),
    createRegionColumn("priority", "Ceasa"),
    createRegionColumn("archived", "Bauru"),
    createRegionColumn("createdAt", "Mauá"),
    createRegionColumn("benassi", "Benassi"),
    {
      id: "actions",
      cell: function Cell({ row }) {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label="Open menu"
                variant="ghost"
                className="flex size-8 p-0 data-[state=open]:bg-muted"
              >
                <Ellipsis className="size-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem
                onSelect={() => setRowAction({ row, type: "update" })}
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setRowAction({ row, type: "delete" })}
              >
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
      size: 40,
    },
  ];
}
