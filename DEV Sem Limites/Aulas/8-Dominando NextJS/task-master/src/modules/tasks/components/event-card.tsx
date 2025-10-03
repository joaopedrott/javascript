import { TaskStatus } from "@prisma/client"
import { Project, User } from "../types"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useTeamId } from "@/modules/teams/hooks/use-team-id"
import { MemberAvatar } from "@/modules/members/components/member-avatar"
import { ProjectAvatar } from "@/modules/projects/components/project-avatar"

const statusColorMap: Record<TaskStatus, string> = {
    [TaskStatus.TODO]: "border-l-red-400",
    [TaskStatus.IN_PROGRESS]: "border-l-yellow-400",
    [TaskStatus.BACKLOG]: "border-l-black",
    [TaskStatus.IN_REVIEW]: "border-l-blue-400",
    [TaskStatus.DONE]: "border-l-emerald-400",

}

interface Event {
    start: Date,
    end: Date,
    title: string,
    project: Project,
    assignee: User,
    status: TaskStatus,
    id: string
}
interface EventCardProps {
    event: Event
}

export function EventCard ({ event }: EventCardProps) {
    const teamId = useTeamId()
    const router = useRouter()

    const onNavigate = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()

        router.push(`/time/${teamId}/tarefa/${event.id}`)
    }  
  return (
    <div className="px-2">
        <div 
            className={
                cn(
                    'p-2 text-xs bg-white text-primery border border-1-4 flex flex-col gap-y-2 cursor-pointer hover:opacity-75 transition',
                    statusColorMap[event.status]
                )
            }
            onClick={onNavigate}
        >
            <p>{event.title}</p>
            <div className="flex items-center gap-x-1">
                <MemberAvatar name={event.assignee.name} image={event.assignee.image ?? undefined} />
                <div className="size-1 rounded-full bg-neutral-300"/>
                <ProjectAvatar className="size-5" name={event.project.name} image={event.project.image ?? undefined} />
            </div>

        </div>
    </div>
  )
}