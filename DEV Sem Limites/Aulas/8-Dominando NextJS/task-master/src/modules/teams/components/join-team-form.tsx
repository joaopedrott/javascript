"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { useJoinTeam } from "../hooks/use-join-team";
import { useTeamId } from "../hooks/use-team-id";
import { useInviteCode } from "../hooks/use-invite-code";

interface JoinTeamFormProps {
    name: string;
  }

  export function JoinTeamForm({ name }: JoinTeamFormProps) {
    const router = useRouter()
    const inviteCode = useInviteCode()
    const teamId = useTeamId()
    const { mutate, isPending } = useJoinTeam()

    const handleJoinTeam = () => {
        mutate({
            param: {
                teamId
            },
            json: {
                inviteCode
            }
        }, {
            onSuccess: () => {
                router.push(`/time/${teamId}`)
            }
        })
    }

    return (
        <Card className="w-full h-full rounded-none">
            <CardHeader>
                <CardTitle>
                    Entrar no Time
                </CardTitle>
                <CardDescription>
                    Voce foi convidado para entrar no time <strong>{name}</strong>
                </CardDescription>
            </CardHeader>

            <div className="px-7">
                <Separator />
            </div>

            <CardContent>
                <div className="flex gap-2 items-center justify-end">
                    <Button
                    className="w-fit"
                    variant='secondary'
                    size='lg'
                    asChild
                    type="button"
                    >
                        <Link href='/'>Cancelar</Link>
                    </Button>
                    <Button
                    className="w-fit"
                    size='lg'
                    type="button"
                    disabled={isPending}
                    onClick={handleJoinTeam}                    
                    >
                        Entrar
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
  }