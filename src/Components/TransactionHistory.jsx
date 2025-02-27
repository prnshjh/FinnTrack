import React, { useState } from 'react';
const transactionsData = [
    {id: 1, type: "income", amount:5000,category:"Salary",date:"2025-02-25"},
    {id: 2, type: "income", amount:1500,category:"Groceries",date:"2025-02-24"},
    {id: 3, type: "income", amount:2000,category:"Rent",date:"2025-02-23"},
    {id: 4, type: "income", amount:2000,category:"Freelance",date:"2025-02-22"},
];
const TransactionHistory = () => {
    const [filter,setFilter] = useState("all");
    const filteredTransactions = transactionsData.filter((transaction)=>
      filter==="all"?true:transaction.type===filter
);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
        {/* Filter Buttons */}
        <div className="flex gap-3 mb-4">
            <button className={`px-4 py-2 rounded ${filter==="all" ? "bg-blue-500 text-white":"bg-gray-200"}`} onClick={() =>setFilter("all")}>All</button>
            <button className={`px-4 py-2 rounded ${filter==="income" ? "bg-green-500 text-white":"bg-gray-200"}`} onClick={() =>setFilter("income")}>Income</button>
            <button className={`px-4 py-2 rounded ${filter==="expense" ? "bg-red-500 text-white":"bg-gray-200"}`} onClick={() =>setFilter("expense")}>Expense</button>
        </div>
        {/* Transaction list */}
        <ul>
            {filteredTransactions.map((transaction)=>(
                <li key={transaction.id} className="flex justify-between items-center p-3 border-b">
                    <span className="font-medium">{transaction.category}</span>
                    <span className={transaction.type==="income"?"text-green-500":"text-red-500"}>
                        {transaction.type==="income"?"+":"-"} ₹{transaction.amount}
                    </span>
                    <span className="text-gray-500">{transaction.date}</span>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default TransactionHistory;