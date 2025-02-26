import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const totalIncome=50000;
    const totalExpenses=30000;
    const balance =totalIncome -totalExpenses;
    //Chart Data
    const chartDAta={
        labels:["Income", "Expenses"],
        datasets: [
            {
                data:[totalIncome,totalExpenses],
                backgroundColor:["#4CAF50","#F44336"],
                hoverBackgroundColor:["#45a049","#d32f2f"],
            },
        ],
    };
  return (
    <section className="bg-gray-100 min-h-screen p-6 md:p-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Financial Overview
        </h2>
        {/* DashBoards card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Income card */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-600">Total Income</h3>
                <p className="text-2xl font-bold text-green-500">₹{totalIncome}</p>
            </div>
            {/* Expenses card */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-600">Total Expenses</h3>
                <p className="text-2xl font-bold text-red-500">₹{totalExpenses}</p>
            </div>
            {/* Balance Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-600">Balance</h3>
                <p
                  className={`text-2xl font-bold ${
                    balance>=0 ? "text-blue-500" : "text-red-500"

                  }`}
                >
                    ₹{balance}
                </p>
            </div>
        </div>
        {/* Expense chart */}
        <div className="mt-10 flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
                <h3 className="text-lg font-semibold text-gray-600 mb-4">
                    Income vs Expenses
                </h3>
                <Doughnut data={chartDAta}/>
            </div>
        </div>
    </section>
  );
};

export default Dashboard