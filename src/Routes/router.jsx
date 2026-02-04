
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../Order/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home/>
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

    ]
  },
]);