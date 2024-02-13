import React from "react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  onSort: (option: string) => void;
}

const SortBy: React.FC<Props> = ({ onSort }) => {
  const handleSortChange = (selectedOption: string) => {
    onSort(selectedOption);
  };

  return (
    <div className="flex items-center gap-2">
      <Label className="text-lg" htmlFor="sort">Sort By:</Label>
      <Select name="sort" onValueChange={handleSortChange}>
        <SelectTrigger className="w-[180px] text-md">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem className="text-md" value="select">Select</SelectItem>
          <SelectItem className="text-md" value="name">Name</SelectItem>
          <SelectItem className="text-md" value="price_up">Price (Low to High)</SelectItem>
          <SelectItem className="text-md" value="price_down">Price (High to Low)</SelectItem>
          <SelectItem className="text-md" value="age_up">Age (Oldest First)</SelectItem>
          <SelectItem className="text-md" value="age_down">Age (Newest First)</SelectItem>
          <SelectItem className="text-md" value="km_up">Kilometers (Low to High)</SelectItem>
          <SelectItem className="text-md" value="km_down">Kilometers (High to Low)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortBy;
