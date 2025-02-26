import React from "react";

const About = () => {
    return (
        <div className="bg-blue-500 min-h-screen flex items-center justify-center p-6">
            <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 text-center">
                <h1 className="text-3xl font-bold text-blue-500 mb-4">About FinnTrack</h1>
                <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-blue-500">FinnTrack</span> is your personal finance manager 
                    that helps you track your <span className="font-semibold text-blue-400">expenses</span>,  
                    <span className="font-semibold text-green-500"> savings</span>,  
                    and <span className="font-semibold text-red-500"> financial goals</span>.
                    Our goal is to simplify financial management and help you make smarter 
                    money decisions.
                </p>

                <h2 className="text-xl font-semibold text-blue-600 mt-6">Why Choose FinnTrack?</h2>
                <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 text-left mx-auto w-fit">
                    <li>📊 <span className="font-medium text-blue-500">Real-time Expense Tracking</span></li>
                    <li>💰 <span className="font-medium text-blue-500">Smart Savings Insights</span></li>
                    <li>🔄 <span className="font-medium text-blue-500">Seamless Integration with Charts</span></li>
                    <li>🔔 <span className="font-medium text-blue-500">Automated Budget Alerts</span></li>
                    <li>🔒 <span className="font-medium text-blue-500">Secure & Privacy-Focused</span></li>
                </ul>

                <div className="mt-6">
                    <a href="/dashboard">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold">
                            Get Started
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
