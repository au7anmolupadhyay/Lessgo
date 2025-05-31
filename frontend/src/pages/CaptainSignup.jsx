import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext.jsx';
import axios from 'axios';

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('car');

  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!firstName || !email || !password || !vehicleColor || !vehiclePlate || !vehicleCapacity) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate capacity is at least 1
    const capacity = parseInt(vehicleCapacity);
    if (isNaN(capacity) || capacity < 1) {
      alert('Vehicle capacity must be at least 1');
      return;
    }

    const newCaptain = {
      fullname: {
        firstname: firstName,
        lastname: lastName || ''
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: capacity,
        vehicleType: vehicleType
      }
    };

    try {
      console.log('Sending data:', newCaptain);
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain);

      if(response.status === 201){
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        
        // Clear form on success
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('car');
        
        navigate('/captain-home');
      }
    } catch (error) {
      console.error('Error response:', error.response?.data);
      
      // Extract error message from response
      let errorMessage;
      if (error.response?.data) {
        if (typeof error.response.data === 'string' && error.response.data.includes('ValidationError')) {
          // Extract the specific validation message
          const match = error.response.data.match(/validation failed: (.+?)<br>/);
          errorMessage = match ? match[1] : 'Validation failed';
        } else {
          errorMessage = error.response.data.message || 'Registration failed';
        }
      } else {
        errorMessage = 'Registration failed. Please try again.';
      }
      
      alert(errorMessage);
    }
  }

  return (
    <form onSubmit={(e)=>submitHandler(e)}>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-200">
        <div className="p-4">
          <img src="/lessgo_captain.png" alt="Lessgo Logo" className="h-12" />
        </div>

        <div className="mb-4 px-6">
          <label className="block text-gray-800 text-sm font-semibold mb-2">
            What's your name?
          </label>
          <div className="flex gap-4">
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none placeholder:text-sm"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none placeholder:text-sm"
            />
          </div>
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
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none placeholder:text-sm"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-2">
              Enter Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none placeholder:text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-2">
              Vehicle Details
            </label>
            <input
              type="text"
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              placeholder="Vehicle Color"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none placeholder:text-sm mb-2"
            />
            <input
              type="text"
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              placeholder="Vehicle Plate Number"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none placeholder:text-sm mb-2"
            />
            <input
              type="number"
              required
              min="1"
              value={vehicleCapacity}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value) && value >= 1) {
                  setVehicleCapacity(value.toString());
                }
              }}
              placeholder="Vehicle Capacity (minimum 1)"
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none placeholder:text-sm mb-2"
            />
            <div className="relative">
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none appearance-none"
              >
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                </svg>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded font-bold mb-3"
          >
            Sign up as Captain
          </button>
          <p className="text-center">
            Already have an account?
            <Link to="/captain-login" className="text-blue-600 ml-2">Login Here</Link>
          </p>
        </div>

        <div className="mt-auto p-4">
          <p className='ml-1 text-gray-600 text-sm leading-tight'>
            By proceeding, you agree to get calls, WhatsApp or SMS messages, including automated means, from Lessgo and its affiliates.
          </p>
        </div>
      </div>
    </form>
  );
};

export default CaptainSignup;
