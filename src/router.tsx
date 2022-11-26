import { createBrowserRouter, redirect } from "react-router-dom";
import { Dashboard, NotFound, SignIn } from "./pages";
import { getSession } from "./session";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <NotFound />,
    loader() {
      const session = getSession();
      const today = new Date();
      const validUntil = new Date(session?.validUntil || 0);

      if (!session?.token || today > validUntil) {
        return redirect("/auth/sign-in");
      }
    },
  },
  {
    path: "auth",
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
]);
