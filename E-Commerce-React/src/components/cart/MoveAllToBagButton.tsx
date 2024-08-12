/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCartItemsCount } from "@/contexts/CartItemsCountContext";
import { Button } from "../ui/button";
import { useWishlist } from "@/contexts/WishlistContext";
import { toast } from "sonner";

const MoveAllToBagButton = () => {
  const { setCartItemLength } = useCartItemsCount();
  const { wishlist,setWishlist } = useWishlist();
  const userCart = JSON.parse(
    localStorage.getItem("Current-User-Cart") as string
  );

  const onClickHandler = () =>{
    wishlist?.forEach((item: any) => {
        const isProductAddedToCart = userCart.findIndex(
          (product: any) => product.id == item.id
        );
        if (isProductAddedToCart == -1) {
          userCart.push({
            ...item,
            quantity: 1,
          });
        }
        if (isProductAddedToCart !== -1) {
          const newProdcutQuantity = {
            ...userCart[isProductAddedToCart],
            quantity: userCart[isProductAddedToCart].quantity + 1,
          };
          userCart[isProductAddedToCart] = newProdcutQuantity;
        }
  
      });
      localStorage.setItem("Current-User-Cart", JSON.stringify(userCart));
      setCartItemLength(userCart);
      localStorage.setItem("Current-User-Wishlist", JSON.stringify([]));
      setWishlist([])
      toast.success("All Wishlist product has moved to cart.")
  }
  return (
    <Button onClick={() => onClickHandler()} variant={"outline"}>
      Move All To Bag
    </Button>
  );
};

export default MoveAllToBagButton;
