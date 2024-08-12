import { useState } from "react";
import { IProduct } from "../typings";


interface IProps {
  product :IProduct
}
const CartItem = ({product}:IProps) => {
    const [productQuantity,setProductQuantity] = useState(product?.quantity)
  return (
    <div className="flex items-center gap-12 lg:gap-40  mt-4 ">
      <div className="flex items-center gap-4 ">
        <img src={product.imageSrc} alt="product" className="size-12 lg:size-20" />
        <h3 className="hidden lg:block">{product.productName}</h3>
      </div>
      <p>${product.price}</p>
      <input type="number" name="productQuantity" value={productQuantity} onChange={(e)=>setProductQuantity(+e.target.value)}
      className="border p-1 w-[60px]"
      />
      <p>${productQuantity! * product.price}</p>
    </div>
  )
};

export default CartItem
