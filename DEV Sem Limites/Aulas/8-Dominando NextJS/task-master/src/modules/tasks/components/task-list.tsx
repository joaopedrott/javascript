import { useTeamId } from "@/modules/teams/hooks/use-team-id"
import { Task } from "../types"
import { useCreateTaskDialog } from "../hooks/use-create-task-dialog"
import { Button } from "@/components/ui/button"
import { Calendar, Plus } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { formatDistanceToNow } from "date-fns"
interface TaskListProps {
    tasks: Task[]
    total: number
}

export function TaskList ({ tasks, total }: TaskListProps) {
    const teamId= useTeamId()
    const { open } = useCreateTaskDialog()

    return (
        <div className="flex flex-col gap-y-4 col-span-1">
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">
                      Tarefas ({total})  
                    </p>

                    <Button variant='secondary' size='icon' onClick={open}>
                        <Plus className="size-4 text-neutral-400" />
                    </Button>
                </div>

                <Separator className="my-4" />

                <ul className="flex flex-col gap-y-4">
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <Link href={`/time/${teamId}/tarefa/${task.id}`}>
                                <Card className="border rounded-none shadow-none hover:opacity-75 transition">
                                    <CardContent>
                                        <p className="text-lg font-medium truncate">{task.name}</p>

                                        <div className="flex items-center gap-x-2">
                                            <p>{task.project.name}</p>

                                            <div className="size-1 rounded-full bg-neutral-300"/>

                                            <div className="text-sm text-muted-foreground flex items-center">
                                                <Calendar className="size-3 mr-1" />
                                                <span className="truncate">
                                                    {formatDistanceToNow(new Date(task.dueDate))}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </li>
                    ))}
                    <li className="text-sm text-muted-foreground text-center hidden first-of-type:block">Nenhuma tarefa encontrada</li>
                </ul>


                <Button className="mt-4 w-full" asChild>
                    <Link href={`/time/${teamId}/minhas-tarefas`} >
                    Mostrar Tudo
                    </Link>
                </Button>
            </div>
        </div>
    )
}