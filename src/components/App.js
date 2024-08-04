import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';  
import TransactionForm from './TransactionForm';    
import SearchBar from './SearchBar';                

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
