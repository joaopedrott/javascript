import { auth } from "@/lib/auth";
import { TaskDetail } from "@/modules/tasks/components/task-detail";
import { redirect } from "next/navigation";

export default async function TaskDetailPage () {
    const session = await auth();

    if(!session || !session.user) {
        redirect("/login");
    }
    
    return (
        <TaskDetail />
    )
}