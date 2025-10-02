import { MoreHorizontal } from "lucide-react";
import { Task } from "../types";
import { TaskActions } from "./task-actions";
import { Separator } from "@/components/ui/separator";
import { MemberAvatar } from "@/modules/members/components/member-avatar";
import { TaskDate } from "./task-date";
import { ProjectAvatar } from "@/modules/projects/components/project-avatar";

interface BoardCardProps {
  task: Task
}

export function BoardCard ({ task }: BoardCardProps) {
  return (
    <div className="bg-white p-2.5 mb-2 shadow-sm space-y-3">
      <div className="flex items-center justify-between gap-x-2">
        <p className="text-sm line-clamp-2">{task.name}</p>

        <TaskActions id={task.id} projectId={task.projectId}>
          <MoreHorizontal className="size-[18px] stroke-1 shrink-0 text-neutral-700 hover:opacity-75 transition" />
        </TaskActions>
      </div>

      <Separator />

      <div className="flex items-center gap-2">
        <MemberAvatar 
          name={task.assignee.name} 
          image={task.assignee.image} 
          fallbackClassName="text-[10px]"
        />
        <TaskDate className="text-xs" value={new Date(task.dueDate)} />
      </div>

      <div className="flex items-center gap-2">
        <ProjectAvatar 
          name={task.project.name}
          image={task.project.image as string}
          fallbackClassName="text-[10px]"
        />
        <span className="text-sm truncate">{task.project.name}</span>
      </div>
    </div>
  )
}