'use client'

import { Button } from "@/components/ui/button";
import { useGetProject } from "../hooks/use-get-project";
import { useProjectId } from "../hooks/use-project-id";
import { ProjectAvatar } from "./project-avatar";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { TaskViewSwitcher } from "@/modules/tasks/components/task-view-switcher";

export function ProjectDetail() {
    const projectId = useProjectId();
    const { data: project, isPending: isLoadingProject } = useGetProject({ projectId });

    if(isLoadingProject) {
        return <span>Carregando...</span>
    }

    if(!project) {
        return <span>Projeto não encontrado</span>
    }
    
    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <ProjectAvatar 
                        className="size-8" 
                        name={project.data.name} 
                        image={project.data.image ?? undefined}
                    />
                    <p className="text-lg font-semibold">{project.data.name}</p>
                </div>

                <Button asChild variant="secondary" size="sm">
                    <Link href={`/time/${project.data.teamId}/projeto/${project.data.id}/configuracoes`}>
                        <Pencil className="size-4 mr-2" />
                        Editar Projeto
                    </Link>
                </Button>
            </div>

            <TaskViewSwitcher />
        </div>
    )
}