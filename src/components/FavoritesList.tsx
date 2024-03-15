import { useEffect, useState } from "react";
import { DBCar } from "@/utilities/car";
import FavoriteProductCard from "./ui/FavoriteProductCard";
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase"; // import your firebase config

const FavoritesList: React.FC = () => {
  const [likedCars, setLikedCars] = useState<DBCar[]>([]);

  useEffect(() => {
    const fetchLikedCars = async () => {
      const userId = auth.currentUser?.uid;
      if (userId) {
        const userRef = doc(firestore, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setLikedCars(userData?.likedCars);
        }
      }
    };

    fetchLikedCars();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 small:grid-cols-2 medium:grid-cols-3 xl:grid-cols-4">
      {likedCars.map((car) => (
        <FavoriteProductCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default FavoritesList;
