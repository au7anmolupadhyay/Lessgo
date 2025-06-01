import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext.jsx';
import axios from 'axios';

const CaptainLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e)=>{
    e.preventDefault();
    const captain = {
      email: email,
      password
    }

    try{
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
      
      if(response.status === 200){
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.captainToken); // Changed from data.token to data.captainToken
        navigate('/captain-home');
      }
    }
    catch(e){
      console.error("Error while logging in as captain:", e.response?.data || e.message);
      alert(e.response?.data?.message || 'Login failed. Please check your credentials.');
    }

    setEmail('');
    setPassword('');
  } 
  return(
    <form onSubmit={(e)=>submitHandler(e)}>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-200">

        <div className="p-4">
          <img src="/lessgo_captain.png" alt="Lessgo Logo" className="h-12" />
        </div>

        <div className="px-6">
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-2">
              What's your email?
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-semibold mb-2">
              Enter Password
            </label>
            <input
              type="password"
              required
              value = {password}
              onChange = {(e)=>setPassword(e.target.value)}
              placeholder="password"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded font-bold mb-3"
          >
            Login
          </button>
          <p className="text-center">
            Join a fleet?
            <Link to="/captain-signup" className="text-blue-600 ml-2">Register as a Captain</Link>
          </p>
        </div>

        <div className="mt-auto p-4">
          <Link
            to="/login"
            className="block w-full bg-orange-500 text-white text-center py-2 rounded font-bold mb-5"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </form>
  )
};

export default CaptainLogin;