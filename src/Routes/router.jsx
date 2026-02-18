
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Order from "../Order/Order/Order";
import MyBooking from "../pages/Dashboard/MyBooking/MyBooking";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu/Menu";
import Secret from "../pages/Shared/Secret/Secret";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'menu',
        element: <Menu />
      },
      // {
      //   path: 'order',
      //   element: <Order />
      // },
      {
        path: 'order/:category',
        element: <Order />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signUp',
        element: <SignUp />
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>

      },

    ]
  },

  {
    path: 'dashboard',
    element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [

      {
        path: 'myCart',
        element: <MyCart></MyCart>

      },
      {
        path: 'userHome',
        element: <UserHome></UserHome>

      },
      {
        path: 'myBooking',
        element: <MyBooking></MyBooking>


      }
    ]
  }
]);