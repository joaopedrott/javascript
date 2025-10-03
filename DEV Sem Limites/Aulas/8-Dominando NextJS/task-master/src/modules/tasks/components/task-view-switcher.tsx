import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Plus } from "lucide-react";
import { useQueryState } from "nuqs";
import { useCreateTaskDialog } from "../hooks/use-create-task-dialog";
import { DataFilters } from "./data-filters";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useGetTasks } from "../hooks/use-get-tasks";
import { useTeamId } from "@/modules/teams/hooks/use-team-id";
import { useProjectId } from "@/modules/projects/hooks/use-project-id";
import { Task } from '../types';
import { useTaskFilters } from "../hooks/use-task-filters";
import { DataBoard, TaskUpdate } from "./data-board";
import { useMoveTask } from "../hooks/use-move-task";
import { DataCalendar } from "./data-calendar";


export function TaskViewSwitcher() {
    const [{ 
        assigneeId,
        dueDate,
        status,
        projectId,
        search
    }] = useTaskFilters()
    
    const teamId = useTeamId()
    const paramProjectId = useProjectId()

    const [tab, setTab] = useQueryState('visualizacao', {
        defaultValue: 'table'
    });
    const { open } = useCreateTaskDialog()
    const  { data: tasks } = useGetTasks({ 
        teamId, 
        projectId: (paramProjectId || projectId) ?? undefined,
        status: status ?? undefined,
        assigneeId: assigneeId ?? undefined,
        dueDate: dueDate ?? undefined,
        search: search ?? undefined
    })
    const { mutate } = useMoveTask() 

    const onBoardChange = (tasks: TaskUpdate[]) => {
        mutate({
            json: {
                tasks
            }
        })
    }

    if (!tasks?.data) {
        return null
    }

    const data = tasks.data as Task[]

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

                    <Button size='sm' className="w-full lg:w-auto" onClick={open}>
                        <Plus className="size-4 mr-2" />
                        Nova Tarefa
                     </Button>
                </div>

                <Separator className="my-4" />

                <DataFilters />

                <Separator className="my-4" />

                <>
                    <TabsContent value="table" className="mt-0">
                        <DataTable columns={columns} data={data ??[]} />
                    </TabsContent>
                    <TabsContent value="columns" className="mt-0">
                        <DataBoard data={data ?? []} onChange={onBoardChange} />
                    </TabsContent>
                    <TabsContent value="calendar" className="mt-0">
                        <DataCalendar data={data ?? []} />
                    </TabsContent>
                </>
            </div>
        </Tabs>
    )
}