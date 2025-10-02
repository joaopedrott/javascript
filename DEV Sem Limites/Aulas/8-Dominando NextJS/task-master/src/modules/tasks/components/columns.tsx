"use client"
 
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreVertical } from "lucide-react"

import { Task } from "../types"
import { ProjectAvatar } from "@/modules/projects/components/project-avatar"
import { MemberAvatar } from "@/modules/members/components/member-avatar"
import { TaskDate } from "./task-date"
import { Badge } from "@/components/ui/badge"
import { TaskStatus } from "@prisma/client"
import { TaskActions } from "./task-actions"


export const statusMap: Record<TaskStatus, string> = {
  [TaskStatus.TODO]: "A fazer",
  [TaskStatus.IN_PROGRESS]: "Em progresso",
  [TaskStatus.IN_REVIEW]: "Em revisão",
  [TaskStatus.DONE]: "Concluído",
  [TaskStatus.BACKLOG]: "Backlog"
}

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Tarefa
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const name = row.original.name
      return <p className="line-clamp-1">{name}</p>
    }
  },
  {
    accessorKey: "project",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Projeto
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const project = row.original.project
      return (
        <div className="flex items-center gap-x-2 text-sm font-medium">
          <ProjectAvatar name={project.name} image={project.image ?? undefined} />
          <p className="line-clamp-1">{project.name}</p>
        </div>
      )
    }
  },
  {
    accessorKey: "assignee",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Atribuido a
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const assignee = row.original.assignee
      return (
        <div className="flex items-center gap-x-2 text-sm font-medium">
          <MemberAvatar 
            fallbackClassName="text-xs"
            name={assignee.name as string}
            image={assignee.image ?? undefined}
          />
          <p className="line-clamp-1">{assignee.name}</p>
        </div>
      )
    }
  },
  {
    accessorKey: "dueDate",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Data de Entrega
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const dueDate = row.original.dueDate
      return <TaskDate value={new Date(dueDate)} />
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status = row.original.status
      return <Badge variant={status}>{statusMap[status]}</Badge>
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id
      const projectId = row.original.projectId
      return (
        <TaskActions id={id} projectId={projectId}>
          <Button variant="ghost" className="size-8 p-0">
            <MoreVertical className="size-4" />
          </Button>
        </TaskActions>
      )

    },
  },
]