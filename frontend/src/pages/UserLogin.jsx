import React from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-200">
      {/* Logo at top-left */}
      <div className="p-4">
        <img src="/logo.png" alt="Lessgo Logo" className="h-12" />
      </div>

      {/* Login Form */}
      <div className="px-6">
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-semibold mb-2">
            What's your email
          </label>
          <input
            type="email"
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
            placeholder="password"
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none"
          />
        </div>
        <button className="w-full bg-black text-white py-2 rounded font-bold mb-3">
          Login
        </button>
        <p className="text-center">
          New here?
          <Link to="/signup" className="text-blue-600 ml-2">Create new Account</Link>
        </p>
      </div>

      {/* Sign in as Captain at bottom */}
      <div className="mt-auto p-4">
        <button className="w-full bg-green-500 text-white py-2 rounded font-bold">
          Sign in as Captain
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
