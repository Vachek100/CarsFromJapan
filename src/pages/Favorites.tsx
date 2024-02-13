import Container from "@/components/ui/container";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";

const Favorites = () => {
  const [user] = useAuthState(auth);
  return (
    <Container>
      <div className="mb-4 mt-12 text-xl font-bold">Favorites</div>
      {user ? (
        <div>
          <p>mazda rx-7</p>
          <p>mazda rx-8</p>
        </div>
      ) : (
        <p>You must login first to see your favorite cars</p>
      )}
    </Container>
  );
};

export default Favorites;
