// Store.tsx

import React, { useState } from "react";
import Container from "@/components/ui/container";
import ProductList from "@/components/ProductList";
import SortBy from "@/components/SortBy";
import SearchBar from "@/components/SearchBar";

const Store: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSort = (option: string) => {
    setSortBy(option);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <div className="h-auto w-full bg-white py-7 shadow-md">
        <Container>
          <h1 className="text-[30px] font-bold">Store</h1>
        </Container>
      </div>
      <Container>
        <div className="my-8  flex items-center justify-evenly gap-5">
          <SearchBar onSearch={handleSearch} /> <SortBy onSort={handleSort} />
        </div>
        <ProductList sortBy={sortBy} searchQuery={searchQuery} />
      </Container>
    </>
  );
};

export default Store;
