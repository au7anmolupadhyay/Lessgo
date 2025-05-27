import React, {useState} from 'react';
import { Link } from 'react-router-dom'

const UserSignup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();

    setUserData({
      fullName:{
        firstName:firstName,
        lastName:lastName
      },
      email:email,
      password:password
    })
    //console.log(userData);   this wont log the data because the state is not updated immediately so it will log the old data

    //when submitted clear the input fields
    setFirstName('');
    setLastName('')
    setEmail('');
    setPassword('');
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
            Signup
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
