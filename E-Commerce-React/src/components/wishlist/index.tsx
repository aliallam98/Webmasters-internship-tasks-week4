import ProductCard from "../product/ProductCard";
import RedSectionHeading from "../RedSectionHeading";
import { Button } from "../ui/button";

const index = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2>WishList(2)</h2>
        <Button variant={"outline"}>Move All To Bag</Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        ([...Array(6)].map((item,i)=
        <ProductCard isOnSale={true} showRates={true} 
        />
        ))
      </div>
      <RedSectionHeading HeadingText="Just For You" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        ([...Array(6)].map((item,i)=
        <ProductCard isOnSale={true} showRates={true} 
        />
        ))
      </div>
    </section>
  );
};

export default index;
