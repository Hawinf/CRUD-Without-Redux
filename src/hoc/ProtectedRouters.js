import { useEffect, useLayoutEffect, useState} from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";


const ProtectedRoutes = (props) => {
    const [login, setLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            setLogin(false);
            setIsLoading(false);
        } else {
            setLogin(true);
            setIsLoading(false)
        }
    }, [login]);

    if( isLoading) {
        return "...Checking Auth..."
    }
    if (!login) return <Navigate to='/login' />
    return props.children;
}

export default ProtectedRoutes;