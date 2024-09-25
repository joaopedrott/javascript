import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"

export function useAuth () {
    const context = useContext(AuthContext)

    if(!context) {
        throw new Error('useAuth hook can only be used within AuthProvider')
    }

    return context
}