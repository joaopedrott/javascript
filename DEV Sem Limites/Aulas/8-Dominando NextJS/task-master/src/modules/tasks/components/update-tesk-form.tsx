import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useTeamId } from "@/modules/teams/hooks/use-team-id"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { DatePicker } from "@/components/ui/date-picker"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MemberAvatar } from "@/modules/members/components/member-avatar"
import { TaskStatus } from "@prisma/client"
import { ProjectAvatar } from "@/modules/projects/components/project-avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Task } from "../types"
import { useUpdateTask } from "../hooks/use-update-task"
import { createTaskSchema } from "../schemas/create-task"


interface SelectOption {
  id: string
  name: string | null
  image?: string | null
}

interface UpdateTaskFormProps {
  taskId: string
  onCancel?: () => void;
  projectOptions: SelectOption[]
  memberOptions: SelectOption[]
  initialValues: Task
}

type UpdateTask = z.infer<typeof createTaskSchema>

export function UpdateTaskForm ({
  taskId,
  onCancel,
  projectOptions,
  memberOptions,
  initialValues
}: UpdateTaskFormProps) {
  const teamId = useTeamId()
  const { mutate, isPending } = useUpdateTask()
  const form = useForm<UpdateTask>({
    resolver: zodResolver(createTaskSchema.omit({description: true})),
    defaultValues: {
      ...initialValues,
      dueDate: initialValues.dueDate ? new Date(initialValues.dueDate) : undefined
    }
  })

  const onSubmit = (values: UpdateTask) => {
    mutate({
      json: {
        ...values,
        teamId
      },
      param: {
        taskId
      }

    }, {
      onSuccess: () => {
        form.reset()
        onCancel?.()
      }
    })
  }

  return (
    <Card className="w-full h-full rounded-none">
      <CardHeader className="flex px-7">
        <CardTitle className="text-xl font-bold">
          Edite a tarefa
        </CardTitle>
      </CardHeader>

      <CardContent className="px-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4 w-full">
              <FormField 
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome da Tarefa</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        placeholder="Digite o nome da tarefa" 
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField 
                control={form.control}
                name='dueDate'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Entrega</FormLabel>
                    <FormControl>
                      <DatePicker {...field} placeholder="Selecione a Data" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField 
                control={form.control}
                name='assigneeId'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Atribuir</FormLabel>
                    <FormControl>
                      <Select 
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Atribua a tarefa a alguém' />
                          </SelectTrigger>
                        </FormControl>
                        <FormMessage />
                        <SelectContent>
                          {memberOptions.map(member => (
                            <SelectItem key={member.id} value={member.id}>
                              <div className="flex items-center gap-x-2">
                                <MemberAvatar 
                                  className="size-6"
                                  name={member.name as string}
                                  image={member.image ?? undefined} 
                                />
                                {member.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField 
                control={form.control}
                name='status'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Select 
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Selecione o status' />
                          </SelectTrigger>
                        </FormControl>
                        <FormMessage />
                        <SelectContent>
                          <SelectItem value={TaskStatus.BACKLOG}>Backlog</SelectItem>
                          <SelectItem value={TaskStatus.IN_PROGRESS}>Em Progresso</SelectItem>
                          <SelectItem value={TaskStatus.IN_REVIEW}>Em Revisão</SelectItem>
                          <SelectItem value={TaskStatus.TODO}>Para Fazer</SelectItem>
                          <SelectItem value={TaskStatus.DONE}>Feito</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField 
                control={form.control}
                name='projectId'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Projeto</FormLabel>
                    <FormControl>
                      <Select 
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Selecione o projeto' />
                          </SelectTrigger>
                        </FormControl>
                        <FormMessage />
                        <SelectContent>
                          {projectOptions.map(project => (
                            <SelectItem key={project.id} value={project.id}>
                              <div className="flex items-center gap-x-2">
                                <ProjectAvatar 
                                  className="size-6"
                                  name={project.name as string}
                                  image={project.image ?? undefined} 
                                />
                                {project.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="py-7">
              <Separator />
            </div>

            <div className="flex items-center justify-end gap-2">
              <Button
                className={cn(!onCancel && 'invisible')}
                type='button'
                size='lg'
                variant='secondary'
                onClick={onCancel}
                disabled={isPending}
              >
                Cancelar
              </Button>
              <Button 
                type='submit'
                size='lg'
                disabled={isPending}
              >
                Salvar Alteracoes
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}