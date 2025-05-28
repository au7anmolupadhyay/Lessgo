import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <img
        src="/lessgo_homepage.jpg"
        alt="logo"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-end">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white text-center px-4">
          Get Started with Lessgo!
        </h2>
        <Link 
          to="/login" 
          className="w-64 bg-white text-black py-2.5 px-4 rounded-lg text-base font-medium hover:bg-gray-100 transition-colors flex items-center justify-center mx-auto mb-4"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
