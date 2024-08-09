import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

const CartButton = () => {
  return (
    <Button className="h-fit p-1 md:p-2" variant={"ghost"}>
      <ShoppingCart />
    </Button>
  );
};

export default CartButton;
