import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/routes/index.tsx";
import CurrentUserProvider from "./contexts/CurrentUserContext.tsx";
import { Toaster } from "sonner";
import CartItemsCountProvider from "./contexts/CartItemsCountContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CurrentUserProvider>
      <CartItemsCountProvider>
        <Toaster />
        <RouterProvider router={router} />
      </CartItemsCountProvider>
    </CurrentUserProvider>
  </React.StrictMode>
);
