import { useCartItemsCount } from "@/contexts/CartItemsCountContext";
import { IProduct } from "../typings";

const CheckOutSubtotal = () => {
  const {cartItemLength} = useCartItemsCount()
  const total = cartItemLength?.reduce((acc,current:IProduct)=> acc + current.quantity! * current.price , 0) || 0
  return (
    <div className="space-y-4">
      
      <div>
        <span>Subtotal:</span><span>${total}</span>
      </div>
      <div>
        <span>Shipping:</span><span>${total > 0 && 70 || 0}</span>
      </div>
      <div>
        <span>Total:</span><span>${total + 70}</span>
      </div>

    </div>
  )
};

export default CheckOutSubtotal
