import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import MyCart from "../../Pages/MyCart/MyCart";
import Login from "../../Pages/Login/Login";
import Root from "../Root/Root";
import Errorpage from "../ErrorPage/Errorpage";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BrandCard from "../BrandCard/BrandCard";
import Details from "../Details/Details";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import { serverAddress } from "../../Data/serverAddress";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {

        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch(`${serverAddress}/carts`),
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brandcard/:brandName",
        element: <BrandCard></BrandCard>,
        loader: ({ params }) =>
          fetch(`${serverAddress}/products/brand/${params.brandName}`),
      },
      {
        path: "/details/:_id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${serverAddress}/products/id/${params._id}`),
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`${serverAddress}/products/${params.id}`),
      },
    ],
  },
]);

export default router;
