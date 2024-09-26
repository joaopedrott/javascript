import { useMutation } from "@tanstack/react-query"
import { api } from "../services/api"

interface UpdatePasswordArgs {
    newPassword: string
    currentPassword: string
}

async function updatePassword ({newPassword,currentPassword}: UpdatePasswordArgs) {
    await api.put('/user/password', {newPassword, currentPassword})
}

export function useUpdatePasswordMutation() {
    return useMutation({ mutationFn: updatePassword})
}