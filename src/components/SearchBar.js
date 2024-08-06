import React from 'react';

function SearchBar({ setSearchTerm }) {
  return (
    <div>
    <p id='search-by'>Search By :</p>
    <input id='search'
      type="text"
      placeholder="Description"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    </div>
  );
}

export default SearchBar;
