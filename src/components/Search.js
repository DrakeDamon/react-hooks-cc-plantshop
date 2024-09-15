import React, { useState } from "react";

function Search({onSearch}) {

  const [searchTerm, setSearchTerm] = useState("");


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); 
    onSearch(e.target.value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
