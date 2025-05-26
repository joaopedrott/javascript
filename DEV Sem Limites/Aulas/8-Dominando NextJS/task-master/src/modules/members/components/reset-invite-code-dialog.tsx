import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { RefreshCcw } from "lucide-react";

interface ResetInviteCodeDialogProps {
    isPending: boolean
    onConfirm: () => Promise<void>
}
export function ResetInviteCodeDialog ({ isPending, onConfirm}: ResetInviteCodeDialogProps) {
    const [ isOpen, setIsOpen ] = useState(false)

    const handleConfirm = async () => {
        await onConfirm()
        setIsOpen(false)
    }

    return (
        <>
                <Button
                className="size-12"
                onClick={() => setIsOpen(true)}
                >
                    <RefreshCcw />
                </Button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTitle className="sr-only">Atualizar Link de Convite</DialogTitle>
                <DialogContent className="w-full sm:max-w-lg p-0 border-none rounded-none overflow-y-auto hide-scrollbar max-h-[85vh]">
                    <Card className="w-full h-full border-none shadow-none"> 
                        <CardHeader>
                            <CardTitle>
                                Atualizar Link de Convite
                            </CardTitle>
                            <CardDescription>
                                Isso ira invalidar o link de convite atual
                            </CardDescription>
                        </CardHeader> 

                        <CardContent className="pt-4 w-full flex gap-2 items-center justify-end border-t">
                            <Button
                            size='lg'
                            variant='outline'
                            onClick={() => setIsOpen(false)}
                            disabled={isPending}
                            >
                                Cancelar
                            </Button>

                            <Button
                            size='lg'
                            onClick={handleConfirm}
                            disabled={isPending}
                            >                            
                            
                                Confirmar
                            </Button>    
                        </CardContent> 
                    </Card>
                </DialogContent>
            </Dialog>
        </>
    )
}