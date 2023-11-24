import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/utilities/types";
import formatCurrency from "@/utilities/formatCurrency";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

type ProductCard = {
  data: Product;
};

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  return (
    <div className="rounded-lg outline-0 ring-primary transition duration-300 hover:ring-2 focus:ring-2">
      <Card className="group relative cursor-pointer rounded-lg border-2">
        <Tabs defaultValue="car">
          <div className="absolute top-1 z-10 flex w-full">
            <TabsList className="mx-auto">
              <TabsTrigger value="car">Car</TabsTrigger>
              <TabsTrigger value="info">Info</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="car">
            <CardContent className="pt-4">
              <div className="relative aspect-square rounded-lg bg-foreground/5 dark:bg-background">
                <img
                  src={data.imgUrl}
                  alt=""
                  className="aspect-square rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </CardContent>
          </TabsContent>
          <TabsContent value="info">
            <CardFooter className="my-auto min-h-[310px] flex-col items-start justify-between p-6">
              <div className="pt-5">
                <p className="py-1 pb-3 text-xl font-semibold">{data.name}</p>
                <p className="py-1 text-sm text-primary/80">km: {data.km}</p>
                <p className="py-1 text-sm text-primary/80">
                  year: {data.year}
                </p>
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
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default ProductCard;
