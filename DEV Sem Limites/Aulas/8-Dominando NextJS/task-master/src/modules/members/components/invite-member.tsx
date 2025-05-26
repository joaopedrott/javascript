'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useResetInviteCode } from "@/modules/teams/hooks/use-reset-invite-code";
import { Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ResetInviteCodeDialog } from "./reset-invite-code-dialog";
import { useRouter } from "next/navigation";


interface InviteMemberProps {
    teamId: string;
    inviteCode: string;
}

export function InviteMember({ teamId, inviteCode}: InviteMemberProps) {
    const [inviteLink, setInviteLink] = useState('');
    const { mutate, isPending } = useResetInviteCode();
    const router = useRouter()

    useEffect(() => {
        if (window) {
            const link = `${window.location.origin}/time/${teamId}/entrar/${inviteCode}`
            setInviteLink(link)
        }
    }, [teamId, inviteCode])

    const handleCopy = ()=> {
        navigator.clipboard.writeText(inviteLink)
        .then(()=> {
            toast.success('Link copiado com sucesso')
        })

    }

    const handleResetInviteCode = async () => {
        mutate({
            param: {
                teamId
            },
        },
    {
            onSuccess: () => {
                router.refresh()
            }
        })
    }
    

  return (
    <Card className="w-full h-full rounded-none">
        <CardHeader>
            <CardTitle>
                Convidar Membros
            </CardTitle>
            <CardDescription>
                Use o link abaixo para convidar novos membros para o time
            </CardDescription>
        </CardHeader>

        <CardContent className="px-7">
            <div className="flex items-center gap-x-2">
                <Input value={inviteLink} disabled />

                <Button
                variant="secondary"
                className="size-12"
                onClick={handleCopy}
                >
                    <Copy className=""/>

                </Button>
                <ResetInviteCodeDialog onConfirm={handleResetInviteCode} isPending={isPending} />
            </div>

        </CardContent>
    </Card>
  )
}