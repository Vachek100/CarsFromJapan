import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { auth, firestore } from "@/firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { DBCar } from "@/utilities/car";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "sonner";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";

dayjs.extend(LocalizedFormat);

type DeleteFavoriteProductCard = {
  car: DBCar;
  setRefreshTrigger: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeleteFromFavoritesAlert: React.FC<DeleteFavoriteProductCard> = ({
  car,
  setRefreshTrigger,
}) => {
  const [user] = useAuthState(auth);
  const handleRemoveCar = async () => {
    const userRef = doc(firestore, "users", user?.uid || "");
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
        await updateDoc(userRef, { likedCars: likedCars });
        toast(`${car.name} has been removed from favorites`, {
          description: `${dayjs().format("L LT")}`,
          action: {
            label: "Undo",
            onClick: async () => {
              await updateDoc(userRef, { likedCars: [...likedCars, car] });
              setRefreshTrigger((prev) => !prev);
            },
          },
        });

        setRefreshTrigger((prev) => !prev);
      }
    }
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="group h-fit w-fit rounded-md bg-white   hover:bg-red-500 ">
          <XMarkIcon className="h-7 w-7 group-hover:text-white" />
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-[#f3f4f6]">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will delete your favorite car from your favorites.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-white">Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-[#0b305e] hover:bg-[#1357aa]"
              onClick={handleRemoveCar}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteFromFavoritesAlert;
