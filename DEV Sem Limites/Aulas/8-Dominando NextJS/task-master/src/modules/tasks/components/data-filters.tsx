import { Select, SelectContent, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTaskFilters } from "../hooks/use-task-filters"
import { TaskStatus } from "@prisma/client"
import { Folder, ListChecks, User } from "lucide-react"
import { useGetProjects } from "@/modules/projects/hooks/use-get-projects"
import { useGetMembers } from "@/modules/members/hooks/use-get-members"
import { useTeamId } from "@/modules/teams/hooks/use-team-id"
import { DatePicker } from "@/components/ui/date-picker"
import { Fragment } from "react"


interface DataFilterProps {
    hideProjectFilter?: boolean
}

export function DataFilters ( { hideProjectFilter = false }: DataFilterProps ) {
    const [{ 
        assigneeId,
        dueDate,
        status,
        projectId
    }, setFilters] = useTaskFilters()
    const teamId = useTeamId()

    const { data: projects, isLoading: isLoadingProjects } = useGetProjects({ teamId })
    const { data: members, isLoading: isLoadingMembers } = useGetMembers({ teamId })

    const isLoading = isLoadingProjects || isLoadingMembers

    const projectOptions = projects?.data.map(project => ({
        value: project.id,
        label: project.name,
    }))

    const memberOptions = members?.data.map(member => ({
        value: member.userId,
        label: member.user.name
    }))

    const onStatusChange = (value: string) => {
        setFilters ({ status: value === 'todos' ? null : value as TaskStatus })
    }
    const onAssigneeChange = (value: string) => {
        setFilters ({ assigneeId: value === 'todos' ? null : value })
    }

    const onProjectChange = (value: string) => {
        setFilters ({ projectId: value === 'todos' ? null : value })
    }

    const onDueDateChange = (value: Date) => {
        setFilters ({ dueDate: value ? value.toISOString() : null })
    }

    if (isLoading) {
        return null
    }

    return (
        <div className="flex flex-col lg:flex-row gap-2">
            <Select 
                defaultValue={status ?? undefined}
                onValueChange={value => onStatusChange(value)}
            >
                <SelectTrigger className="w-full lg:w-auto h-8">
                    <div className="flex items-center pr-2">
                        <ListChecks className="size-4 mr-2" />
                        <SelectValue placeholder="Todos os status" />
                    </div>
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectSeparator />
                    <SelectItem value={TaskStatus.BACKLOG}>Backlog</SelectItem>
                    <SelectSeparator />
                    <SelectItem value={TaskStatus.TODO}>Para Fazer</SelectItem>
                    <SelectSeparator />
                    <SelectItem value={TaskStatus.IN_PROGRESS}>Em Progresso</SelectItem>
                    <SelectSeparator />
                    <SelectItem value={TaskStatus.IN_REVIEW}>Em Revisão</SelectItem>
                    <SelectSeparator />
                    <SelectItem value={TaskStatus.DONE}>Feito</SelectItem>
                    <SelectSeparator />
                </SelectContent>
            </Select>

            <Select
            defaultValue={assigneeId ?? undefined}
            onValueChange={value => onAssigneeChange(value)}
            >
                <SelectTrigger className="w-full lg:w-auto h-8">
                    <div className="flex items-center pr-2">
                        <User className="size-4 mr-2" />
                        <SelectValue placeholder='Todos os atribuidos' />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='todos'>Todos os atribuidos</SelectItem>
                    <SelectSeparator />
                        {memberOptions?.map(member => (
                            <Fragment key={member.value}>
                                <SelectItem value={member.value}>{member.label}</SelectItem>
                                <SelectSeparator />
                            </Fragment>
                        ))}
                </SelectContent>
            </Select>

      {!hideProjectFilter && (
        <Select
          defaultValue={projectId ?? undefined}
          onValueChange={value => onProjectChange(value)}
        >
          <SelectTrigger className="w-full lg:w-auto h-8">
            <div className="flex items-center pr-2">
              <Folder className="size-4 mr-2" />
              <SelectValue placeholder='Todos os projetos' />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='todos'>Todos os projetos</SelectItem>
            <SelectSeparator />
            {projectOptions?.map(project => (
              <Fragment key={project.value}>
                <SelectItem value={project.value}>{project.label}</SelectItem>
                <SelectSeparator />
              </Fragment>
            ))}
          </SelectContent>
        </Select>
      )}

            <DatePicker 
                className="h-8 w-full lg:w-auto"
                placeholder="Data de entrega"
                value={dueDate ? new Date(dueDate) : undefined}
                onChange={onDueDateChange}
            />
        </div>
    )
}