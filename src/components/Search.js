import React, { useState } from "react";

function Search({handleFilter}) {

  const[searchQuery, setSearchQuery]=useState('')
  
  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    handleFilter(query)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchQuery}
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
