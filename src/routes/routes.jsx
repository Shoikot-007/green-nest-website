import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import PlantDetails from "../pages/PlantDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/plants",
        element: <Plants />,
      },
      {
        path: "/plant/:id",
        element: (
          <PrivateRoute>
            <PlantDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        )
      }
    ],
  },
]);

export default router;