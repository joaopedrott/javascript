import { parseAsBoolean, useQueryState } from 'nuqs'
export function useCreateTeamModal() {
    const [isOpen, setIsOpen] = useQueryState(
        'criar-time',
        parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true})
    )

    const open = () => setIsOpen(true)

    const close = () => setIsOpen(false)

    return {
        isOpen,
        open,
        close,
        setIsOpen,
    }

}