import { useEffect, useState, useMemo } from "react";

type SearchBarProps = {
  items: any[];
  setFilteredItems: (items: any[]) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ items, setFilteredItems }) => {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, items]);

  useEffect(() => {
    setFilteredItems(filteredItems);
  }, [filteredItems, setFilteredItems]);

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="mr-5 flex h-12 w-60 rounded-full border border-solid border-pink-500 p-3 focus:outline-none"
      type="search"
      placeholder="Search for cars here..."
    />
  );
};

export default SearchBar;
