import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllJobs from "../pages/AllJobs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
           path:'/register',
           Component:Register
        },
        {
           path:'/login',
           Component:Login
        },
        {
          path: '/AllJobs',
          Component: AllJobs
        }

    ]
  },
]);