'use client'
import { Plus } from "lucide-react";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { useCreateProjectsModal } from "@/modules/projects/hooks/use-create-projects-modal";
import { useGetProjects } from "@/modules/projects/hooks/use-get-projects";
import { useTeamId } from "@/modules/teams/hooks/use-team-id";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProjectAvatar } from "@/modules/projects/components/project-avatar";
import { Skeleton } from "./ui/skeleton";


export function ProjectsNavigation () {
    const teamId = useTeamId()
    const { open } = useCreateProjectsModal()
    const { data: projects, isPending } = useGetProjects({ teamId })

    return (
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Projetos</SidebarGroupLabel>

            <SidebarMenu>
        {isPending && (
          <>
            <div className={cn(
              'flex items-center gap-2.5 py-2 rounded-md font-medium  transition truncate',
            )}>
              <Skeleton className='w-2/3 h-6' />
            </div>
            <div className={cn(
              'flex items-center gap-2.5 py-2 rounded-md font-medium  transition truncate',
            )}>
              <Skeleton className='w-full h-6' />
            </div>
          </>
        )}
                {projects?.data.map(project => {
                    const href = `/time/${teamId}/projeto/${project.id}`
                    return (
                    <SidebarMenuItem key={project.id}>
                        <SidebarMenuButton asChild tooltip={project.name}>
                            <Link href={href}>
                            <div className={cn("flex items-center gap-2.5 py-2 rounded-md font-medium transition truncate")}>
                                <ProjectAvatar image={project.image ?? undefined} name={project.name}/>
                                {project.name}
                            </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    )
                })}
            </SidebarMenu>

            <div className="flex items-center gap-2 p-2 cursor-pointer" role="button" onClick={open}>
                <div className="flex size-6 items-center justify-center rounded-none border bg-background">
                    <Plus className="size-4"/>
                </div>

                <span className="font-medium text-muted-foreground text-sm">
                    Novo Projeto
                </span>
            </div>
        </SidebarGroup>
    )
}