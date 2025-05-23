import React from 'react';

const UserLogin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-white to-gray-200">
      <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded">
        <div className="mb-6 text-center">
          <img src="/lessgo_logo.png" alt="Lessgo Logo" className="mx-auto h-12" />
        </div>
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
        <p className="text-center text-sm text-gray-600 mb-2">Create new Account</p>
        <button className="w-full bg-green-500 text-white py-2 rounded font-bold">
          Sign in as Captain
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
