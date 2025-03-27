import React from "react";
import { ListingPage, ProductPage } from "../pages/index";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// Define application routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ListingPage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

export default router;
