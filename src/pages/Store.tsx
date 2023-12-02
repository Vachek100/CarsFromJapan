import ProductList from "@/components/ProductList";
import SearchBar from "@/components/SearchBar";
import SortByButton from "@/components/SortByButton";
import Container from "@/components/ui/container";
import products from "@/data/items.json";
import { useState } from "react";
import options from "@/data/options.json"



const Store = () => {
  const [filteredItems, setFilteredItems] = useState(products);
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);
  
  return (
    <>
      <Container>
        <div className="mx-16 mb-8 mt-12 flex items-center justify-center">
          <SearchBar items={products} setFilteredItems={setFilteredItems} />
          <SortByButton options={options} value={value} onChange={o => setValue(o)}/>
        </div>
        <ProductList items={filteredItems} />
      </Container>
    </>
  );
};

export default Store;
