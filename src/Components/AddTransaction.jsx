import React, { useState } from "react";

const AddTransaction = ({ onAdd }) => {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category || !date) return;
    
    onAdd({
      id: Date.now(),
      type,
      amount: Number(amount),
      category,
      date,
    });

    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Type</label>
          <select className="w-full p-2 border rounded" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Amount (₹)</label>
          <input type="number" className="w-full p-2 border rounded" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>

        <div>
          <label className="block font-medium">Category</label>
          <input type="text" className="w-full p-2 border rounded" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>

        <div>
          <label className="block font-medium">Date</label>
          <input type="date" className="w-full p-2 border rounded" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
