/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react";

interface wishlistContextType {
  wishlist: [] | null;
  setWishlist: React.Dispatch<React.SetStateAction<any | null>>;
}
const wishlistContext = createContext<wishlistContextType>({
  wishlist: [],
  setWishlist: () => [],
});
const WishlistContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("Current-User-Wishlist") as string) || []
  );

  return (
    <wishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(wishlistContext);

export default WishlistContextProvider;
