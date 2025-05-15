import { TeamNavigation } from "@/modules/teams/components/team-navigation"
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from "./ui/sidebar"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <span>Task Master</span>
            </SidebarHeader>


            <SidebarContent>
                <TeamNavigation />
            </SidebarContent>


            <SidebarFooter>

            </SidebarFooter>
        </Sidebar>
    )
}