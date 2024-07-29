import { createContext, PropsWithChildren, useState } from "react";
import { DEV_BOOKS_SESSION_KEY } from "../../constants/storage";

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

interface Session {//guardar informacoes do usuario logado
    user: User
    accessToken: string
    refreshToken: string
}

interface AuthContexType {
    isAuthenticated: boolean 
    user?: User
    signIn: (user: SignInUser) => Promise<void>
    signUp: (user: SignUpUser) => Promise<void>
    signOut: ()=> Promise<void>
}


export const AuthContext = createContext<AuthContexType>({} as AuthContexType)

export function AuthProvider ({children}: PropsWithChildren){ 
    //tudo aqui dentro ficara compartilhado globalmente para os componentes
    const [session, setSession] = useState<Session | null>(()=> {
        const session = localStorage.getItem(DEV_BOOKS_SESSION_KEY)

        if(session) {
            return JSON.parse(session)
        }

        return null
    })

    const signIn = async (user: SignInUser):Promise<void> => {
        console.log(user)
    }
    const signUp = async (user: SignUpUser):Promise<void> => {
        console.log(user)
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