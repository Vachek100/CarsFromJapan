// Store.tsx

import React, { useState } from "react";
import Container from "@/components/ui/container";
import ProductList from "@/components/ProductList";
import SortBy from "@/components/SortBy";
import SearchBar from "@/components/SearchBar"; // Import the SearchBar component

const Store: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query

  const handleSort = (option: string) => {
    setSortBy(option);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Container>
      <div className="mb-8 mt-12 flex items-center justify-between">
        <SortBy onSort={handleSort} />
        <SearchBar onSearch={handleSearch} />{" "}
        {/* Render the SearchBar component */}
      </div>
      <ProductList sortBy={sortBy} searchQuery={searchQuery} />{" "}
      {/* Pass searchQuery as prop */}
    </Container>
  );
};

export default Store;
