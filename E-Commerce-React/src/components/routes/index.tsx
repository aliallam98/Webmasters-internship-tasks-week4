import App from "@/App";
import AboutUsPage from "@/pages/AboutUsPage";
import ContactPage from "@/pages/ContactPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/contact",
      element: <ContactPage/>,
    },
    {
      path: "/about",
      element: <AboutUsPage/>,
    },
    {
      path: "/register",
      element: <RegisterPage/>,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
  ]);


  export default router