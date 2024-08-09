import CartCoupon from "../cart/CartCoupon";
import { Button } from "../ui/button";
import CheckOutForm from "./CheckOutForm";
import CheckOutSubtotal from "./CheckOutSubtotal";

const CheckOut = () => {
  return (
    <section>
      <div className="container grid lg:grid-cols-2 gap-20">
        <CheckOutForm />
        <div className="space-y-6">
          <CheckOutSubtotal />
          <CartCoupon />
          <Button
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
