import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { DBCar } from "@/utilities/car";
import formatCurrency from "@/utilities/formatCurrency";
import { HeartIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import * as dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/firebase";
import { handleLoginMessage } from "@/toasts/toastMessages";
import { doc, getDoc, updateDoc } from "firebase/firestore";

type ProductCard = {
  car: DBCar;
};

const ProductCard: React.FC<ProductCard> = ({ car }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [user] = useAuthState(auth);

  const handleAddToFavorites = async () => {
    if (!user) {
      handleLoginMessage();
      return;
    }

    const userRef = doc(firestore, "users", user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      console.log("No such document!");
    } else {
      const likedCars = docSnap.data().likedCars || [];
      const existingCarIndex = likedCars.findIndex(
        (likedCar: DBCar) => likedCar.id === car.id,
      );

      if (existingCarIndex !== -1) {
        likedCars.splice(existingCarIndex, 1);
        toast(`${car.name} has been removed from favorites`, {
          
          action: {
            label: "Undo",
            onClick: () => {
              setIsFavorite(true);
              updateDoc(userRef, { likedCars: [...likedCars, car] });
            },
          },
        });
      } else {
        likedCars.push(car);
        toast(`${car.name} has been added to favorites`, {
          
          action: {
            label: "Undo",
            onClick: () => {
              setIsFavorite(false);
              updateDoc(userRef, {
                likedCars: likedCars.filter(
                  (likedCar: DBCar) => likedCar.id !== car.id,
                ),
              });
            },
          },
        });
      }
      setIsFavorite(
        likedCars.some((likedCar: DBCar) => likedCar.id === car.id),
      );
      updateDoc(userRef, { likedCars });
    }
  };

  useEffect(() => {
    const checkFavorite = async () => {
      if (user) {
        const userRef = doc(firestore, "users", user.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          const likedCars = docSnap.data().likedCars || [];
          setIsFavorite(
            likedCars.some((likedCar: DBCar) => likedCar.id === car.id),
          );
        }
      } else {
        setIsFavorite(false);
      }
    };

    checkFavorite();
  }, [user, car.id]);

  return (
    <div className="rounded-lg outline-0 ring-primary transition duration-300 hover:ring-2 focus:ring-2">
      <Card className="relative cursor-pointer rounded-md border-2">
        <CardContent className="pt-4">
          <div className="relative aspect-square rounded-md bg-foreground/5 dark:bg-background">
            <button
              onClick={user ? handleAddToFavorites : handleLoginMessage}
              className="group absolute right-1 top-1 rounded-md  bg-white p-[.375rem]"
            >
              <HeartIcon
                className={`h-7 w-7 group-hover:text-pink-500 ${
                  isFavorite ? "text-pink-500" : "text-gray-400"
                }`}
              />
            </button>
            <Link to={car.route}>
              <img
                src={car.imgURL}
                alt={`${car.name} image`}
                className="aspect-square rounded-md object-cover duration-300"
              />
            </Link>
          </div>
        </CardContent>
        <CardFooter className="my-auto flex-col items-start justify-between p-6 pt-0">
          <div>
            <Link to={car.route}>
              <p className="py-1 pb-3 text-xl font-semibold hover:text-[#e95759]">
                {car.name}
              </p>
            </Link>

            <p className="py-1 text-sm text-primary/80">km: {car.km}</p>
            <p className="py-1 text-sm text-primary/80">year: {car.year}</p>
            <p className="py-1 text-sm text-primary/80">
              engine: {car.engine}
              <span>cc</span>
            </p>
            <p className="py-1 text-sm text-primary/80">
              Grade: <span className="font-bold">{car.grade}</span>
            </p>
          </div>
          <div className="flex w-full justify-between text-lg">
            <span className="font-semibold">Car Price:</span>{" "}
            {formatCurrency(car?.price)}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
