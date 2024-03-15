import FavoritesList from "@/components/FavoritesList";
import Container from "@/components/ui/container";

const Favorites = () => {
  return (
    <>
      <div className="h-auto w-full bg-white py-7 shadow-md">
        <Container>
          <h1 className="text-[30px] font-bold">Favorites</h1>
        </Container>
      </div>
      <Container>
        <div className="mb-4 mt-12 text-xl font-bold">Favorites</div>
        <FavoritesList />
      </Container>
    </>
  );
};

export default Favorites;
