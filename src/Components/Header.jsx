import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Header = () => {
  const [isOpen,setIsOpen] = useState(false);
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

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        {["Home","DashBoard","Reports","About"].map((items)=>(
          <a
            key={items}
            href={`#${items.toLowerCase()}`}
            className="text-gray-700 hover:text-Blue-500 transition"
          >
            {items}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
         <button onClick={()=>setIsOpen(!isOpen)} className="text-gray-700 text-2xl">
          {isOpen ? <FaTimes/> : <FaBars/>}
         </button>

      </div>

      {/* Mobile Navigation Menu */}
      {isOpen &&(
        <motion.div
          className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-4 md-hidden"
          initial={{opacity:0,y:-20}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.4}}
        >
          {["Home","DashBoard","Reports","About"].map((items)=>(
            <a
              key={items}
              href={`#${items.toLowerCase()}`}
              className="text-gray-700 text-lg hover:text-blue-500 transition"
              onClick={()=>setIsOpen(false)}

            >
               {items}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
