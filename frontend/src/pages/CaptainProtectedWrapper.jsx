import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectedWrapper = ({children}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { captain, setCaptain} = useContext(CaptainDataContext); 
    const [ isLoading, setIsLoading ] = useState(true);  

    useEffect(() => {
        // Debug log to check token
        console.log('Current token:', token);
        
        if(!token){
            console.log('No token found, redirecting to login');
            navigate('/captain-login');
            return;
        }

        const fetchCaptainProfile = async () => {
            try {
                // Log the request details
                console.log('Making request to:', `${import.meta.env.VITE_BASE_URL}/captains/profile`);
                console.log('With headers:', {
                    Authorization: `Bearer ${token}`
                });

                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if(response.status === 200){
                    const data = response.data;
                    console.log('Profile data received:', data);
                    setCaptain(data.captain);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('Full error object:', error);
                console.error('Error response:', error.response?.data);
                console.error('Error status:', error.response?.status);
                localStorage.removeItem('token');
                navigate('/captain-login');
            }
        };

        fetchCaptainProfile();
    }, [token, navigate, setCaptain]);
    
    if(isLoading){
        return <div>Loading...</div>;
    }

    return (
        <>{children}</>
    )
}
export default CaptainProtectedWrapper;