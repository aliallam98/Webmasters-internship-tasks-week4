import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Eye, Heart, ShoppingCartIcon, Star, Trash } from "lucide-react";

interface IProps {
  isOnSale: boolean;
  showRates: boolean;
  productName: string;
  imageSrc: string;
}
const ProductCard = ({
  isOnSale,
  showRates,
  productName,
  imageSrc,
}: IProps) => {
  // const { pathname } = useLocation();
  const isWishlistPage = false; //pathname === "/wishlist";

  const onRemoveFromWishlistHandler = () => {};

  return (
    <Card className="relative group border-none rounded-md">
      <CardHeader className="absolute  w-full">
        <CardTitle className="absolute top-4  w-full z-50">
          {isOnSale && (
            <Button
              onClick={onRemoveFromWishlistHandler}
              className="bg-[#db4444] block mr-auto"
            >
              -35%
            </Button>
          )}
          {isWishlistPage ? (
            <Button
              onClick={onRemoveFromWishlistHandler}
              className="size-5 p-1 bg-white rounded-full block ml-auto hover:bg-transparent"
            >
              <Trash />
            </Button>
          ) : (
            <div className="absolute right-10 top-4 space-y-2">
              <Button
                onClick={() => {}}
                className="size-10 grid place-content-center bg-white rounded-full  ml-auto text-black hover:bg-transparent"
              >
                <Heart />
              </Button>
              <Button
                onClick={() => {}}
                className="size-10 grid place-content-center bg-white rounded-full  ml-auto text-black hover:bg-transparent"
              >
                <Eye />
              </Button>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative bg-[#f5f5f5] grid place-content-center p-4 py-10 overflow-hidden h-[300px]">
        <img src={imageSrc} alt={productName} />
        <Button className="absolute  transition-transform  -bottom-10 w-full group-hover:bottom-0 rounded-none  ">
          <ShoppingCartIcon className="mr-4 size-4" /> Add To Cart{" "}
        </Button>
      </CardContent>
      <CardFooter className="p-2 flex flex-col">
        <h3 className="font-semibold w-full">{productName}</h3>
        <div className="flex items-center gap-6 w-full mt-2">
          <p className="text-[#db4444] font-semibold flex  gap-4 ">
            960${" "}
            {isOnSale && (
              <span className=" text-[#808080] line-through">$1160</span>
            )}
          </p>
          {showRates && (
            <div className="flex gap-1 items-center ">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star key={i} className="" />
              ))}
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
