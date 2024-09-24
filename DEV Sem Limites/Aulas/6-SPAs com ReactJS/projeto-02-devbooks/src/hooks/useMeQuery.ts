import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

async function fetchMe () {
    const { data } = await api.get('/me')

    return data
}

export function useMeQuery (isAuthenticated: boolean) {
    return useQuery ({
        queryKey: ['me'],
        queryFn: fetchMe,
        enabled: isAuthenticated
    })
}