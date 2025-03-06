import { type Task } from "@/db/schema";

export const sampleTasks: Task[] = [
    {
        id: "task_1",
        code: "ANH001",
        title: "Entrega de Tomates - 500kg",
        status: "done",
        priority: "high",
        label: "documentation",
        archived: false,
        createdAt: new Date("2024-03-20"),
        updatedAt: new Date("2024-03-20")
    },
    {
        id: "task_2",
        code: "JAL002",
        title: "Distribuição Cenouras - 300kg",
        status: "in-progress",
        priority: "medium",
        label: "feature",
        archived: false,
        createdAt: new Date("2024-03-20"),
        updatedAt: new Date("2024-03-20")
    },
    {
        id: "task_3",
        code: "CEA003",
        title: "Carga de Batatas - 1000kg",
        status: "todo",
        priority: "low",
        label: "bug",
        archived: false,
        createdAt: new Date("2024-03-20"),
        updatedAt: new Date("2024-03-20")
    },
    {
        id: "task_4",
        code: "BAU004",
        title: "Entrega de Cebolas - 200kg",
        status: "canceled",
        priority: "high",
        label: "enhancement",
        archived: true,
        createdAt: new Date("2024-03-20"),
        updatedAt: new Date("2024-03-20")
    },
    {
        id: "task_5",
        code: "MAU005",
        title: "Distribuição Alface - 100kg",
        status: "done",
        priority: "medium",
        label: "documentation",
        archived: false,
        createdAt: new Date("2024-03-20"),
        updatedAt: new Date("2024-03-20")
    }
]; 