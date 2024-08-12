import ProductCard from "@/components/product/ProductCard";
import products from "../constants/Prodcuts.json";

const ProductsPage = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </section>
  );
};

export default ProductsPage;
