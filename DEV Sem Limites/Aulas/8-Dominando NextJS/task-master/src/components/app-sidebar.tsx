import { TeamNavigation } from "@/modules/teams/components/team-navigation"
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from "./ui/sidebar"
import { TeamsSwitcher } from "@/modules/teams/components/teams-switcher"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <TeamsSwitcher />
            </SidebarHeader>


            <SidebarContent>
                <TeamNavigation />
            </SidebarContent>


            <SidebarFooter>

            </SidebarFooter>
        </Sidebar>
    )
}