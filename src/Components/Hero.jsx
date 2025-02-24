import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/finance-hero.png"; // Add an image in assets folder

const Hero = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12">
      {/* Left Side - Text Content */}
      <div className="text-center md:text-left md:w-1/2">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Take Control of <span className="text-blue-500">Your Finances</span>
        </motion.h1>
        <motion.p
          className="text-gray-600 mt-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Effortlessly track your income, expenses, and savings. Set budgets, get insights, and achieve financial freedom with ease.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition">
            Get Started
          </button>
          <button className="bg-white border border-blue-500 text-blue-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Right Side - Hero Image */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <img src={heroImage} alt="Finance Tracker" className="w-full md:w-4/5" />
      </motion.div>
    </section>
  );
};

export default Hero;
