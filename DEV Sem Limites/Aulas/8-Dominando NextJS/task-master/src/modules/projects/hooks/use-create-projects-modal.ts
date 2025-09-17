import { parseAsBoolean, useQueryState } from "nuqs"

export function useCreateProjectsModal() {
    const [isOpen, setIsOpen] = useQueryState(
        'criar-projeto',
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