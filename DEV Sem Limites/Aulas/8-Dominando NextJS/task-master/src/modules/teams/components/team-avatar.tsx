import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TeamAvatarProps {
  image?: string;
  name: string;
  className?: string
}

export function TeamAvatar ({
  name,
  image,
  className
}: TeamAvatarProps) {
  if (image) {
    return (
      <div className={cn('relative size-10 rounded-none overflow-hidden', className)}>
        <Image 
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
    )
  }
  return (
    <Avatar className={cn('size-10 rounded-none', className)}>
      <AvatarFallback className="text-white bg-yellow-500 font-semibold text-lg uppercase rounded-none">
        {name[0]}
      </AvatarFallback>
    </Avatar>
  )
}