
import DashboardLayout from "../../Layout/DashboarLayout/DashboardLayout";
import DeafaultDashbardPage from "../../Layout/DashboarLayout/DefaultDashboardPage/DeafaultDashbardPage";
import AllBuyers from "../../Pages/Admin/AllBuyers/AllBuyers";
import Allseller from "../../Pages/Admin/AllSeller/Allseller";
import MyOrders from "../../Pages/BuyerPage/MyOrders/MyOrders";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Payment from "../../Pages/Payment/Payment";
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
                loader: async ({ params }) => fetch(`${process.env.REACT_APP_Base_url}/category/${params.categoryName}`),
                element: <Products></Products>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
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
            {
                path: "/dashboard/payment/:id",
                loader: ({ params }) => fetch(`${process.env.REACT_APP_Base_url}/bookingProduct/${params.id}`),
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
        ]
    },
])