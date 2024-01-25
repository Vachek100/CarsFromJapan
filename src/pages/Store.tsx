import ProductList from "@/components/ProductList";
import SearchBar from "@/components/SearchBarAndSortButton";
import Container from "@/components/ui/container";
import products from "@/data/items.json";
import { useState } from "react";

const Store = () => {
  const [filteredItems, setFilteredItems] = useState(products);

  return (
    <>
      <Container>
        <div className="mb-8 mt-12 flex items-center justify-center">
          <SearchBar items={products} setFilteredItems={setFilteredItems} />
        </div>
        <ProductList items={filteredItems} />
      </Container>
    </>
  );
};

export default Store;
