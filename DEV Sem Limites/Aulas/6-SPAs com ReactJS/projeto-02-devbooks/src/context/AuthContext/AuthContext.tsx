import { createContext, PropsWithChildren, useState } from "react";
import { DEV_BOOKS_SESSION_KEY } from "../../constants/storage";
import { useSignIn } from "../../hooks/useSignIn";
import { useSignUp } from "../../hooks/useSignUp";

interface User {
    id: number
    name: string
    email:string
}

interface SignInUser {
    email: string
    password: string
}

interface SignUpUser {
    name: string
    email: string
    password: string
}

export interface Session {//guardar informacoes do usuario logado
    user: User
    accessToken: string
    refreshToken: string
}

interface AuthContexType { //tipando os dados que serao expostos com o contextapi
    isAuthenticated: boolean 
    user?: User
    signIn: (user: SignInUser) => Promise<void>
    signUp: (user: SignUpUser) => Promise<void>
    signOut: ()=> Promise<void>
}

//1-criei contexto
export const AuthContext = createContext<AuthContexType>({} as AuthContexType)

//2-defino provider para tornar global
export function AuthProvider ({children}: PropsWithChildren){ 
//esse useState eh para armazenar ou NAO(null) dados do usuario logado.
    const [session, setSession] = useState<Session | null>(()=> {
        //busca os dados de sessao no localstorage
        const session = localStorage.getItem(DEV_BOOKS_SESSION_KEY)

        if(session) {
            return JSON.parse(session)//converte string em objeto
        }

        return null
    })
    const signInMutation = useSignIn()//hook de requisicao de login
    const signUpMutation = useSignUp()//hook de requisicao de cadastro

    const signIn = async (user: SignInUser):Promise<void> => {//funcao de login
        await signInMutation.mutateAsync(user, {//mutate chama o metodo e nao o hook, passando usuario
            onSuccess: (session) => {//se os dados do usuario forem retornados com sucesso
                setSession(session)//passar esses dados para o contexto
                localStorage.setItem(DEV_BOOKS_SESSION_KEY, JSON.stringify(session))
            }, 
        })
    }
    const signUp = async (user: SignUpUser):Promise<void> => {
        await signUpMutation.mutateAsync(user)
    }

    const signOut = async (): Promise<void> => {
        console.log('logout')
    }

    return (
        <AuthContext.Provider 
        value={{
            isAuthenticated: Boolean(session),
            user: session?.user,
            signIn, 
            signUp, 
            signOut
            }}>
            {children}
        </AuthContext.Provider>
    )
}