"use client";

import { type Task, tasks } from "@/db/schema";
import type { DataTableRowAction } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
//import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getErrorMessage } from "@/lib/handle-error";
import { formatDate } from "@/lib/utils";

import { updateTask } from "../_lib/actions";
import { getPriorityIcon, getStatusIcon } from "../_lib/utils";

interface GetColumnsProps {
  setRowAction: React.Dispatch<
    React.SetStateAction<DataTableRowAction<Task> | null>
  >;
}

export function getColumns({
  setRowAction,
}: GetColumnsProps): ColumnDef<Task>[] {
  return [
    // {
    //   id: "select",
    //   header: ({ table }) => (
    //     <Checkbox
    //       checked={
    //         table.getIsAllPageRowsSelected() ||
    //         (table.getIsSomePageRowsSelected() && "indeterminate")
    //       }
    //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //       aria-label="Select all"
    //       className="translate-y-0.5"
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <Checkbox
    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value) => row.toggleSelected(!!value)}
    //       aria-label="Select row"
    //       className="translate-y-0.5"
    //     />
    //   ),
    //   enableSorting: false,
    //   enableHiding: false,
    // },
    {
      accessorKey: "code",
      header: ({ column }) => (
        <div className="w-full flex-col border-r border-zinc-800">
          <DataTableColumnHeader column={column} title="Descrição" />
        </div>
      ),
      cell: ({ row }) => <div className="w-20">{row.getValue("code")}</div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
  accessorKey: "title",
  header: ({ column }) => (
    <div className="flex flex-col items-center justify-center border-r border-zinc-800">
      {/* Cabeçalho principal */}
      <span className="text-gray-400 text-sm font-medium pb-1">
        Anhanguera
      </span>
      {/* Linha separadora horizontal */}
      <div className="w-full border-b border-zinc-800"></div>
      {/* Subcabeçalho com ordenação */}
      <DataTableColumnHeader column={column} title="Realizados" />
    </div>
  ),
  cell: ({ row }) => {
    const label = tasks.label.enumValues.find(
      (label) => label === row.original.label,
    );

    return (
      <div className="flex space-x-2 border-r border-gray-300 px-2">
        {label && <Badge variant="outline">{label}</Badge>}
        <span className="max-w-[31.25rem] truncate font-medium">
          {row.getValue("title")}
        </span>
      </div>
    );
  },
},    
    {
      accessorKey: "status",
      header: ({ column }) => (
        <div className="flex flex-col items-center justify-ceter border-r border-zinc-800">
           {/* Cabeçalho principal */}
          <span className="text-gray-400 text-sm font-medium pb-1"> 
          Jales
          </span> 
           {/* Linha separadora horizontal */}
          <div className="w-full border-b border-zinc-800"></div>
          {/* Subcabeçalho com ordenação */}
        <DataTableColumnHeader column={column} title="Realizados" />
        </div>
      ),
      cell: ({ row }) => {
        const status = tasks.status.enumValues.find(
          (status) => status === row.original.status,
        );

        if (!status) return null;

        const Icon = getStatusIcon(status);

        return (
          <div className="flex space-x-2 border-r">
            <Icon
              className="mr-2 size-4 text-muted-foreground"
              aria-hidden="true"
            />
            <span className="capitalize">{status}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "priority",
      header: ({ column }) => (
        <div className="flex flex-col items-center justify-ceter border-r border-zinc-800">
        {/* Cabeçalho principal */}
       <span className="text-gray-400 text-sm font-medium pb-1"> 
       Ceasa
       </span> 
        {/* Linha separadora horizontal */}
       <div className="w-full border-b border-zinc-800"></div>
       {/* Subcabeçalho com ordenação */}
     <DataTableColumnHeader column={column} title="Realizados" />
     </div>
      ),
      cell: ({ row }) => {
        const priority = tasks.priority.enumValues.find(
          (priority) => priority === row.original.priority,
        );

        if (!priority) return null;

        const Icon = getPriorityIcon(priority);

        return (
          <div className="flex items-center">
            <Icon
              className="mr-2 size-4 text-muted-foreground"
              aria-hidden="true"
            />
            <span className="capitalize">{priority}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "archived",
      header: ({ column }) => (
        <div className="flex flex-col items-center justify-ceter border-r border-zinc-800">
        {/* Cabeçalho principal */}
       <span className="text-gray-400 text-sm font-medium pb-1"> 
       Bauru
       </span> 
        {/* Linha separadora horizontal */}
       <div className="w-full border-b box-border border-zinc-800"></div>
       {/* Subcabeçalho com ordenação */}
     <DataTableColumnHeader column={column} title="Realizados" />
     </div>
      ),
      cell: ({ row }) => (
        <Badge variant="outline">{row.original.archived ? "Yes" : "No"}</Badge>
      ),
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <div className="flex flex-col items-center justify-ceter border-r border-zinc-800">
        {/* Cabeçalho principal */}
       <span className="text-gray-400 text-sm font-medium pb-1"> 
       Mauá
       </span> 
        {/* Linha separadora horizontal */}
       <div className="w-full border-b border-zinc-800"></div>
       {/* Subcabeçalho com ordenação */}
     <DataTableColumnHeader column={column} title="Realizados" />
     </div>
      ),
      cell: ({ cell }) => formatDate(cell.getValue() as Date),
    },
    {
      accessorKey: "benassi",
      header: ({ column }) => (
        <div className="flex flex-col items-center justify-ceter border-r border-zinc-800">
        {/* Cabeçalho principal */}
       <span className="text-gray-400 text-sm font-medium pb-1"> 
       Benassi
       </span> 
        {/* Linha separadora horizontal */}
       <div className="w-full border-b border-zinc-800"></div>
       {/* Subcabeçalho com ordenação */}
     <DataTableColumnHeader column={column} title="Realizados" />
     </div>
      ),
      cell: ({ cell }) => formatDate(cell.getValue() as Date),
    },
    {
      id: "actions",
      cell: function Cell({ row }) {
        const [isUpdatePending, startUpdateTransition] = React.useTransition();

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
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={row.original.label}
                    onValueChange={(value) => {
                      startUpdateTransition(() => {
                        toast.promise(
                          updateTask({
                            id: row.original.id,
                            label: value as Task["label"],
                          }),
                          {
                            loading: "Updating...",
                            success: "Label updated",
                            error: (err) => getErrorMessage(err),
                          },
                        );
                      });
                    }}
                  >
                    {tasks.label.enumValues.map((label) => (
                      <DropdownMenuRadioItem
                        key={label}
                        value={label}
                        className="capitalize"
                        disabled={isUpdatePending}
                      >
                        {label}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
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
