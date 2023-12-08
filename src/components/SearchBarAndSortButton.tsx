import React, { useEffect, useState, useMemo } from "react";

type SearchBarProps = {
  items: any[];
  setFilteredItems: (items: any[]) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ items, setFilteredItems }) => {
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    let filtered = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );

    if (sortOption) {
      filtered = filtered.sort((a, b) => {
        if (sortOption === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortOption === "priceUp") {
          return a.price - b.price;
        } else if (sortOption === "priceDown") {
          return b.price - a.price;
        } else if (sortOption === "oldest") {
          return a.year - b.year;
        } else if (sortOption === "youngest") {
          return b.year - a.year;
        }

        return 0;
      });
    }

    return filtered;
  }, [query, items, sortOption]);

  useEffect(() => {
    setFilteredItems(filteredItems);
  }, [filteredItems, setFilteredItems]);

  return (
    <div className="flex">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mr-5 flex h-12 w-60 rounded-full border border-solid border-pink-500 p-3 focus:outline-none"
        type="search"
        placeholder="Search for cars here..."
      />
      <select
        value={sortOption || ""}
        onChange={(e) => setSortOption(e.target.value || null)}
        className="ml-2 h-12 rounded-full border border-solid border-pink-500 p-3 focus:outline-none"
      >
        <option value="">Sort by</option>
        <option value="name">Name</option>
        <option value="priceUp">Price up</option>
        <option value="priceDown">Price down</option>
        <option value="oldest">Oldest</option>
        <option value="youngest">Youngest</option>
      </select>
    </div>
  );
};

export default SearchBar;
