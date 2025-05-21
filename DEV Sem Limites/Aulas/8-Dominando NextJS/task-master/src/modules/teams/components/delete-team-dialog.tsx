import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface DeleteTeamDialogProps {
    isPending: boolean
    onConfirm: () => Promise<void>
}
export function DeleteTeamDialog ({ isPending, onConfirm}: DeleteTeamDialogProps) {
    const [ isOpen, setIsOpen ] = useState(false)

    const handleConfirm = async () => {
        await onConfirm()
        setIsOpen(false)
    }

    return (
        <>
            <Button 
            onClick={() => setIsOpen(true)} 
            variant="outline" 
            className="border-red-500 text-red-500 hover:bg-red-50 hover:text-red-500"
            size='lg'
            >
                Deletar Time
            </Button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTitle className="sr-only">Deletar time</DialogTitle>
                <DialogContent className="w-full sm:max-w-lg p-0 border-none rounded-none overflow-y-auto hide-scrollbar max-h-[85vh]">
                    <Card className="w-full h-full border-none shadow-none"> 
                        <CardHeader>
                            <CardTitle>
                                Tem certeza que deseja deletar este time?
                            </CardTitle>
                            <CardDescription>
                                Esta acao nao pode ser desfeita.
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