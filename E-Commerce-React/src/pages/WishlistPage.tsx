import MainWishList from "@/components/wishlist";
import { useCurrentUser } from "@/contexts/CurrentUserContext";
import { Navigate } from "react-router-dom";

const WishlistPage = () => {
  const currentUser = useCurrentUser();
  if (!currentUser) {
    return <Navigate to={"/login"} />;
  }
  return <MainWishList />;
};

export default WishlistPage;
