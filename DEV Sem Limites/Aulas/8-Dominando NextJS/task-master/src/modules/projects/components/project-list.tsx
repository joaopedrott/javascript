import { useTeamId } from "@/modules/teams/hooks/use-team-id";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/modules/tasks/types";
import { useCreateProjectsModal } from "../hooks/use-create-projects-modal";
import { ProjectAvatar } from "./project-avatar";

interface ProjectListProps {
  projects: Project[]
  total: number
}

export function ProjectList ({ projects, total }: ProjectListProps) {
  const teamId = useTeamId()
  const { open } = useCreateProjectsModal()

  return (
    <div className="flex flex-col gap-y-4 col-span-1">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">
            Projetos ({ total })
          </p>

          <Button variant='secondary' size='icon' onClick={open}>
            <Plus className="size-4 text-neutral-400" />
          </Button>
        </div>

        <Separator className="my-4" />

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map(project => (
            <li key={project.id}>
              <Link href={`/time/${teamId}/projeto/${project.id}`}>
                <Card className="border rounded-none shadow-none hover:opacity-75 transition">
                  <CardContent className="flex items-center gap-x-2">
                    <ProjectAvatar 
                      className="size-12"
                      fallbackClassName="text-lg"
                      name={project.name}
                      image={project.image ?? undefined}
                    />
                    <p className="text-lg font-medium truncate">{project.name}</p>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
          <li className="text-sm text-muted-foreground text-center hidden first-of-type:block">Nenhum projeto encontrado</li>
        </ul>
      </div>
    </div>
  )
}