import { useCartItemsCount } from "@/contexts/CartItemsCountContext";
import CartActions from "./CartActions";
import CartCoupon from "./CartCoupon";
import CartHeaders from "./CartHeaders";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const MainCart = () => {
  const { cartItemLength } = useCartItemsCount();

  return (
    <section className="py-10 md:py-20 ">
      {cartItemLength?.length ? (
        <div className="relative container h-full">
          <CartHeaders />
          <CartItems />
          <div className="w-full flex flex-col justify-between gap-10 pb-10">
            <CartActions />
            <div className=" w-full flex flex-col lg:flex-row justify-between">
              <CartCoupon />
              <CartTotal />
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p>Cart Is Empty</p>
          <Button className="mt-4"><Link to={"/product"}>Go Shop</Link></Button>
        </div>
      )}
    </section>
  );
};

export default MainCart;
