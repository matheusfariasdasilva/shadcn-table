import { type Task } from "@/db/schema";

export const sampleTasks: Task[] = [
    {
        id: "task_1",
        code: "13.8M",
        title: "13.8M",
        status: "done",
        priority: "high",
        label: "documentation",
        archived: false,
        createdAt: new Date("2024-03-20"),
        updatedAt: new Date("2024-03-20")
    },
    {
        id: "task_2",
        code: "13.8M",
        title: "13.8M",
        status: "in-progress",
        priority: "medium",
        label: "feature",
        archived: false,
        createdAt: new Date("2024-03-20"),
        updatedAt: new Date("2024-03-20")
    },
    {
        id: "task_3",
        code: "13.8M",
        title: "13.8M",
        status: "todo",
        priority: "low",
        label: "bug",
        archived: false,
        createdAt: new Date("2024-03-20"),
        updatedAt: new Date("2024-03-20")
    },
    {
        id: "task_4",
        code: "13.8M",
        title: "13.8M",
        status: "canceled",
        priority: "high",
        label: "enhancement",
        archived: true,
        createdAt: new Date("2024-03-20"),
        updatedAt: new Date("2024-03-20")
    },
    {
        id: "task_5",
        code: "13.8M",
        title: "13.8M",
        status: "done",
        priority: "medium",
        label: "documentation",
        archived: false,
        createdAt: new Date("2024-03-20"),
        updatedAt: new Date("2024-03-20")
    }
]; 