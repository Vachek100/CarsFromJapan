import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/utilities/types";
import formatCurrency from "@/utilities/formatCurrency";
import { HeartIcon } from "@heroicons/react/20/solid";

type ProductCard = {
  data: Product;
};

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  return (
    <div className="rounded-lg outline-0 ring-primary transition duration-300 hover:ring-2 focus:ring-2">
      <Card className="relative cursor-pointer rounded-lg border-2">
        <CardContent className="pt-4">
          <div className="relative aspect-square rounded-lg bg-foreground/5 dark:bg-background">
            <div className="group absolute z-10 translate-x-2 translate-y-2 rounded-full bg-white p-[.375rem]">
              <HeartIcon className="h-7 w-7 text-gray-400 group-hover:text-pink-500" />
            </div>
            <img
              src={data.imgUrl}
              alt=""
              className="aspect-square rounded-lg object-cover duration-300"
            />
          </div>
        </CardContent>
        <CardFooter className="my-auto flex-col items-start justify-between p-6 pt-0">
          <div>
            <p className="py-1 pb-3 text-xl font-semibold">{data.name}</p>
            <p className="py-1 text-sm text-primary/80">km: {data.km}</p>
            <p className="py-1 text-sm text-primary/80">year: {data.year}</p>
            <p className="py-1 text-sm text-primary/80">
              engine: {data.engine}
              <span> cc</span>
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
