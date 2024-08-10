import CartActions from "./CartActions";
import CartCoupon from "./CartCoupon";
import CartHeaders from "./CartHeaders";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

const MainCart = () => {
  return (
    <section className="py-10 md:py-20 h-screen">
      <div className="relative container h-full">
        <CartHeaders />
        <CartItems />
        <div className="w-full flex flex-col justify-between gap-10 pb-10">
          <CartActions />
          <div className=" w-full flex justify-between">
            <CartCoupon />
            <CartTotal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCart;
