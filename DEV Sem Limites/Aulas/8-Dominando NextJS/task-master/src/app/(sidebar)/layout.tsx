'use client'
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CreateTeamDialog } from "@/modules/teams/components/create-team-dialog";
import { usePathname } from "next/navigation";

const pathnameMap = {
    'minhas-tarefas': 'Minhas Tarefas',
    'membros': 'Membros',
    'configuracoes': 'Configurações',
    'projetos': 'Projeto',
}

interface SidebarLayoutProps {
    children: React.ReactNode;
}

export default function SidebarLayout ({ children }: SidebarLayoutProps ) {
    const pathname = usePathname();
    const pathnameParts = pathname.split("/");
    const pathnameKey = pathnameParts[3] as keyof typeof pathnameMap;

    const title = pathnameMap[pathnameKey] || 'Home';

    return (
        <SidebarProvider>
            <AppSidebar />
            <CreateTeamDialog />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <span>{title}</span>
                    </div>
                </header>

                <div className="flex flex-1 flex-col gap-4 p-4 bg-muted">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}