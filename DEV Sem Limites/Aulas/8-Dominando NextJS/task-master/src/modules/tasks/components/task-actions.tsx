import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTeamId } from "@/modules/teams/hooks/use-team-id"
import { ExternalLink, Pencil, Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { useConfirm } from "@/hooks/use-confirm"
import { useDeleteTask } from "../hooks/use-delete-task"

interface TaskActionsProps {
    id: string,
    projectId: string,
    children: React.ReactNode
}

export function TaskActions ({
id,
projectId,
children
}: TaskActionsProps) {
    const teamId = useTeamId()
    const router = useRouter()
    const [ConfirmDialog, confirm] = useConfirm(
        'Deletar Tarefa',
        'Tem certeza que deseja deletar essa tarefa?',

    )
    const { mutate, isPending } = useDeleteTask()
    


    const onDelete = async () => {
        const ok = await confirm()
        if (!ok) return

        mutate({
            param: {
                taskId: id
            }
        }, {
            onSuccess: () => {
                router.refresh()
            }
        })
    }
    const onOpenTask = () => {
        router.push(`/time/${teamId}/tarefa/${id}`)
    }

    const onOpenProject = () => {
        router.push(`/time/${teamId}/projeto/${projectId}`)
    }

    return (
        <div className="flex justify-end">
            <ConfirmDialog />
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    {children}
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-48">

                    <DropdownMenuItem 
                    className="font-medium p-[10px]"
                    onClick={onOpenTask}
                    >
                        <ExternalLink className="size-4 mr-2 stroke-2" />
                        Detalhes da Tarefa
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                    className="font-medium p-[10px]"
                    onClick={onOpenProject}
                    >
                        <ExternalLink className="size-4 mr-2 stroke-2" />
                        Abrir Projeto
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                    className="font-medium p-[10px]">
                        <Pencil className="size-4 mr-2 stroke-2" />
                        Editar Tarefa
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                    className="font-medium p-[10px] text-red-500 focus:text-red-500 "
                    onClick={onDelete}
                    disabled={isPending}
                    >
                        <Trash className="size-4 mr-2 stroke-2 text-red-500" />
                        Deletar Tarefa
                    </DropdownMenuItem>
                    
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}