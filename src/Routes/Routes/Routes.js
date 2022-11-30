import { async } from "@firebase/util";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import AdminLout from "../../Layout/DashboarLayout/AdminLayout/AdminLout";
import BuyerLayout from "../../Layout/DashboarLayout/BuyerLayout/BuyerLayout";
import DashboardLayout from "../../Layout/DashboarLayout/DashboardLayout";
import DeafaultDashbardPage from "../../Layout/DashboarLayout/DefaultDashboardPage/DeafaultDashbardPage";
import SellerLayout from "../../Layout/DashboarLayout/SellerLayout/SellerLayout";
import AllBuyers from "../../Pages/Admin/AllBuyers/AllBuyers";
import Allseller from "../../Pages/Admin/AllSeller/Allseller";
import MyOrders from "../../Pages/BuyerPage/MyOrders/MyOrders";
import Dashboard from "../../Pages/DashBoard/Dashboard";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import ReportedItems from "../../Pages/ReportedItems/ReportedItems";
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
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/blogs',
                element: <Faq></Faq>
            },
            {
                path: '/category/:categoryName',
                loader: async ({ params }) => fetch(`https://tv-shop-server.vercel.app/category/${params.categoryName}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <DeafaultDashbardPage></DeafaultDashbardPage>
            },
            {
                path: '/dashboard/allBuyer',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },

            {
                path: "/dashboard/myproducts",
                element: <MyProducts></MyProducts>
            },
            {
                path: "/dashboard/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/dashboard/allSeller",
                element: <Allseller></Allseller>
            },
        ]
    },
    // {
    //     path: '/buyerDashboard',
    //     element: <BuyerLayout></BuyerLayout>,
    //     errorElement: <ErrorPage></ErrorPage>,
    //     children: [
    //         {
    //             path: "/buyerDashboard",
    //             element: <MyOrders></MyOrders>
    //         },
    //         {
    //             path: "/buyerDashboard/myOrders",
    //             element: <MyOrders></MyOrders>
    //         },
    //     ]
    // },
    // {
    //     path: '/sellerDashboard',
    //     element: <SellerLayout></SellerLayout>,
    //     children: [
    //         {
    //             path: "/sellerDashboard",
    //             element: <MyProducts></MyProducts>
    //         },
    //         {
    //             path: "/sellerDashboard/myProducts",
    //             element: <MyProducts></MyProducts>
    //         },
    //         {
    //             path: "/sellerDashboard/addProduct",
    //             element: <AddProduct></AddProduct>
    //         },
    //     ]
    // },
    // {
    //     path: '/AdminDashboard',
    //     element: <AdminLout></AdminLout>,
    //     errorElement: <ErrorPage></ErrorPage>,
    //     children: [
    //         {
    //             path: '/AdminDashboard',
    //             element: <Allseller></Allseller>
    //         },
    //         {
    //             path: '/AdminDashboard/allSeller',
    //             element: <Allseller></Allseller>
    //         },
    //         {
    //             path: '/AdminDashboard/allBuyer',
    //             element: <AllBuyers></AllBuyers>
    //         },
    //         {
    //             path: '/AdminDashboard/reportedItems',
    //             element: <ReportedItems></ReportedItems>
    //         },
    //     ]
    // }

])