import App from "@/App";
import AboutUsPage from "@/pages/AboutUsPage";
import CartPage from "@/pages/CartPage";
import CategoriesPage from "@/pages/CategoriesPage";
import CheckOutPage from "@/pages/CheckOutPage";
import ContactPage from "@/pages/ContactPage";
import LoginPage from "@/pages/LoginPage";
import ProductsPage from "@/pages/ProductsPage";
import RegisterPage from "@/pages/RegisterPage";
import WishlistPage from "@/pages/WishlistPage";
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
      path: "/product",
      element: <ProductsPage/>,
    },
    {
      path: "/cart",
      element: <CartPage/>,
    },
    {
      path: "/checkout",
      element: <CheckOutPage/>,
    },
    {
      path: "/wishlist",
      element: <WishlistPage/>,
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