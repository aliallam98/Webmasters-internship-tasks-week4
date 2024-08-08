import CartActions from "./CartActions";
import CartCoupon from "./CartCoupon";
import CartHeaders from "./CartHeaders";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const MainCart = () => {
  return (
    <section className="py-10 md:py-20 h-screen">
      <div className="relative container h-full">
        <CartHeaders />
        <CartItem
          productImageSrc=""
          productName="productName"
          productPrice={999}
        />
        <div className="absolute bottom-0 w-full flex flex-col justify-between gap-10">
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
