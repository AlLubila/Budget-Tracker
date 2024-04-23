import React from 'react';

const Result = ({ transactions }) => {

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Expenses</th>
            <th>Incomes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {transactions
                .filter((transaction) => transaction.transactionType === 'expenses')
                .map((transaction, index) => (
                  <div key={index}>{transaction.amount} $</div>
                ))}
            </td>
            <td>
              {transactions
                .filter((transaction) => transaction.transactionType === 'income')
                .map((transaction, index) => (
                  <div key={index}>{transaction.amount} $</div>
                ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Result;
