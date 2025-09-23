import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { UpdateProjectForm } from "@/modules/projects/components/update-project-form";
import { redirect } from "next/navigation";

interface ProjectSettingsPageProps {
    params: {
        projectId: string
    }
}

export default async function ProjectSettingsPage ({ params }: ProjectSettingsPageProps ) {
    const session = await auth()

    if(!session || !session.user) {
        redirect("/login");
    }

    const { projectId } = params

    const project = await prisma.project.findUnique({
        where: {
            id: projectId
        }
    })

    if(!project) {
        return <span>Projeto não encontrado</span>
    }

    return (
        <div className="flex gap-4 w-full lg:max-w-xl lg:mx-auto">
            <UpdateProjectForm initialData={project} />
        </div>
    )
}