import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/utilities/types";

//TODO item.route, add routes to items.json
type ProductListProps = {
  items: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 small:grid-cols-2 medium:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
