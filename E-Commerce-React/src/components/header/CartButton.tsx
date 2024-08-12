import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { useCartItemsCount } from "@/contexts/CartItemsCountContext";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const CartButton = () => {
  const { cartItemLength } = useCartItemsCount();
  const { pathname } = useLocation();
  return (
    <Button
      className={cn(
        "relative h-fit p-1 md:p-2",
        pathname === "/cart" && "bg-designRedColor text-white rounded-full"
      )}
      variant={"ghost"}
    >
      <span
        className="bg-designRedColor text-white size-5 p-0.5 rounded-full grid place-content-center
      absolute -top-1 -right-1
      "
      >
        {cartItemLength?.length || 0}
      </span>
      <Link to={"/cart"}>
        <ShoppingCart />
      </Link>
    </Button>
  );
};

export default CartButton;
