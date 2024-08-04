import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';  // Make sure this path is correct
import TransactionForm from './TransactionForm';    // Make sure this path is correct
import SearchBar from './SearchBar';                // Make sure this path is correct

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('description');

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionTable
        transactions={transactions}
        searchTerm={searchTerm}
        sortOrder={sortOrder}
        sortBy={sortBy}
        setSortOrder={setSortOrder}
        setSortBy={setSortBy}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;
