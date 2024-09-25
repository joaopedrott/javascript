import { useMutation } from "@tanstack/react-query"
import { api } from "../services/api"

interface UpdateProfileArgs {
    name?: string
}

async function updateProfile({name}:UpdateProfileArgs) {
    const { data } = await api.put('/user', { name })

    return data
}

export function useUpdateProfileMutation () {
    return useMutation ({mutationFn: updateProfile})
}