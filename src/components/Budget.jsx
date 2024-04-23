import React from 'react'

const Budget = ({transactions}) => {

  const totalIncome = transactions
    .filter((transaction) => transaction.transactionType === 'income')
    .reduce((acc, curr) => acc + parseInt(curr.amount), 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.transactionType === 'expenses')
    .reduce((acc, curr) => acc + parseInt(curr.amount), 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div>
      Balance : {balance} $
      <div className='totals'>
       Total Income: {totalIncome} $
       Total Expenses: {totalExpenses} $ 
      </div>
    </div>
  )
}

export default Budget
