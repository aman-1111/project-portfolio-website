import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => (location.pathname === path ? "text-blue-400" : "");

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Aman<span className="text-blue-400">Portfolio</span>
        </Link>

        <div className="space-x-6 text-lg">
          <Link to="/" className={`hover:text-blue-400 ${isActive("/")}`}>Home</Link>
          <Link to="/projects" className={`hover:text-blue-400 ${isActive("/projects")}`}>Projects</Link>
          <Link to="/about" className={`hover:text-blue-400 ${isActive("/about")}`}>About</Link>
          <Link to="/contact" className="hover:text-blue-400">
  Contact
</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
