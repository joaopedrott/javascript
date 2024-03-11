import { useContext } from "react";
import { AuthContext } from "../context/auth"

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw Error('Nao existe um contexto de autenticacao')
    } 
        return context;
    
}