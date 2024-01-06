import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/utilities/types";
import formatCurrency from "@/utilities/formatCurrency";
import { HeartIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
import { useState } from "react";

dayjs.extend(LocalizedFormat);

type ProductCard = {
  data: Product;
};

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    setIsFavorite(true);
  };

  return (
    <div className="rounded-lg outline-0 ring-primary transition duration-300 hover:ring-2 focus:ring-2">
      <Card className="relative cursor-pointer rounded-lg border-2">
        <CardContent className="pt-4">
          <div className="relative aspect-square rounded-lg bg-foreground/5 dark:bg-background">
            <button
              onClick={() => {
                handleAddToFavorites();
                toast(`${data.name} has been added to favorites`, {
                  description: `${dayjs().format("L LT")}`,
                  action: {
                    label: "Undo",
                    onClick: () => {
                      setIsFavorite(false);
                      console.log("Undo");
                    },
                  },
                });
              }}
              className="group absolute translate-x-1.5 translate-y-1.5 rounded-full bg-white p-[.375rem]"
            >
              <HeartIcon
                className={`h-7 w-7 hover:text-pink-500 ${
                  isFavorite ? "text-pink-500" : "text-gray-400"
                }`}
              />
            </button>
            <Link to={data.route}>
              <img
                src={data.imgUrl}
                alt=""
                className="aspect-square rounded-lg object-cover duration-300"
              />
            </Link>
          </div>
        </CardContent>
        <CardFooter className="my-auto flex-col items-start justify-between p-6 pt-0">
          <div>
            <Link to={data.route}>
              <p className="py-1 pb-3 text-xl font-semibold hover:text-pink-600">
                {data.name}
              </p>
            </Link>

            <p className="py-1 text-sm text-primary/80">km: {data.km}</p>
            <p className="py-1 text-sm text-primary/80">year: {data.year}</p>
            <p className="py-1 text-sm text-primary/80">
              engine: {data.engine}
              <span>cc</span>
            </p>
            <p className="py-1 text-sm text-primary/80">
              Grade: <span className="font-bold">{data.grade}</span>
            </p>
          </div>
          <div className="flex w-full justify-between text-lg">
            <span className="font-semibold">Car Price:</span>{" "}
            {formatCurrency(data?.price)}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
