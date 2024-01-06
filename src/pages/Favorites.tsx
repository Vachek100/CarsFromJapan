import Container from "@/components/ui/container";
import products from "@/data/items.json";
import FavoritesList from "@/components/FavoritesList";

const Favorites = () => {
  return (
    <Container>
      <div className="mt-12 mb-4 text-xl font-bold">Favorites</div>
      <FavoritesList items={products} />
    </Container>
  );
};

export default Favorites;
