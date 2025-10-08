import { ProjectAnalyticsResponseType } from "@/modules/projects/hooks/use-get-project-analytics";
import { AnalyticsCard } from "./analytics-card";

type AnalyticsProps = ProjectAnalyticsResponseType;

export function Analytics ({data}: AnalyticsProps) {
    return (
        <div className="w-full flex flex-row gap-2">
            <div className="flex items-center flex-1">
                <AnalyticsCard 
                title='Total de Tarefas' 
                value={data.taskCount}
                variant={data.taskDifference > 0 ? 'up' : 'down'}
                valueDifference = {data.taskDifference}
                />
            </div>

            <div className="flex items-center flex-1">
                <AnalyticsCard 
                title='Total Atribuidas' 
                value={data.assignedTaskCount}
                variant={data.assignedTaskDifference > 0 ? 'up' : 'down'}
                valueDifference = {data.assignedTaskDifference}
                />
            </div>

            <div className="flex items-center flex-1">
                <AnalyticsCard 
                title='Total Concluidas' 
                value={data.completeTaskCount}
                variant={data.completeTaskDifference > 0 ? 'up' : 'down'}
                valueDifference = {data.completeTaskDifference}
                />
            </div>

            <div className="flex items-center flex-1">
                <AnalyticsCard 
                title='Total Atrasadas' 
                value={data.overdueTaskCount}
                variant={data.overdueTaskDifference > 0 ? 'up' : 'down'}
                valueDifference = {data.overdueTaskDifference}
                />
            </div>

            <div className="flex items-center flex-1">
                <AnalyticsCard 
                title='Total Incompletas' 
                value={data.incompleteTaskCount}
                variant={data.incompleteTaskDifference > 0 ? 'up' : 'down'}
                valueDifference = {data.incompleteTaskDifference}
                />
            </div>
        </div>
    )
}