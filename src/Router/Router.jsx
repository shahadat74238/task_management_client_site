import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Components/MainLayout/Layout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/Error/ErrorPage";
import PrivetRoute from "./PrivetRouter";
import Contact from "../Pages/Contact/Contact";
import AllTask from "../Pages/AllTask/AllTask";
import PostTask from "../Pages/PostTask/PostTask";
import PreviousTask from "../Pages/PreviousTask/PreviousTask";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivetRoute>
        <Dashboard />
      </PrivetRoute>
    ),

    children: [
      {
        path: "allTask",
        element: <AllTask />,
      },
      {
        path: "post",
       element: <PostTask />
      },
      {
        path: "previous",
       element: <PreviousTask />
      },
    ],
  },
]);

export default router;
