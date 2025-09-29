import { TaskStatus } from "@prisma/client";
import { parseAsString, parseAsStringEnum, useQueryStates } from "nuqs";

export function useTaskFilters () {
    return useQueryStates({
        projectId: parseAsString,
        status: parseAsStringEnum(Object.values(TaskStatus)),
        assigneeId: parseAsString,
        search: parseAsString,
        dueDate: parseAsString
    })
} 