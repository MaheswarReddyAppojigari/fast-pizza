import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {index:true,element:<Home/>},
      { path: "menu", element: <Menu /> },
      { path: "cart", element: <Cart /> },
      { path: "cart", element: <Cart /> },
      { path: "order/new", element: <CreateOrder /> },
      { path: "order/:orderId", element: <Order /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
