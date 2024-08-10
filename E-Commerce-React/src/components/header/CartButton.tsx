import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { useCartItemsCount } from "@/contexts/CartItemsCountContext";
import { Link } from "react-router-dom";

const CartButton = () => {
  const { cartItemLength } = useCartItemsCount();
  return (
    <Button className="relative h-fit p-1 md:p-2" variant={"ghost"}>
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
