import { useEffect, useState } from "react";
import { DBCar } from "@/utilities/car";
import FavoriteProductCard from "./ui/FavoriteProductCard";
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase";
import FetchLoader from "./FetchLoader";
import FetchError from "./FetchError";

const FavoritesList: React.FC = () => {
  const [likedCars, setLikedCars] = useState<DBCar[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshTrigger, setRefreshTrigger] = useState<boolean>(false); // Add this line

  useEffect(() => {
    const fetchLikedCars = async () => {
      setIsLoading(true);
      try {
        const userId = auth.currentUser?.uid;
        if (userId) {
          const userRef = doc(firestore, "users", userId);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            const userData = userSnap.data();
            setLikedCars(userData?.likedCars);
          }
        }
      } catch (e: any) {
        setError(e);
      }
      setIsLoading(false);
    };
    fetchLikedCars();
  }, [refreshTrigger]);

  if (isLoading) {
    return <FetchLoader />;
  }

  if (error) {
    return <FetchError />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 small:grid-cols-2 medium:grid-cols-3 xl:grid-cols-4">
      {likedCars.map((car) => (
        <FavoriteProductCard
          key={car.id}
          car={car}
          setRefreshTrigger={setRefreshTrigger}
        /> // Modify this line
      ))}
    </div>
  );
};

export default FavoritesList;
