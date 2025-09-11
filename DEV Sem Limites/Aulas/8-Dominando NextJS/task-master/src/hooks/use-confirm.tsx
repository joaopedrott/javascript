import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { ReactNode, useState } from "react"

interface PromiseState {
    resolve: (value: boolean) => void;

}

type UseConfirm = [() => ReactNode, ()=> Promise<unknown>]

export function useConfirm (title: string, description: string): UseConfirm {
 const [promise, setPromise] = useState<PromiseState | null>(null)

 const confirm = () => {
    return new Promise((resolve) => {
        setPromise({
            resolve
        })
    })
 }

 const handleClose = () => {
    setPromise(null)
 }

 const handleConfirm = () => {
    promise?.resolve(true)
    handleClose()
 }

 const handleCancel = () => {
    promise?.resolve(false)
    handleClose()
 }

 const ConfirmationDialog = ()=> (
    <Dialog open={promise !== null} onOpenChange={handleClose}>
        <DialogTitle className="sr-only">{title}</DialogTitle>
        
        <DialogContent className="w-full sm:max-w-lg p-0 border-none lg:rounded-none overflow-y-auto hide-scrollbar max-h-[85vh] ">
            <Card className="w-full h-full border-none shadow-none">
                <CardContent>
                    <CardHeader className="p-0">
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardHeader>

                    <div className="pt-4 w-full flex gap-2 items-center justify-end">
                        <Button
                        className="w-full lg:w-auto"
                        variant='outline'
                        size='lg'
                        onClick={handleCancel}
                        >
                            Cencelar</Button>

                        <Button
                        className="w-full lg:w-auto"
                        size='lg'
                        onClick={handleConfirm}
                        >
                            Confirmar</Button>
                    </div>
                </CardContent>    
            </Card>
        </DialogContent>
    </Dialog>
 )

 return [ConfirmationDialog, confirm]
}