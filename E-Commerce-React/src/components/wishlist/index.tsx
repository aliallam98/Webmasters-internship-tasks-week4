import { useWishlist } from "@/contexts/WishlistContext";
import ProductCard from "../product/ProductCard";
import RedSectionHeading from "../RedSectionHeading";
import { Button } from "../ui/button";
import { IProduct } from "../typings";
import products from "../../constants/Prodcuts.json";
import { Link } from "react-router-dom";
import MoveAllToBagButton from "../cart/MoveAllToBagButton";

const MainWishList = () => {
  const { wishlist } = useWishlist();
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">WishList({wishlist?.length})</h2>
          <MoveAllToBagButton/>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {wishlist?.map((product: IProduct) => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              productName={product.productName}
              isOnSale={product.isOnSale}
              productId={product.id}
            />
          ))}
        </div>
        <div className="mt-10 space-y-10">
          <div className="flex justify-between items-center">
          <RedSectionHeading HeadingText="Just For You" />
          <Button variant={"outline"} className="px-12">
            <Link to={"/products"}>See All</Link>
          </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                productName={product.productName}
                imageSrc={product.imageSrc}
                isOnSale={product.isOnSale}
              productId={product.id}

              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainWishList;
