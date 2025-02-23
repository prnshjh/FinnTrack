import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-blue-500">Finance Tracker</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Features</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Pricing</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
