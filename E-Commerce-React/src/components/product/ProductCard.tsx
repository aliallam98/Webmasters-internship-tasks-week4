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
import { ShoppingCartIcon, Star, Trash } from "lucide-react";

interface IProps {
  isOnSale: boolean;
  showRates: boolean;
}
const ProductCard = ({ isOnSale, showRates }: IProps) => {
  const { pathname } = useLocation();
  const isWishlistPage = pathname === "/wishlist";

  const onRemoveFromWishlistHandler = () => {};

  return (
    <Card className="bg-[#f5f5f5]">
      <CardHeader>
        <CardTitle className="absolute top-4 w-full">
          {isOnSale && (
            <Button
              onClick={onRemoveFromWishlistHandler}
              className="bg-[#db4444]  mr-auto"
            >
              -35%
            </Button>
          )}
          {isWishlistPage && (
            <Button
              onClick={onRemoveFromWishlistHandler}
              className="size-5 p-1 bg-white rounded-full ml-auto"
            >
              <Trash />
            </Button>
          )}
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>
          <ShoppingCartIcon className="mr-4 size-4" /> Add To Cart{" "}
        </Button>
        <p>Product Name</p>
        <p className="text-[$db4444]">
          960${" "}
          {isOnSale && (
            <span className=" text-[#808080] line-through">$1160</span>
          )}
        </p>
        {showRates && (
          <div className="flex gap-1 items-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <Star key={i} className="bg-yellow-500" />
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
