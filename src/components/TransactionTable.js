import React from 'react';
import TransactionRow from './TransactionRow';

function TransactionTable({
  transactions,
  searchTerm,
  sortOrder,
  sortBy,
  setSortOrder,
  setSortBy,
  deleteTransaction,
  selectedCategory,
}) {
  const filteredTransactions = transactions
    .filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((transaction) => {
      return selectedCategory ? transaction.category === selectedCategory : true;
    });

  const sortedTransactions = filteredTransactions.sort((a, b) => {
    if (sortBy === 'description') {
      return sortOrder === 'asc'
        ? a.description.localeCompare(b.description)
        : b.description.localeCompare(a.description);
    } else if (sortBy === 'category') {
      return sortOrder === 'asc'
        ? a.category.localeCompare(b.category)
        : b.category.localeCompare(a.category);
    }
    return 0;
  });

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => { setSortBy('description'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>
            Description
          </th>
          <th onClick={() => { setSortBy('category'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>
            Category
          </th>
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
