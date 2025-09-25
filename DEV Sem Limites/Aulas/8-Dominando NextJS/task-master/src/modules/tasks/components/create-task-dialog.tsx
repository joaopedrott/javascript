import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useCreateTaskDialog } from "../hooks/use-create-task-dialog";
import { CreateTaskFormWrapper } from "./create-task-form-wrapper";

export function CreateTaskDialog () {
  const { isOpen, setIsOpen, close } = useCreateTaskDialog()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTitle className="sr-only">Criar Projeto</DialogTitle>
      <DialogContent className="w-full sm:max-w-lg p-0 border-none rounded-none overflow-y-auto hide-scrollbar max-h-[85vh]">
        <CreateTaskFormWrapper onCancel={close} />
      </DialogContent>
    </Dialog>
  )
}