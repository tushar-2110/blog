import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          MyApp
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Home
          </Link>
          <Link to="/signin" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
