import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContextProvider } from "./AppContext";

// import './index.css'
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";
import { ErrorPage } from "./pages/ErrorPage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import NewBookForm from "./pages/NewBookForm";
import Detail from "./pages/Detail";
import Dummy from "./pages/Dummy";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/admin/new",
        element: <NewBookForm />,
      },
      {
        path: "/shop/products",
        element: <Shop />,
        children: [
          {
            index: true,
            element: <Dummy />,
          },
          {
            path: "/shop/products/:bookId",
            element: <Detail />,
          },
        ],
      },
      {
        path: "/shop/cart",
        element: <Cart />,
      },
      {
        path: "/shop/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ContextProvider>
  </StrictMode>
);
