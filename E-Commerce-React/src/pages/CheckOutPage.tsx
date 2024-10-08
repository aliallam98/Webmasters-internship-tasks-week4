import CheckOut from "@/components/checkout";
import { useCurrentUser } from "@/contexts/CurrentUserContext";
import { Navigate } from "react-router-dom";

const CheckOutPage = () => {
  const currentUser = useCurrentUser();
  if (!currentUser) {
    return <Navigate to={"/login"} />;
  }
  return <CheckOut />;
};

export default CheckOutPage;
