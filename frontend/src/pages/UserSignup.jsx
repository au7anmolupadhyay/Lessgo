import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e)=>{
    e.preventDefault();

    // Validate required fields
    if (!firstName || !email || !password) {
      alert('Please fill in all required fields');
      return;
    }

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName || ''  // Make lastname optional
      },
      email,
      password
    };

    console.log('Sending data:', newUser);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

      if(response.status === 201){
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        
        // Only clear form and navigate on success
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        
        navigate('/home');
      }
    } catch (error) {
      console.error('Error response:', error.response?.data);
      console.error('Status code:', error.response?.status);
      
      // Show specific error message to user
      const errorMessage = error.response?.data?.message || 
                         error.response?.data?.errors?.[0]?.msg ||
                         'Registration failed. Please try again.';
      alert(errorMessage);
      
      // If user already exists or validation error, keep the form data
      if (error.response?.status === 400) {
        return;
      }
    }
  }


  return (
    <form onSubmit={(e)=>submitHandler(e)}>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-200">

        <div className="p-4">
          <img src="/logo.png" alt="Lessgo Logo" className="h-12" />
        </div>

        <div className="mb-4 px-6">
            <label className="block text-gray-800 text-sm font-semibold mb-2">
              What's your name?
            </label>
            <div className="flex gap-4">
            <input
              type="name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none placeholder:text-sm"
            />
            <input
              type="name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none placeholder:text-sm"
            />
            </div>
        </div>    

        <div className="px-6">
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-2 placeholder:text-sm">
              What's your email?
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none placeholder:text-sm"
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
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none placeholder:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded font-bold mb-3"
          >
            Create account
          </button>
          <p className="text-center">
            Already have an account?
            <Link to="/login" className="text-blue-600 ml-2">Login Here</Link>
          </p>
        </div>

        <div className="mt-auto p-4">
          <p className='ml-1 text-gray-600 text-sm leading-tight'>By proceeding, you agree to get calls, WhatsApp or SMS messages, including automated means, from Lessgo and its affiliates.</p>
        </div>
      </div>
    </form>
  );
};

export default UserSignup;
