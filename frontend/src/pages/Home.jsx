import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white max-w-md w-full p-4 rounded-md shadow-md text-center">
        <img
          src="/lessgo_homepage.jpg"
          alt="logo"
          className="w-full h-auto object-contain"
        />
        <h2 className="text-2xl font-bold mt-4">Get Started with Lessgo!</h2>
        <Link to="/login" className="flex items-center justify-center mt-4 w-full bg-black text-white p-2 rounded-md">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
