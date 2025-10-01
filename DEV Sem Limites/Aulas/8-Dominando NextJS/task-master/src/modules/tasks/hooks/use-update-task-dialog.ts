import { parseAsString, useQueryState } from "nuqs"

export function useUpdateTaskDialog() {
    const [taskId, setTaskId] = useQueryState(
        'editar-tarefa',
        parseAsString
    )

    const open = (id: string) => setTaskId(id)
    const close = () => setTaskId(null)

    return {
        taskId,
        open,
        close,
        setTaskId
    }
}