import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Result from './components/Result';
import Budget from './components/Budget';
import PopUp from './components/PopUp';

export const App = () => {
  const [btnClicked, setBtnClicked] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
  return (
    <div>
      <Header setBtnClicked={setBtnClicked} />
      <Budget transactions={transactions}  />
      <Result transactions={transactions} />
      {btnClicked && <PopUp setBtnClicked={setBtnClicked} addTransaction={addTransaction} />}
    </div>
  );
};

export default App;
