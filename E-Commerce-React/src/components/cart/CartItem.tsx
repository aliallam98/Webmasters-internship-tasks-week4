import { useState } from "react";


interface IProps {
    productImageSrc : string
    productName : string
    productPrice : number
}
const CartItem = ({productName,productImageSrc,productPrice}:IProps) => {
    const [productQuantity,setProductQuantity] = useState(0)
  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-4">
        <img src={productImageSrc} alt="product" />
        <h3>{productName}</h3>
      </div>
      <p>{productPrice}</p>
      <input type="number" name="productQuantity" value={productQuantity} onChange={(e)=>setProductQuantity(+e.target.value)}
      className="border p-1 w-[60px]"
      />
      <p>{productQuantity * productPrice}</p>
    </div>
  )
};

export default CartItem
