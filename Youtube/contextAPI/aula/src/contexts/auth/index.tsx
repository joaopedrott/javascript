'use client'
import { createContext, useContext, useState } from "react";  

export type UseProps = {
    name: string;
    token: string;
}

type AuthContextProps = {
    user: UseProps | null;
    login: (user: UseProps) => void;
    logout: () => void;
}

//contexto criado
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

//criacao do provider
const AuthProvider = ({ children }:{children: React.ReactNode}) => {
    const [user, setUser] = useState<UseProps | null>(null);

    const login = (user: UseProps) => {//login
        setUser(user);

        //console.log(user);
    }

    const logout = () => {//logout
        console.log('logout');
        setUser(null);
    }

    return (//retorna o contexto para as tags filhas 
        <AuthContext.Provider value={{
            user,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>

    )

}

const useAuth = () => {
    //hook para simplificar o uso do contexto no componete
    const context = useContext(AuthContext);
    return context;
}

export { AuthContext,useAuth, AuthProvider };//para exportar o contexto para componentes