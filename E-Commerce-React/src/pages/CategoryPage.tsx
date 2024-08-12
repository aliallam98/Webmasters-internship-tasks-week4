import { Link, useParams } from "react-router-dom";

import products from "../constants/Prodcuts.json";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";

const CategoryPage = () => {
  const { category } = useParams();
  const filteredProducts = products.filter(
    (product) => product.category == category
  );
  return (
    <section className="py-10 lg:py-20">
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 &&
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              showRates={true}
              productName={product.productName}
              isOnSale={product.isOnSale}
              imageSrc={product.imageSrc}
              productId={product.id}
            />
          ))}
      </div>
      {!filteredProducts.length && (
        <div className="text-center space-y-4">
          <p>This Category Is Empty</p>
          <Button>
            <Link to={"/product"}>Discover All Products</Link>
          </Button>
        </div>
      )}
    </section>
  );
};

export default CategoryPage;
