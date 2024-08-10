import RedSectionHeading from "../RedSectionHeading";
import products from "../../constants/Prodcuts.json";
import ProductCard from "../product/ProductCard";
const OurProducts = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div className="mb-10 space-y-3">
          <RedSectionHeading HeadingText="Our Products" />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Explore Our Products
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product, i) => (
            <ProductCard
              key={i}
              showRates={true}
              productName={product.productName}
              isOnSale={product.isOnSale}
              imageSrc={product.imageSrc}
              productId={product.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
