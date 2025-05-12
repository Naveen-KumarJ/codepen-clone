import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { ProtectedRoutes } from "./ProtectedRoutes";
import Editor from "../pages/Editor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      {
        path: "editor",
        element: (
          <ProtectedRoutes>
            <Editor />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);
