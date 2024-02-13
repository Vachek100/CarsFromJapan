import React, { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "@/firebase/firebase";
import { DBCar } from "@/utilities/car";
import FetchLoader from "./FetchLoader";
import FetchError from "./FetchError";
import ProductCard from "./ui/ProductCard";

interface Props {
  sortBy: string;
  searchQuery: string;
}

const ProductList: React.FC<Props> = ({ sortBy, searchQuery }) => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sortedCars, setSortedCars] = useState<DBCar[]>([]);
  const [filteredCars, setFilteredCars] = useState<DBCar[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true);
      try {
        let q = query(collection(firestore, "cars"));

        switch (sortBy) {
          case "name":
            q = query(collection(firestore, "cars"), orderBy("name"));
            break;
          case "price_up":
            q = query(collection(firestore, "cars"), orderBy("price"));
            break;
          case "price_down":
            q = query(collection(firestore, "cars"), orderBy("price", "desc"));
            break;
          case "age_up":
            q = query(collection(firestore, "cars"), orderBy("year"));
            break;
          case "age_down":
            q = query(collection(firestore, "cars"), orderBy("year", "desc"));
            break;
          case "km_up":
            q = query(collection(firestore, "cars"), orderBy("km"));
            break;
          case "km_down":
            q = query(collection(firestore, "cars"), orderBy("km", "desc"));
            break;
          default:
            break;
        }

        const querySnapshot = await getDocs(q);
        const tmp: DBCar[] = [];
        querySnapshot.forEach((doc) => {
          tmp.push({ id: doc.id, ...doc.data() } as DBCar);
        });
        setSortedCars(tmp);
      } catch (e: any) {
        setError(e);
      }
      setIsLoading(false);
    };

    fetchCars();
  }, [sortBy]);

  useEffect(() => {
    // Apply search filter if searchQuery is not empty
    if (searchQuery) {
      const filtered = sortedCars.filter((car) =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredCars(filtered);
    } else {
      setFilteredCars(sortedCars);
    }
  }, [sortedCars, searchQuery]);

  if (isLoading) {
    return <FetchLoader />;
  }

  if (error) {
    return <FetchError />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 small:grid-cols-2 medium:grid-cols-3 xl:grid-cols-4">
      {filteredCars.map((car) => (
        <ProductCard key={car.id} data={car} />
      ))}
    </div>
  );
};

export default ProductList;
