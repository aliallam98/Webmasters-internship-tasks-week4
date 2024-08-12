import LoginForm from "@/components/auth/login";
import { useCurrentUser } from "@/contexts/CurrentUserContext";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const currentUser = useCurrentUser();
  if (currentUser) {
    return <Navigate to={"/"} />;
  }
  return <LoginForm />;
};

export default LoginPage;
