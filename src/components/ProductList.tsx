import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/utilities/types";
import { Link } from "react-router-dom";

//TODO item.route, add routes to items.json
type ProductListProps = {
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      <div className="small:grid-cols-2 medium:grid-cols-3 grid grid-cols-1 gap-4 xl:grid-cols-4">
        {items.map((item) => (
          <Link to={item.route}>
          <ProductCard key={item.id} data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;