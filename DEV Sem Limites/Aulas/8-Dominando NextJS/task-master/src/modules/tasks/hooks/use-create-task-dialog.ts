import { parseAsBoolean, useQueryState } from "nuqs"

export function useCreateTaskDialog() {
    const [isOpen, setIsOpen] = useQueryState(
        'criar-tarefa',
        parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true})
    )

    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)

    return {
        isOpen,
        open,
        close,
        setIsOpen
    }
}