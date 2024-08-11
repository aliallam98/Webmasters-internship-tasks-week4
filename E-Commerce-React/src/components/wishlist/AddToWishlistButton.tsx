/* eslint-disable @typescript-eslint/no-explicit-any */
import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import products from "../../constants/Prodcuts.json";
import { toast } from "sonner";
import { useWishlist } from "@/contexts/WishlistContext";
import { cn } from "@/lib/utils";

const AddToWishlistButton = ({ id }: { id: number }) => {
  const { wishlist, setWishlist } = useWishlist();
  const productToAdd = products.find((product: any) => product.id == id);
  const isProductAddedToWishlist = wishlist!.findIndex(
    (product: any) => product.id == id
  );


  const wishlistHandler = (id: number) => {
  console.log(isProductAddedToWishlist);

    if (productToAdd && isProductAddedToWishlist == -1) {
      setWishlist((prev: any) => [...prev, productToAdd]);
      localStorage.setItem("Current-User-Wishlist", JSON.stringify([...wishlist!,productToAdd]));
      toast.success(`${productToAdd.productName} added to your wishlist`);
    }

    if (productToAdd && isProductAddedToWishlist !== -1) {
      const newWishlist = wishlist!.filter((product: any) => product.id !== id);
      localStorage.setItem(
        "Current-User-Wishlist",
        JSON.stringify(newWishlist)
      );
      toast.success(`${productToAdd?.productName} removed to your wishlist`);
      setWishlist(newWishlist);
    }
  };
  return (
    <Button
      onClick={() => wishlistHandler(id)}
      className={cn("size-10 grid place-content-center bg-white rounded-full  ml-auto text-black hover:bg-secondary hover:text-black",
        isProductAddedToWishlist !== -1 && "bg-designRedColor  text-white"
      )}
    >
      <Heart />
    </Button>
  );
};

export default AddToWishlistButton;
