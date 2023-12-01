import ProductList from "@/components/ProductList";
import SearchBar from "@/components/SearchBar";
import Container from "@/components/ui/container";
import products  from "@/data/items.json";
import { useState } from "react";

const Store = () => {

  const [filteredItems, setFilteredItems] = useState(products);
  return (
    <>
      <Container>
        <SearchBar items={products} setFilteredItems={setFilteredItems} />
        <ProductList items={filteredItems} />
      </Container>
    </>
  );
};

export default Store;
