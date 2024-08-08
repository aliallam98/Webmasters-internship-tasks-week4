import { Button } from "../ui/button";

const CartTotal = () => {
  return (
    <div className="w-[470px] h-[324px] border border-black p-4 flex flex-col justify-around">
      <h2>Cart Total</h2>
      <div className="flex items-center justify-between border-b py-4">
        <span>Subtotal:</span> <span>xxx</span>
      </div>
      <div className="flex items-center justify-between border-b py-4">
        <span>Shipping:</span> <span>xxx</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Total:</span> <span>xxx</span>
      </div>
      <Button
        className="bg-designRedColor hover:bg-designRedColor/90 w-[60%] block mx-auto"
        type="submit"
      >
        Process to checkout
      </Button>
    </div>
  );
};

export default CartTotal;
