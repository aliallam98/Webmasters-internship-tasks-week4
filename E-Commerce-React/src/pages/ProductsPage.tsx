import ProductCard from "@/components/product/ProductCard";
import products from "../constants/Prodcuts.json";
import RedSectionHeading from "@/components/RedSectionHeading";

const ProductsPage = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container space-y-10">
        <RedSectionHeading HeadingText="Products" />
        <h1 className="text-xl  lg:text-4xl font-semibold">
          Discover All products
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
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
      </div>
    </section>
  );
};

export default ProductsPage;
