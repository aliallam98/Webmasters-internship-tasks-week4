/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, useContext, useState } from "react";


interface CartItemsCountContextType {
  cartItemLength: [] | null; 
  setCartItemLength: React.Dispatch<React.SetStateAction<any | null>>;
}
const CartItemsCountContext = createContext<CartItemsCountContextType>({
  cartItemLength : [],
  setCartItemLength:()=> []
})
const CartItemsCountProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItemLength,setCartItemLength] = useState(JSON.parse(localStorage.getItem("Current-User-Cart") as string) || null)

  return (
    <CartItemsCountContext.Provider value={{cartItemLength,setCartItemLength}}>
      {children}
    </CartItemsCountContext.Provider >
  )
};
export const  useCartItemsCount = ()=> useContext(CartItemsCountContext)
export default CartItemsCountProvider
