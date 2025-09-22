import { auth } from "@/lib/auth";
import { ProjectDetail } from "@/modules/projects/components/project-detail";
import { redirect } from "next/navigation";

export default async function ProjectDetailPage () {
    const session = await auth()

    if(!session || !session.user) {
        redirect("/login");
      }

    return (
        <ProjectDetail />
    )
      
}