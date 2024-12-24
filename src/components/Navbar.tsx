import React from 'react';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center sm:gap-x-40 px-6 py-3 border-b bg-white">
      <div className="flex items-center gap-8">
        <img 
          src="https://info.credly.com/hubfs/Credly_images_2022/Logo.svg" 
          alt="Credly Logo" 
          className="w-25"
        />
        <div className="relative">
          <input
            type="text"
            placeholder="Discover badges, skills or organizations"
            className="pl-10 pr-4 py-2 w-[400px] border rounded-md focus:outline-none focus:border-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-4 py-4  text-teal-700 border border-teal-700 rounded hover:bg-teal-50">
          Create Account
        </button>
        <button className="px-4 py-4 text-white bg-teal-700 rounded hover:bg-teal-800">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;