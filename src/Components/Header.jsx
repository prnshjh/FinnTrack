import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <motion.header
      className="bg-white shadow-md fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Finance Tracker Logo" className="h-10 w-10" />
        <h1 className="text-xl font-bold text-blue-600 ml-2">Finance Tracker</h1>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6">
        <a href="#" className="text-gray-700 hover:text-blue-500 transition">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-500 transition">Dashboard</a>
        <a href="#" className="text-gray-700 hover:text-blue-500 transition">Reports</a>
        <a href="#" className="text-gray-700 hover:text-blue-500 transition">About</a>
      </nav>

      {/* Call to Action Button */}
      <motion.button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg hidden md:block"
        whileHover={{ scale: 1.1 }}
      >
        Get Started
      </motion.button>

      {/* Mobile Menu Icon (Hamburger) */}
      <div className="md:hidden">
        <button className="text-gray-700 text-2xl">&#9776;</button>
      </div>
    </motion.header>
  );
};

export default Header;
