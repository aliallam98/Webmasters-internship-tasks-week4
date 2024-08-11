/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Eye, Star, Trash } from "lucide-react";
import { useCurrentUser } from "@/contexts/CurrentUserContext";
import AddToCartButton from "../cart/AddToCartButton";
import AddToWishlistButton from "../wishlist/AddToWishlistButton";

interface IProps {
  isOnSale?: boolean;
  showRates?: boolean;
  productName?: string;
  imageSrc?: string;
  productId?: number;
}
const ProductCard = ({
  isOnSale,
  showRates,
  productName,
  imageSrc,
  productId,
}: IProps) => {
  const { pathname } = useLocation();
  const isWishlistPage = pathname === "/wishlist";
  const isUserLoggedIn = !!useCurrentUser();


  return (
    <Card className="relative group border-none rounded-md">
      <CardHeader className="absolute  w-full">
        <CardTitle className="absolute top-4  w-full z-50">
          {isOnSale && (
            <Button
              className="bg-[#db4444] block mr-auto"
            >
              -35%
            </Button>
          )}
          {isWishlistPage ? (
            <Button
              className="size-5 p-1 bg-white rounded-full block ml-auto hover:bg-transparent"
            >
              <Trash />
            </Button>
          ) : (
            <div className="absolute right-10 top-4 space-y-2">
              {isUserLoggedIn && <AddToWishlistButton id={productId!} />}
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
        <AddToCartButton productId={productId!} />
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
