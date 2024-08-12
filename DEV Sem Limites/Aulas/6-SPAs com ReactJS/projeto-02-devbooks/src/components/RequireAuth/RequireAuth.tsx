import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

interface RequireAuthProps {
    children: JSX.Element
}

export function RequireAuth ({children}: RequireAuthProps) {
    const { isAuthenticated } = useAuth()
    const location = useLocation()

    if(!isAuthenticated){
        return <Navigate to="/" state={{ from: location }} replace />
    }
    
    return children
}