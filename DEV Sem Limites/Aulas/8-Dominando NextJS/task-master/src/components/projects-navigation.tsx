'use client'
import { Plus } from "lucide-react";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu } from "./ui/sidebar";
import { useCreateProjectsModal } from "@/modules/projects/hooks/use-create-projects-modal";


export function ProjectsNavigation () {
    const { open } = useCreateProjectsModal()

    return (
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Projetos</SidebarGroupLabel>

            <SidebarMenu>
                
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