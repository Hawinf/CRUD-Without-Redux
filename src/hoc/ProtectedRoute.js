import { useEffect, useState, useLayoutEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";

const ProtectedRoute = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    // PART 1
    useEffect(() => {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
            setIsLogin(false);
            setLoading(false);
        } else {
            setIsLogin(true);
            setLoading(false)
        }
    }, [isLogin]);

    // PART 2
    if (loading) {
        return 'loading';
    }

    // PART 3 
    return isLogin ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute;



// const ProtectedRoute = () => {
//     const [login, setLogin] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);

//     useLayoutEffect(() => {
//         setIsLoading(true);
//         const token = localStorage.getItem('token');
//         if (!token) {
//             setLogin(false);
//             setIsLoading(false);
//         } else {
//             setLogin(true);
//             setIsLoading(false);
//         }
//     }, [login]);


// if ( isLoading ) {
//     return "...Checking Auth..."
// };
// return login ? <Outlet /> : <Navigate to='/login' />;
// };