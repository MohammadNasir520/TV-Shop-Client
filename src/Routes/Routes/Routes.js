import { async } from "@firebase/util";
import DashboardLayout from "../../Layout/DashboarLayout/DashboardLayout";
import AllBuyers from "../../Pages/Admin/AllBuyers/AllBuyers";
import Allseller from "../../Pages/Admin/AllSeller/Allseller";
import Dashboard from "../../Pages/DashBoard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import AddProduct from "../../Pages/SellerPages/AddProduct/AddProduct";
import MyProducts from "../../Pages/SellerPages/MyProducts/MyProducts";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/category/:categoryName',
                loader: async ({ params }) => fetch(`http://localhost:5000/category/${params.categoryName}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },

            {
                path: '/dashboard/myProducts',
                // loader: async ({ params }) => fetch(`http://localhost:5000/category/${params.categoryName}`),
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allSeller',
                element: <Allseller></Allseller>
            }
        ]
    }
])