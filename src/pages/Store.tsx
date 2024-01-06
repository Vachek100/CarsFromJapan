import ProductList from "@/components/ProductList";
import SearchBar from "@/components/SearchBarAndSortButton";
import Container from "@/components/ui/container";
import { Toaster } from "@/components/ui/sonner";
import products from "@/data/items.json";
import { useState } from "react";

const Store = () => {
  const [filteredItems, setFilteredItems] = useState(products);

  return (
    <>
      <Container>
        <div className="mx-16 mb-8 mt-12 flex items-center justify-center">
          <SearchBar items={products} setFilteredItems={setFilteredItems} />
        </div>
        <ProductList items={filteredItems} />
        <Toaster />
      </Container>
    </>
  );
};

export default Store;
