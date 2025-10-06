import { useConfirm } from "@/hooks/use-confirm"
import { Project, Task } from "../types"
import { ProjectAvatar } from "@/modules/projects/components/project-avatar"
import Link from "next/link"
import { ChevronRight, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDeleteTask } from "../hooks/use-delete-task"
import { useRouter } from "next/navigation"

interface TasksBreadcrumbsProps {
    project: Project 
    task: Task
}

export function TasksBreadcrumbs ({ project, task}: TasksBreadcrumbsProps) {
    const router = useRouter()
    const [ConfirmDialog, confirm] = useConfirm(
        'Deletar Tarefa',
        'Tem certeza que deseja deletar essa tarefa?',
    )

    const  { mutate, isPending } = useDeleteTask()

    const handleDeleteTask = async () => {
        const ok = await confirm()
        if (!ok) return

        mutate({
            param: {
                taskId: task.id
            }
        }, {
            onSuccess: () => {
                router.push(`/time/${project.teamId}/projeto/${project.id}`)
            }
        })
    }

    return (
        <div className="flex items-center gap-x-2">
            <ConfirmDialog />
            <ProjectAvatar 
                className="size-6 lg:size-8" 
                name={project.name} 
                image={project.image ?? undefined}
            />
            <Link href={`/time/${project.teamId}/projeto/${project.id}`} >
                <p className="text-sm lg:text-lg font-semibold text-muted-foreground hover:opacity-75 transition">{project.name}</p>
            </Link>
            <ChevronRight className="size-4 lg:size-5 text-muted-foreground" />
            <p className="text-sm lg:text-lg font-semibold">{task.name}</p>

            <Button
            className="ml-auto text-white bg-red-500 hover:bg-red-500/90"
            variant='destructive'
            size='sm'
            onClick={handleDeleteTask}
            disabled={isPending}
            >
                <Trash className="size-4 lg:mr-2" />
                <span className="hidden lg:block">Deletar Tarefa</span>
            </Button>
        </div>
    )
}