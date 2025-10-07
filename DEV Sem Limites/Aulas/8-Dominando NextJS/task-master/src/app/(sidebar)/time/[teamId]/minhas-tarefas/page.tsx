import { auth } from "@/lib/auth";
import { TaskViewSwitcher } from "@/modules/tasks/components/task-view-switcher";
import { redirect } from "next/navigation";

export default async function TasksPage () {
    const session = await auth();

    if(!session || !session.user) {
        redirect("/login");
    }
    return (
        <div className="flex flex-col">
            <TaskViewSwitcher />
        </div>
    )
}