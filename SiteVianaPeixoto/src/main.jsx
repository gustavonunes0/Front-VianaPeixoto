import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";

const router = createBrowserRouter([
  { path: "*", element: <Home /> },
  { path: "/sobre", element: <Sobre /> },
  { path: "/equipe", element: <Sobre /> },
  { path: "/especialidades", element: <Sobre /> },
  { path: "/imprensa", element: <Sobre /> },
  { path: "/contato", element: <Sobre /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
