import MainProfile from "@/components/profile";
import { useCurrentUser } from "@/contexts/CurrentUserContext";
import { Navigate } from "react-router-dom";

const ProfilePage = () => {
  const currentUser = useCurrentUser();
  if (!currentUser) {
    return <Navigate to={"/login"} />;
  }
  return <MainProfile />;
};

export default ProfilePage;
