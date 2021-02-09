import React from 'react';
import './App2.css'
// Import Components
import Header from './Components/Header';
import Balance from './Components/Balance';
import AccountSummary from './Components/AccountSummary';
import TransactionHistory from './Components/TransactionHistory';
import AddTransaction from './Components/AddTransaction';

function App() {
  return (
    <div className='root'>
      <Header /> 
      <div className="container">
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
      
    </div>
  );
}

export default App;
