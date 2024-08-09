import App from "@/App";
import AboutUsPage from "@/pages/AboutUsPage";
import ContactPage from "@/pages/ContactPage";
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
  ]);


  export default router