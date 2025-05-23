import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { AvatarImage } from "@radix-ui/react-avatar"

interface MemberAvatarProps {
    name: string
    image?: string
    className?: string
    fallbackClassName?: string
}

export function MemberAvatar ({fallbackClassName,className,image, name}: MemberAvatarProps) {
    return (
        <Avatar className={cn("size-5 border border-neutral-300 rounded-none", className)}>
            <AvatarImage src={image} alt={name}/>
            <AvatarFallback 
            className={cn("bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center rounded-none", fallbackClassName)}
             >
                {name.charAt(0).toUpperCase()}

            </AvatarFallback>
        </Avatar>
    )
}