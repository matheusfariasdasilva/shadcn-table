import type { SearchParams } from "@/types";
import * as React from "react";

import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { DateRangePicker } from "@/components/date-range-picker";
import { Shell } from "@/components/shell";
import { Skeleton } from "@/components/ui/skeleton";
import { getValidFilters } from "@/lib/data-table";

import { FeatureFlagsProvider } from "./_components/feature-flags-provider";
import { TasksTable } from "./_components/tasks-table";
import { sampleTasks } from "./_lib/sample-data";

interface IndexPageProps {
  searchParams: SearchParams;
}

export default function IndexPage({ searchParams }: IndexPageProps) {
  // Simular os dados e contagens
  const mockData = {
    data: sampleTasks,
    pageCount: 1
  };

  const mockStatusCounts = {
    "todo": 1,
    "in-progress": 1,
    "done": 2,
    "canceled": 1
  };

  const mockPriorityCounts = {
    "low": 1,
    "medium": 2,
    "high": 2
  };

  const promises: Promise<[
    typeof mockData,
    typeof mockStatusCounts,
    typeof mockPriorityCounts
  ]> = Promise.resolve([mockData, mockStatusCounts, mockPriorityCounts]);

  return (
    <Shell className="gap-2">
      <FeatureFlagsProvider>
        <React.Suspense fallback={<Skeleton className="h-7 w-52" />}>
          <DateRangePicker
            triggerSize="sm"
            triggerClassName="ml-auto w-56 sm:w-60"
            align="end"
            shallow={false}
          />
        </React.Suspense>
        <React.Suspense
          fallback={
            <DataTableSkeleton
              columnCount={6}
              searchableColumnCount={1}
              filterableColumnCount={2}
              cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem", "8rem"]}
              shrinkZero
            />
          }
        >
          <TasksTable promises={promises} />
        </React.Suspense>
      </FeatureFlagsProvider>
    </Shell>
  );
}
