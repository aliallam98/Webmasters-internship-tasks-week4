/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import products from "../../constants/Prodcuts.json";
import { toast } from "sonner";
import { useCartItemsCount } from "@/contexts/CartItemsCountContext";
const AddToCartButton = ({ productId }: { productId: number }) => {
  const { setCartItemLength } = useCartItemsCount();

  const onAddToCartHandler = (id: number) => {
    const userCart = JSON.parse(
      localStorage.getItem("Current-User-Cart") as string
    );
    const productToAdd = products.find((product: any) => product.id == id);
    const isProductAddedToCart = userCart.findIndex(
      (product: any) => product.id == id
    );
    
    if (productToAdd && isProductAddedToCart == -1 ) {
      userCart.push({
        ...productToAdd,
        quantity: 1,
      });
      localStorage.setItem("Current-User-Cart", JSON.stringify(userCart));
      toast.success(`${productToAdd.productName} added to your cart`);
      setCartItemLength(userCart);
    }
    if (productToAdd && isProductAddedToCart !== -1 ) {
      
      const newProdcutQuantity = {
        ...userCart[isProductAddedToCart],
        quantity: userCart[isProductAddedToCart].quantity + 1,
      };
      userCart[isProductAddedToCart] = newProdcutQuantity
      localStorage.setItem("Current-User-Cart", JSON.stringify(userCart));
    }
  };
  return (
    <Button
      onClick={() => onAddToCartHandler(productId)}
      className="absolute  transition-transform  -bottom-10 w-full group-hover:bottom-0 rounded-none  "
    >
      <ShoppingCartIcon className="mr-4 size-4" /> Add To Cart{" "}
    </Button>
  );
};

export default AddToCartButton;
