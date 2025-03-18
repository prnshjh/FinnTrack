import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Dashboard from "./Components/Dashboard";
import TransactionHistory from "./Components/TransactionHistory";
import Footer from "./Components/Footer";
import AddTransaction from "./Components/AddTransaction";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'



function App() {
  return (
    <div>
       <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Header/>
      <Hero/>
      <Dashboard/>
      <TransactionHistory/>
      <AddTransaction/>
      <Footer/>
    </div>
  );
}

export default App;
