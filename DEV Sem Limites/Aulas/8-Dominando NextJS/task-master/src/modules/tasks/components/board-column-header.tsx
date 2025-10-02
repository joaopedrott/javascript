import { TaskStatus } from "@prisma/client";
import { Circle, CircleCheck, CircleDashed, CircleDot, CircleDotDashed, Plus } from "lucide-react";
import React from "react";
import { statusMap } from "./columns";
import { Button } from "@/components/ui/button";
import { useCreateTaskDialog } from "../hooks/use-create-task-dialog";

interface BoardColumnHeaderProps {
    board: TaskStatus,
    taskCount: number
}

const statusIconMap: Record<TaskStatus, React.ReactNode> = {
    [TaskStatus.TODO]: <Circle className="size-[18px] text-red-400"/>,
    [TaskStatus.IN_PROGRESS]: <CircleDotDashed className="size-[18px] text-yellow-400"/>,
    [TaskStatus.IN_REVIEW]: <CircleDot className="size-[18px] text-blue-400"/>,
    [TaskStatus.DONE]: <CircleCheck className="size-[18px] text-emerald-400"/>,
    [TaskStatus.BACKLOG]: <CircleDashed className="size-[18px] text-black"/>
}

export function BoardColumnHeaderProps ({board, taskCount}: BoardColumnHeaderProps) {
    const { open } = useCreateTaskDialog()
    const Icon = statusIconMap[board]
    return (
        <div className="p-2 flex items-center justify-between">
            <div className="flex items-center gap-x-2">
                {Icon}
                <h2 className="text-sm font-medium">
                    {statusMap[board]}
                </h2>
                <div className="size-5 flex items-center justify-center bg-neutral-200 text-xs text-neutral-700 font-medium">
                    {taskCount}
                </div>

            </div>
            <Button variant="ghost" size="icon" className="size-5" onClick={open}>
                <Plus className="size-4 text-neutral-500"/>
            </Button>

        </div>
    )
}