import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({children})=>{
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/login');
            return;
        }
    }, []);

    if(!localStorage.getItem('token')){
        return null; // Prevent flash of protected content
    }

    return <>{children}</>;
}

export default UserProtectedWrapper;