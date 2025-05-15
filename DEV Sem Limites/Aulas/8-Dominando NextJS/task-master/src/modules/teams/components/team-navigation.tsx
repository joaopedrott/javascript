import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Home, SquareCheckBig, Settings2, Users } from "lucide-react";
import Link from "next/link";
import { useTeamId } from "../hooks/use-team-id";
const routes = [
    {
        label: "Home",
        href: "",
        icon: Home,
    },
    {
        label: "Minhas Tarefas",
        href: "/minhas-tarefas",
        icon: SquareCheckBig,
    },
    {
        label: "Membros",
        href: "/membros",
        icon: Users,
    },
    {
        label: "Configurações",
        href: "/configuracoes",
        icon: Settings2,
    }
]
export function  TeamNavigation() {
    const teamId = useTeamId();

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Time</SidebarGroupLabel>

            <SidebarMenu>
                {routes.map((route)=>{
                    const fullHref= `/time/${teamId}/${route.href}`;
                    const Icon = route.icon;

                    return (
                    <SidebarMenuItem key={route.label}>
                        <SidebarMenuButton>
                            <Link href={fullHref} className="flex items-center gap-2 py-2 rounded-md font-medium transition">
                                <Icon className="size-5" />
                                {route.label}                           
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                )
                })}
            </SidebarMenu>
        </SidebarGroup>
    )
}