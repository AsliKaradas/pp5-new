import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/login" className="text-white ml-4">Login</Link>
        <Link to="/signup" className="text-white ml-4">Signup</Link>
        <Link to="/logout" className="text-white ml-4">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;