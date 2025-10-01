import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { UpdateTaskFormWrapper } from "./update-task-form-wrapper";
import { useUpdateTaskDialog } from "../hooks/use-update-task-dialog";


export function UpdateTaskDialog () {
  const { taskId, close } = useUpdateTaskDialog()

  return (
    <Dialog open={Boolean(taskId)} onOpenChange={close}>
      <DialogTitle className="sr-only">Criar Projeto</DialogTitle>
      <DialogContent className="w-full sm:max-w-lg p-0 border-none rounded-none overflow-y-auto hide-scrollbar max-h-[85vh]">
        {taskId && (
          <UpdateTaskFormWrapper onCancel={close} taskId={taskId} />
        )}
      </DialogContent>
    </Dialog>
  )
}