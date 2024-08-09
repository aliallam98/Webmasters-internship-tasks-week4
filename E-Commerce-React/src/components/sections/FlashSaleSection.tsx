import FlashSaleTimer from "../FlashSaleTimer";
import RedSectionHeading from "../RedSectionHeading";
import products from "../../constants/Prodcuts.json";
import ProductCard from "../product/ProductCard";

const FlashSaleSection = () => {
  return (
    <section className="py-10 mg:py-20">
      <div className="container space-y-4">
        <RedSectionHeading HeadingText="Today's" />
        <FlashSaleTimer/>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.filter((product)=> product.isOnSale).slice(0, 4).map((product, i) => (
            <ProductCard
              key={i}
              showRates={true}
              productName={product.productName}
              isOnSale={product.isOnSale}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSaleSection;
