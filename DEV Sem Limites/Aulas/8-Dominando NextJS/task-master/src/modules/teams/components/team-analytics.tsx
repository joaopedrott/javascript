'use client'
import { Analytics } from "@/components/analytics";
import { useGetTeamAnalytics } from "../hooks/use-get-team-analytics"
import { useTeamId } from "../hooks/use-team-id";
import { TaskList } from "@/modules/tasks/components/task-list";
import { useGetTasks } from "@/modules/tasks/hooks/use-get-tasks";
import { Task } from "@/modules/tasks/types";
import { ProjectList } from "@/modules/projects/components/project-list";
import { useGetProjects } from "@/modules/projects/hooks/use-get-projects";
import { MemberList } from "@/modules/members/components/member-list";
import { useGetMembers } from "@/modules/members/hooks/use-get-members";
import { Member } from "@/modules/members/types";


export function TeamAnalytics() {
    const teamId = useTeamId();
    const { data: analytics, isPending: isLoadingAnalytics } = useGetTeamAnalytics({ teamId });
    const { data: tasks, isPending: isLoadingTasks } = useGetTasks({ teamId });
    const { data: projects, isPending: isLoadingProjects } = useGetProjects({ teamId });
    const { data: members, isPending: isLoadingMembers } = useGetMembers({ teamId });

    const isLoading = isLoadingAnalytics || isLoadingTasks || isLoadingProjects || isLoadingMembers;

    if(isLoading) {
        return <span>Carregando...</span>
    }

    if(!analytics || !tasks || !projects || !members) {
        return <span>Time não encontrado</span>
    }

    return (
        <div className="h-full flex flex-col space-y-4">
            <Analytics data={analytics.data} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <TaskList tasks={tasks.data as Task[]} total={tasks.data.length}/>
                <ProjectList projects={projects.data} total={projects.data.length} />
                <MemberList members={members.data as Member[]} total={members.data.length} />
            </div>


        </div>
    )
}