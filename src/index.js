import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import Js from "./pages/javascript";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1 style={{ color: "red" , textAlign: "center" , fontSize: 50}}>Sorry</h1>,
  },

  {
    path: "/html",
    element: <Html />,
  },

  {
    path: "/css",
    element: <Css />,
  },

  {
    path: "/js",
    element: <Js />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
