import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { DBCar } from "@/utilities/car";
import formatCurrency from "@/utilities/formatCurrency";
import { HeartIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";

dayjs.extend(LocalizedFormat);

type FavoriteProductCard = {
  car: DBCar;
};

const FavoriteProductCard: React.FC<FavoriteProductCard> = ({ car }) => {
  return (
    <div className="rounded-lg outline-0 ring-primary transition duration-300 hover:ring-2 focus:ring-2">
      <Card className="relative cursor-pointer rounded-md border-2">
        <CardContent className="pt-4">
          <div className="relative aspect-square rounded-md bg-foreground/5 dark:bg-background">
            <button className="group absolute right-1 top-1 rounded-md  bg-white p-[.375rem]">
              <HeartIcon className="h-7 w-7 group-hover:text-pink-500" />
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

export default FavoriteProductCard;
