import { useCartItemsCount } from "@/contexts/CartItemsCountContext";
import CartItem from "./CartItem";

const CartItems = () => {
  const { cartItemLength } = useCartItemsCount();
  console.log(cartItemLength);
  

  return (
    <div className="space-y-4 h-[300px] overflow-y-auto">
      {cartItemLength?.map((item) => (
        <CartItem product={item}  />
      ))}
    </div>
  );
};

export default CartItems;
