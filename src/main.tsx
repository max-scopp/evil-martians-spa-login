import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";

import { RouterProvider } from "react-router-dom";
import { AcmeSessionContextProvider } from "./session/contexts/session.context";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AcmeSessionContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AcmeSessionContextProvider>
  </React.StrictMode>
);
