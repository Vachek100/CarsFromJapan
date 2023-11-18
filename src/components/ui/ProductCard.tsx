import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Product } from "@/utilities/types";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  return (
    <a
      href="/"
      className="rounded-lg outline-0 ring-primary transition duration-300 hover:ring-2 focus:ring-2"
    >
      <Card className="rounded-lg border-2">
        <CardContent className="pt-4">
          <div className="relative aspect-square rounded-lg bg-foreground/5 dark:bg-background">
            <img
              src={data.images?.[0]}
              alt=""
              className="aspect-square rounded-lg object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start">
          <div>
            <p className="text-lg font-semibold">{data.name}</p>
            <p className="text-sm text-primary/80">{data.km}</p>
          </div>
          <div className="flex items-center justify-between">{data?.price}</div>
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProductCard;
