import { Card, CardContent } from "@/components/ui/card";
import { DBCar } from "@/utilities/car";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
import DeleteFromFavoritesAlert from "./DeleteFromFavoritesAlert";

dayjs.extend(LocalizedFormat);

type FavoriteProductCardProps = {
  car: DBCar;
  setRefreshTrigger: React.Dispatch<React.SetStateAction<boolean>>;
};

const FavoriteProductCard: React.FC<FavoriteProductCardProps> = ({
  car,
  setRefreshTrigger,
}) => {
  return (
    <div className="rounded-lg outline-0 ring-primary transition duration-300 hover:ring-2 focus:ring-2">
      <Card className="relative cursor-pointer rounded-md border-2">
        <CardContent className="p-0">
          <div className="relative aspect-square rounded-md bg-foreground/5 dark:bg-background">
            <div className="absolute top-0 flex w-full items-center justify-between bg-white p-1">
              <div className=" bg-white ">
                <Link to={car.route}>
                  <p className="rounded-md p-[.375rem] text-xl font-semibold hover:text-[#e95759]">
                    {car.name}
                  </p>
                </Link>
              </div>
              <DeleteFromFavoritesAlert
                car={car}
                setRefreshTrigger={setRefreshTrigger}
              />
            </div>
            <Link to={car.route}>
              <img
                src={car.imgURL}
                alt={`${car.name} image`}
                className="aspect-square rounded-md object-cover duration-300"
              />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FavoriteProductCard;
