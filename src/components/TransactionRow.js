import React from 'react';

function TransactionRow({ transaction, deleteTransaction }) {
  return (
    <tr>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.date}</td>
      <td>
        <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default TransactionRow;
