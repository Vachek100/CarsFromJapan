import React, { useEffect, useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SearchBarProps = {
  items: any[];
  setFilteredItems: (items: any[]) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ items, setFilteredItems }) => {
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState<string>();

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
    //TODO ---------------------- dodělat to pod tímhle (malé obrazovky broken) --------------------
    <div className="extrasm:flex">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mr-5 flex h-12 w-60 rounded-full border border-solid border-pink-500 p-3 focus:outline-none"
        type="search"
        name="search"
        placeholder="Search for cars here..."
      />

      <Select value={sortOption} onValueChange={(e) => setSortOption(e)}>
        <SelectTrigger className="text-md ml-2 h-12 w-[180px] rounded-full border border-solid border-pink-500 p-3 focus:outline-none">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem className="cursor-pointer" value="name">
            Name
          </SelectItem>
          <SelectItem className="cursor-pointer" value="priceUp">
            Price up
          </SelectItem>
          <SelectItem className="cursor-pointer" value="priceDown">
            Price down
          </SelectItem>
          <SelectItem className="cursor-pointer" value="oldest">
            Oldest
          </SelectItem>
          <SelectItem className="cursor-pointer" value="youngest">
            Youngest
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SearchBar;
