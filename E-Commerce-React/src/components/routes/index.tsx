import App from "@/App";
import AboutUsPage from "@/pages/AboutUsPage";
import CartPage from "@/pages/CartPage";
import CategoriesPage from "@/pages/CategoriesPage";
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
      path: "/category",
      element: <CategoriesPage/>,
    },
    {
      path: "/cart",
      element: <CartPage/>,
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