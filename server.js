import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log("MongoDB Connected"))
    .catch((err)=> console.log(err));
const transactionSchema = new mongoose.Schema({
    type : String,
    amount: Number,
    category:String,
    date: String,
});
const Transaction = mongoose.model("Transaction",transactionSchema);
app.post("/transactions",async(req,res)=>{
    const newTransaction=new Transaction(req.body);
    await newTransaction.save();
    res.status(201).jsson(newTransaction);
});
app.get("/transactions",async(req,res)=>{
    const transactions = await Transaction.find();
    res.json(transactions);
});
app.listen(5000,()=>console.log("Server running on port 5000"));