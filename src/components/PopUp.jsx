import React, { useState } from 'react';

const PopUp = ({ setBtnClicked, addTransaction }) => {
  const [transactionType, setTransactionType] = useState('income');
  const [amount, setAmount] = useState('');

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {

    if (!amount.trim()) {
      return;
    }

    addTransaction({ transactionType, amount });

    setBtnClicked(false);
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <select value={transactionType} onChange={handleTransactionTypeChange}>
              <option value="income">Income</option>
              <option value="expenses">Expenses</option>
            </select>
          </div>
          <div className="input-container">
            <input
              placeholder="Enter the amount"
              type="text"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
          <button className="submit" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
