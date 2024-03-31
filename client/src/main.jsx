import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateRequest from "./components/CreateRequest.jsx";
import GuestLayout from "./layouts/GuestLayout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children:[
      {
        path:'/',
        element:<App/>
      },
      {
        path: "/create",
        element: <CreateRequest />,
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
