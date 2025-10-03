import { TaskStatus } from '@prisma/client'

export interface Project {
  id: string
  name: string
  image?: string | null
  teamId: string
}

export interface User {
  id: string
  name: string
  email: string
  image: string
}

export interface Task {
  id: string
  name: string;
  projectId: string;
  status: TaskStatus;
  assigneeId: string;
  position: number;
  dueDate: string;
  teamId: string;
  description?: string;
  project: Project;
  assignee: User
}