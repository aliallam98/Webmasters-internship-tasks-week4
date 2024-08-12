import { useRef } from "react";
import CartCoupon from "../cart/CartCoupon";
import { Button } from "../ui/button";
import CheckOutForm from "./CheckOutForm";
import CheckOutSubtotal from "./CheckOutSubtotal";

const CheckOut = () => {
  const formButtonRef = useRef<HTMLButtonElement>(null);
  const onclickHandler = () => {
    formButtonRef.current?.click()
  };

  return (
    <section>
      <div className="container grid lg:grid-cols-2 gap-20">
        <CheckOutForm formButtonRef={formButtonRef} />
        <div className="space-y-6">
          <CheckOutSubtotal />
          <CartCoupon />
          <Button
            onClick={onclickHandler}
            className="bg-designRedColor hover:bg-designRedColor/90 w-[30%] "
            type="submit"
          >
            Place Order
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
