import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogout = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then((res)=>{
        if(res.status === 200){
            localStorage.removeItem('token');
            navigate('/login');
        }
    })
    .catch((err)=>{
        console.log(err);
    })

    return (
        <div>UserLogout</div>
    )
    
}

export default UserLogout;