import React from 'react';
import TransactionRow from './TransactionRow';

function TransactionTable({ transactions, searchTerm, sortOrder, setSortOrder, deleteTransaction }) {
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTransactions = filteredTransactions.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.description.localeCompare(b.description);
    } else {
      return b.description.localeCompare(a.description);
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedTransactions.map((transaction) => (
          <TransactionRow
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
