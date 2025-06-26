import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllJobs from "../pages/AllJobs";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../pages/ApplyJob";
import MyApplication from "../pages/MyApplication";
import Loader from "../Components/Loader";
import AddJob from "../pages/AddJob";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/AllJobs',
        Component: AllJobs
      },
      {
        path: '/MyApplication',
        element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>,
       
      },
      {
        path: '/AddJob',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
       
      },
      {
        path: '/job-details/:id',
        Component: JobDetails,
        loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: '/apply-job/:id',
        element: <PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>
      }

    ]
  },
]);