import RegisterForm from "@/components/auth/register";
import { useCurrentUser } from "@/contexts/CurrentUserContext";
import { Navigate } from "react-router-dom";

const RegisterPage = () => {
  const currentUser = useCurrentUser();
  if (currentUser) {
    return <Navigate to={"/"} />;
  }
  return <RegisterForm />;
};

export default RegisterPage;
