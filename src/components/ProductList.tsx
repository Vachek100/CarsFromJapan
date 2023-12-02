import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/utilities/types";

type ProductListProps = {
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      <div className="small:grid-cols-2 medium:grid-cols-3 grid grid-cols-1 gap-4 xl:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
