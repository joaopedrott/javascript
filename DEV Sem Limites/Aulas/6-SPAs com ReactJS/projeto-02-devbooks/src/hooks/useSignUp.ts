import { useMutation } from "@tanstack/react-query"
import { api } from "../services/api"

interface SignUpUser {
    name: string
    email:string
    password: string
}

async function signUpUser ({
    name, 
    email, 
    password
}: SignUpUser):Promise<void> {
    await api.post('/user/signup', {
        name,
        email,
        password
    }) 
}

export function useSignUp () {
    return useMutation({mutationFn: (data: SignUpUser)=> signUpUser(data)})
}