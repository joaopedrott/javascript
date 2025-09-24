import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Plus } from "lucide-react";
import { useQueryState } from "nuqs";

export function TaskViewSwitcher() {
    const [tab, setTab] = useQueryState('visualizacao', {
        defaultValue: 'table'
    });

    return (
        <Tabs className="flex-1 w-full border bg-sidebar" defaultValue={tab} onValueChange={setTab}>
            <div className="h-full flex flex-col overflow-auto p-4">
                <div className="flex flex-col gap-y-2 lg:flex-row justify-between items-center">
                    <TabsList className="w-full lg:w-auto">
                        <TabsTrigger className="h-8 w-full lg:w-auto" value="table">
                            Tabela
                        </TabsTrigger>

                        <TabsTrigger className="h-8 w-full lg:w-auto" value="columns">
                            Colunas
                        </TabsTrigger>

                        <TabsTrigger className="h-8 w-full lg:w-auto" value="calendar">
                            Calendario
                        </TabsTrigger>
                    </TabsList>

                    <Button size='sm' className="w-full lg:w-auto">
                        <Plus className="size-4 mr-2" />
                        Nova Tarefa
                     </Button>
                </div>

                <Separator className="my-4" />

                <>
                    <TabsContent value="table" className="mt-0">
                        Tabela
                    </TabsContent>
                    <TabsContent value="columns" className="mt-0">
                        Coluna
                    </TabsContent>
                    <TabsContent value="calendar" className="mt-0">
                        Calendario
                    </TabsContent>
                </>
            </div>
        </Tabs>
    )
}