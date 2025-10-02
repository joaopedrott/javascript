import { TaskStatus } from "@prisma/client";
import { useEffect, useState } from "react";
import { 
    DragDropContext,
    Droppable,
    Draggable,
    type DropResult
} from "@hello-pangea/dnd"

import { Task } from "../types";
import { BoardColumnHeaderProps  } from "./board-column-header";
import { BoardCard } from "./board-card";


const boards: TaskStatus[] = [
    TaskStatus.BACKLOG,
    TaskStatus.TODO,
    TaskStatus.IN_PROGRESS,
    TaskStatus.IN_REVIEW,
    TaskStatus.DONE
]

type TaskState = {
    [key in TaskStatus]: Task[]
}


export interface TaskUpdate {
    id: string
    position: number
    status: TaskStatus
}

interface DataBoardProps {
    data: Task[]
    onChange: (task: TaskUpdate[]) => void;
}

export function DataBoard({
  data,
  onChange
}: DataBoardProps) {
  const [tasks, setTasks] = useState<TaskState>(() => {
    const initialTasks: TaskState = {
      [TaskStatus.BACKLOG]: [],
      [TaskStatus.TODO]: [],
      [TaskStatus.IN_PROGRESS]: [],
      [TaskStatus.IN_REVIEW]: [],
      [TaskStatus.DONE]: [],
    }

    data.forEach(task => {
      initialTasks[task.status].push(task)
    })

    Object.keys(initialTasks).forEach(status => {
      initialTasks[status as TaskStatus].sort((a, b) => a.position - b.position)
    })

    return initialTasks
  })

  useEffect(() => {
    const newTasks: TaskState = {
      [TaskStatus.BACKLOG]: [],
      [TaskStatus.TODO]: [],
      [TaskStatus.IN_PROGRESS]: [],
      [TaskStatus.IN_REVIEW]: [],
      [TaskStatus.DONE]: [],
    }

    data.forEach(task => {
      newTasks[task.status].push(task)
    })

    Object.keys(newTasks).forEach(status => {
      newTasks[status as TaskStatus].sort((a, b) => a.position - b.position)
    })

    setTasks(newTasks)
  }, [data])

  const onDragEnd = (result: DropResult) => {
    // Se não houver destino (ex: soltou fora de uma coluna), não faz nada
    if (!result.destination) return

    // Extrai as informações de origem e destino do resultado do drag
    const { source, destination } = result
    const sourceStatus = source.droppableId as TaskStatus
    const destinationStatus = destination.droppableId as TaskStatus;

    const tasksUpdated: TaskUpdate[] = []

    setTasks((prevTasks) => {
      const newTasks = { ...prevTasks }

      const sourceColumn = [...newTasks[sourceStatus]]
      const [movedTask] = sourceColumn.splice(source.index, 1)

      if (!movedTask) return prevTasks

      // Se a tarefa mudou de coluna, atualizamos o status na tarefa
      const updatedMovedTask = sourceStatus !== destinationStatus ? 
      { ...movedTask, status: destinationStatus } : movedTask

      newTasks[sourceStatus] = sourceColumn

      const destinationColumn = [...newTasks[destinationStatus]]
      destinationColumn.splice(destination.index, 0, updatedMovedTask)

      newTasks[destinationStatus] = destinationColumn

      // Adiciona a tarefa para ser atualizada no backend com o novo status
      tasksUpdated.push({
        id: updatedMovedTask.id,
        status: destinationStatus,
        position: Math.min((destination.index + 1) * 1000, 1_000_000)
      })

      // Percorre todas as tarefas na coluna de destino e verifica se houve mudança de posição nas demais tarefas da coluna.
      newTasks[destinationStatus].forEach((task, index) => {
        if (task && task.id !== updatedMovedTask.id) {
          const newPosition = Math.min((index + 1) * 1000, 1_000_000)

          if (task.position !== newPosition) {
            tasksUpdated.push({
              id: task.id,
              status: destinationStatus,
              position: newPosition
            })
          }
        }
      })

      // Se mudou de coluna, deve atualizar as posicoes na coluna de origem
      if (sourceStatus !== destinationStatus) {
        newTasks[sourceStatus].forEach((task, index) => {
          if (task) {
            const newPosition = Math.min((index + 1) * 1000, 1_000_000)

            if (task.position !== newPosition) {
              tasksUpdated.push({
                id: task.id,
                status: sourceStatus,
                position: newPosition
              })
            }
          }
        })
      }

      return newTasks
    })

    onChange(tasksUpdated)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex overflow-x-auto">
        {boards.map(board => (
          <div key={board} className="flex-1 mx-2 bg-muted p-2 min-w-[200px]">
            <BoardColumnHeaderProps 
              board={board}
              taskCount={tasks[board].length}
            />

            <Droppable droppableId={board}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="min-h-[200px] py-2"
                >
                  {tasks[board].map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <BoardCard task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  )
}