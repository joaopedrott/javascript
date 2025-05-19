import { Dialog, DialogContent, DialogTitle }from "@/components/ui/dialog";
import { CreateTeamForm } from "./create-team-form";
import { useCreateTeamModal } from "../hooks/use-create-team-modal";
export function CreateTeamDialog() {
    const { isOpen, setIsOpen, close } =useCreateTeamModal()

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTitle className="sr-only">Criar Time</DialogTitle>
            <DialogContent className="w-full sm:max-w-lg p-0 border-none rounded-none overflow-y-auto hide-scrollbar max-h-[85vh]">
                <CreateTeamForm onCancel={close} />
            </DialogContent>
        </Dialog>
    )
}