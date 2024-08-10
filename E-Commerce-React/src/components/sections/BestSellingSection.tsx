import RedSectionHeading from "../RedSectionHeading";
import { Button } from "../ui/button";
import products from "../../constants/Prodcuts.json";
import ProductCard from "../product/ProductCard";

const BestSellingSection = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <RedSectionHeading HeadingText="This Month" />
        <div className="flex justify-between items-center my-10">
          <h1 className="text-xl  lg:text-4xl font-semibold">Best Selling Products</h1>
          <Button
            className="bg-designRedColor hover:bg-designRedColor/90 "
            type="submit"
          >
            View All
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product, i) => (
            <ProductCard
              key={i}
              showRates={true}
              productName={product.productName}
              isOnSale={product.isOnSale}
              imageSrc={product.imageSrc}
              productId = {product.id}

            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingSection;
