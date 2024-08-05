import { useMutation } from "@tanstack/react-query"
import { api } from "../services/api"

interface User {
    id: number
    email: string
    name: string
}

interface SignInUser {
    email: string
    password: string
}

interface SignInResponse {
    user: User
    accessToken: string
    refreshToken: string
}

async function signInUser ({
    email, 
    password
}: SignInUser): Promise<SignInResponse> {
    const { data } = await api.post<SignInResponse>('/user/signin',{
        email,
        password
    })


    return data
}

export function useSignIn (){
    return useMutation({mutationFn: (data: SignInUser)=> signInUser(data)})
}