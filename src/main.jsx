import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Routers.jsx";
import AuthProvider from "./Components/Provider/AuthProvider";
import RouterUser from "./Components/Routes/RouterUser";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* <RouterProvider router={router}></RouterProvider> */}
      <RouterUser></RouterUser>
    </AuthProvider>
  </React.StrictMode>,
);
