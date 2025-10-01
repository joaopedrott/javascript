'use client'

import { useGetProjects } from "@/modules/projects/hooks/use-get-projects"
import { useTeamId } from "@/modules/teams/hooks/use-team-id"
import { useGetMembers } from "@/modules/members/hooks/use-get-members"
import { Card, CardContent } from "@/components/ui/card"
import { LoaderCircle } from "lucide-react"

import { useGetTask } from "../hooks/use-get-task"
import { UpdateTaskForm } from "./update-tesk-form"
import { Task } from "../types"

interface UpdateTaskFormWrapperProps {
    taskId: string
    onCancel?: () => void

}

export function UpdateTaskFormWrapper({ taskId, onCancel }: UpdateTaskFormWrapperProps) {
    const teamId = useTeamId()
    const { data: projects, isLoading: isLoadingProjects } = useGetProjects({teamId})
    const { data: members, isLoading: isLoadingMembers } = useGetMembers({teamId})
    const { data: initialValues, isLoading: isLoadingTask } = useGetTask({taskId})

    const projectOptions = projects?.data.map((project) => ({ 
        id: project.id,
        name: project.name,
        image: project.image,
    })) 

    const memberOptions = members?.data.map((member) => ({ 
        id: member.userId,
        name: member.user.name,
        image: member.user.image,
    }))

    const isLoading = isLoadingProjects || isLoadingMembers || isLoadingTask

    if (isLoading) {
        <Card className="w-full h-[714px] border-none shadow-none">
            <CardContent className="flex items-center justify-center h-full">
                <LoaderCircle className="size-5 animate-spin text-muted-foreground" />
            </CardContent>
        </Card>
    }

    if(!initialValues) {
        return null
    }

    return (
        <UpdateTaskForm
        taskId={taskId} 
    onCancel={onCancel} 
    projectOptions={projectOptions ?? []} 
    memberOptions={memberOptions ?? []} 
    initialValues={initialValues?.data as Task}
    />
    )
}