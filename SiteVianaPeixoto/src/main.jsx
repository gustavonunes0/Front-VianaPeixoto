import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Sobre from "./Sobre";

const router = createBrowserRouter([
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "*",
    element: <Sobre />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
