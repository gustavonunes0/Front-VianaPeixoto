import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import Equipe from "./Equipe";
import Contato from "./ContatoScreen";
import Especialidades from "./Especialidades";
import Dashboard from "./Dashboard";

const router = createBrowserRouter([
  { path: "*", element: <Home /> },
  { path: "/sobre", element: <Sobre /> },
  { path: "/equipe", element: <Equipe /> },
  { path: "/especialidades", element: <Especialidades /> },
  { path: "/imprensa", element: <Sobre /> },
  { path: "/contato", element: <Contato /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
