'use client'

import { Separator } from "@/components/ui/separator"
import { TasksBreadcrumbs } from "./tasks-breadcrumbs"
import { useGetTask } from "../hooks/use-get-task"
import { useTaskId } from "../hooks/use-project-id"
import { Task } from "../types"
import { TaskOverView } from "./task-overview"
import { TaskDescription } from "./tesk-description"

export function TaskDetail () {
    const taskId = useTaskId()
    const { data:task, isLoading } = useGetTask({ taskId })

    if(isLoading) {
        return <span>Carregando...</span>
    }

    if(!task) {
        return <span>Nenhuma tarefa encontrada</span>
    }

    return (
        <div>
            <TasksBreadcrumbs project={task.data.project} task={task.data as Task} />

            <Separator className="my-6" />

            <div className="grid grid-cols-1 lg:grid-col-2 gap-4">
                <TaskOverView task={task.data as Task}/>
                <TaskDescription task={task.data as Task} />
            </div>
        </div>
    )
}