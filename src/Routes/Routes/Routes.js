import { async } from "@firebase/util";
import DashboardLayout from "../../Layout/DashboarLayout/DashboardLayout";
import Dashboard from "../../Pages/DashBoard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import AddProduct from "../../Pages/SellerPages/AddProduct/AddProduct";
import SignUp from "../../Pages/SignUp/SignUp";

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
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/category/:categoryName',
                loader: async ({ params }) => fetch(`http://localhost:5000/category/${params.categoryName}`),
                element: <Products></Products>
            },
        ]
    }
])