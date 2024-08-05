import { createContext, PropsWithChildren, useState } from "react";
import { DEV_BOOKS_SESSION_KEY } from "../../constants/storage";
import { useSignIn } from "../../hooks/useSignIn";

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

interface AuthContexType { //tipando os dados que serao expostos com o contextapi
    isAuthenticated: boolean 
    user?: User
    signIn: (user: SignInUser) => Promise<void>
    signUp: (user: SignUpUser) => Promise<void>
    signOut: ()=> Promise<void>
}

//criei contexto
export const AuthContext = createContext<AuthContexType>({} as AuthContexType)

//defino provider para tornar global
export function AuthProvider ({children}: PropsWithChildren){ 
    //esse useState eh para armazenar ou NAO(null) dados do usuario logado, cadastrado (session)
    const [session, setSession] = useState<Session | null>(()=> {
        const session = localStorage.getItem(DEV_BOOKS_SESSION_KEY)

        if(session) {
            return JSON.parse(session)
        }

        return null
    })
    const signInMutation = useSignIn()//hook de requisicao de login

    const signIn = async (user: SignInUser):Promise<void> => {//funcao de login
        await signInMutation.mutateAsync(user, {//mutate chama o metodo e nao o hook, passando usuario
            onSuccess: (session) => {
                setSession(session)
                localStorage.setItem(DEV_BOOKS_SESSION_KEY, JSON.stringify(session))
            }
        })
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