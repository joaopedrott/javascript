import { useState } from "react";
import { Task } from "../types";
import { useUpdateTask } from "../hooks/use-update-task";
import { Button } from "@/components/ui/button";
import { Pencil, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

interface TaskDescriptionProps {
    task: Task
}

export function TaskDescription ({ task }: TaskDescriptionProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState(task.description)
    const { mutate, isPending } = useUpdateTask()

    const handleSave = () => {
        mutate({
            json: { 
                description: value 
            },
            param: {
                taskId: task.id
            }

        }, {
            onSuccess: () => {
                setIsEditing(false)
            }
        })
    }

    return (
        <div className="p-4 border bg-white">
            <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">Descrição</p>
                <Button
                    size='sm'
                    variant='secondary'
                    onClick={()=> setIsEditing(!isEditing)}
                >
                    {isEditing ? (
                        <>
                            <X className="size-4 mr-2" />
                            Cancelar
                        </>
                    ): (
                        <>
                            <Pencil className="size-4 mr-2" />
                            Editar
                        </>
                    )}
                </Button>
            </div>

            <Separator className="my-4" />

            <div className="flex flex-col gap-y-4">
                    {isEditing ? (
                        <div className="flex flex-col gap-y-4">
                            <Textarea 
                            placeholder="Adicione uma descrição para a tarefa"
                            value={value}
                            onChange={(e => setValue(e.target.value))}
                            rows={4}
                            disabled={isPending}
                            />
                            <Button 
                            className="w-fit ml-auto"
                            size="sm"
                            onClick={handleSave}
                            disabled={isPending}
                            >
                                {isPending ? (
                                    'Salvando...'
                                ): (
                                    'Salvar Descricao'
                                )}
                            </Button>
                        </div>
                    ): (
                        <div>
                            {task.description || (
                                <span className="text-muted-foreground">Tarefa sem descricao</span>
                            )}
                        </div>
                    )}
            </div>
        </div>
    )
}