// SortBy.tsx

import React from "react";

interface Props {
  onSort: (option: string) => void;
}

const SortBy: React.FC<Props> = ({ onSort }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    onSort(selectedOption);
  };

  return (
    <div>
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="">Select</option>
        <option value="name">Name</option>
        <option value="price_up">Price (Low to High)</option>
        <option value="price_down">Price (High to Low)</option>
        <option value="age_up">Age (Oldest First)</option>
        <option value="age_down">Age (Newest First)</option>
        <option value="km_up">Kilometers (Low to High)</option>
        <option value="km_down">Kilometers (High to Low)</option>
      </select>
    </div>
  );
};

export default SortBy;
