import { Button } from "@/components/ui/button";
import { Task } from "../types";
import { Pencil } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { MemberAvatar } from "@/modules/members/components/member-avatar";
import { TaskDate } from "./task-date";
import { Badge } from "@/components/ui/badge";
import { statusMap } from "./columns";
import { OverViewProperty } from "./overview-property";
import { useUpdateTaskDialog } from "../hooks/use-update-task-dialog";

interface TaskOverviewProps {
    task: Task
}

export function TaskOverView({task}: TaskOverviewProps) {
    const { open } = useUpdateTaskDialog()
    return (
        <div className="flex flex-col gap-y-4 col-span-1">
            <div className="bg-white border p-4">
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">Visao Geral</p>
                    <Button size='sm' variant='secondary' onClick={(() => open(task.id))}>
                        <Pencil className="size-4 mr-2" />
                        Editar
                    </Button>
                </div>

                <Separator className="my-4" />

                <div className="flex flex-col gap-y-4">
                    <OverViewProperty label='Atribuido a'>
                        <MemberAvatar className="size-6" name={task.assignee.name} />
                        <p className="text-sm font-medium">{task.assignee.name}</p>
                    </OverViewProperty>

                    <OverViewProperty label='Data de Entrega'>
                        <TaskDate className="text-sm font-medium" value={new Date(task.dueDate)} />
                    </OverViewProperty>

                    <OverViewProperty label='Status'>
                       <Badge variant={task.status}>
                           {statusMap[task.status]}
                       </Badge>
                    </OverViewProperty>

                </div>
            </div>
        </div>
    )
}