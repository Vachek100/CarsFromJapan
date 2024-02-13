// SearchBar.tsx

import React, { useState } from "react";

interface Props {
  onSearch: (searchQuery: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;
