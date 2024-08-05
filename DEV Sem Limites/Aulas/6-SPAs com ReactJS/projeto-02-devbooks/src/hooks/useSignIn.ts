import { useMutation } from "@tanstack/react-query"
import { api } from "../services/api"

interface User {
    id: number
    email: string
    name: string
}

interface SignInUser {//dados enviados
    email: string
    password: string
}

interface SignInResponse {//dados recebidos no login
    user: User
    accessToken: string
    refreshToken: string
}

async function signInUser ({ // metodo de login (comunicacao com servidor)
    email,
    password
}: SignInUser): Promise<SignInResponse> {
    const { data } = await api.post<SignInResponse>('/user/signin',{//responsavel por enviar os dados de login para fazer a autenticacao
        email,
        password
    })


    return data//o retorno sera  o signinresponse
}

export function useSignIn (){//criacao do hook
    return useMutation({mutationFn: (data: SignInUser)=> signInUser(data)})// esse hook chama o metodo acima passando os dados de login
}