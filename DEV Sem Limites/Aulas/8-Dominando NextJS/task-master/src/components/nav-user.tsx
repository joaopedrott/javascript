'use client'
import { signOut, useSession } from "next-auth/react"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import { ChevronsUpDown, LogOut } from "lucide-react"

export function NavUser () {
    const { data: session } = useSession()

    if(!session || !session.user) {
        return null
    }

    const { name, image, email} = session.user
    const avatarFallback = name ? name.charAt(0).toUpperCase() : 'U'

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                        size='lg'
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="size-10 transition border border-neutral-300 rounded-none">
                                <AvatarImage src={image as string} alt={name as string} />
                                <AvatarFallback className= "bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center rounded-none">
                                    {avatarFallback}
                                </AvatarFallback>
                            </Avatar>

                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">{name}</span>
                                <span className="truncate text-xs">{email}</span>
                            </div>

                            <ChevronsUpDown className="al-auto size-4"/>
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent 
                    className="w-full bg-white p-1 min-w-56 rounded-none shadow-sm"
                    side="bottom"
                    align="end"
                    sideOffset={4}
                    >
                        <DropdownMenuItem className="text-red-500 hover:rounded-none" onClick={() => signOut({ redirectTo: '/'})}>
                            <LogOut className="text-red-500"/>
                            Sair
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>

        </SidebarMenu>
    )
}