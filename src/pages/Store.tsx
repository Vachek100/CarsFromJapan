import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";
import products  from "@/data/items.json";


const Store = () => {
  return (
    <>
      <Container>
        <ProductList items={products} />
      </Container>
    </>
  );
};

export default Store;
