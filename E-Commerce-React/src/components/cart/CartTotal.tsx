import { useCartItemsCount } from "@/contexts/CartItemsCountContext";
import { Button } from "../ui/button";
import { IProduct } from "../typings";
import { Link } from "react-router-dom";

const CartTotal = () => {
  const {cartItemLength} = useCartItemsCount()
  const total = cartItemLength?.reduce((acc,current:IProduct)=> acc + current.quantity! * current.price , 0) || 0
  return (
    <div className="w-full  lg:w-[470px] lg:h-[324px] border border-black p-4 flex flex-col justify-around">
      <h2>Cart Total</h2>
      <div className="flex items-center justify-between border-b py-4">
        <span>Subtotal:</span> <span>${total}</span>
      </div>
      <div className="flex items-center justify-between border-b py-4">
        <span>Shipping:</span> <span>${total > 0 && 70 || 0}</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Total:</span> <span>${total + 70}</span>
      </div>
      <Button
        className="bg-designRedColor hover:bg-designRedColor/90 w-[60%] block mx-auto"
        type="submit"
      >
        <Link className="w-full h-full" to={"/checkout"}>Process to checkout</Link>
      </Button>
    </div>
  );
};

export default CartTotal;
