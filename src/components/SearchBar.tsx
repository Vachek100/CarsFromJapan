// SearchBar.tsx

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

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
    <div className="flex items-center gap-2">
      <Label className="text-lg" htmlFor="search">
        Search:
      </Label>
      <Input
        className="text-md"
        id="search"
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Button
        className="bg-pink-500 hover:bg-pink-700"
        onClick={handleSearchClick}
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default SearchBar;
