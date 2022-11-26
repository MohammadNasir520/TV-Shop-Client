import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)

    const [isBuyer, setIsBuyer] = useState(false)
    const [isSeller, setIsSeller] = useState(false)
    const [isAdmin, seIstAdmin] = useState(false)

    console.log(isAdmin)
    // load buyer
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/Buyer/${user?.email}`)
                .then(res => res.json())
                .then(data => {

                    setIsBuyer(data.Buyer)
                })
        }
    }, [user?.email])

    //load seller
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/Seller/${user?.email}`)
                .then(res => res.json())
                .then(data => {

                    setIsSeller(data.Seller)
                })
        }
    }, [user?.email])

    //loading admin 
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/Admin/${user?.email}`)
                .then(res => res.json())
                .then(data => {

                    seIstAdmin(data.Admin)
                })
        }
    }, [user?.email])

    return (
        <>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {
                            isBuyer && <>
                                <li><Link>My Orders</Link></li>
                                <li><Link>My Wish List</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/myProducts' >My Product</Link></li>
                                <li><Link>My Buyers</Link></li>
                                <li><Link to='/dashboard/addProduct'>Add a Product</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allSeller' >All Sellers</Link></li>
                                <li><Link to='/dashboard/allBuyer'> All Buyers</Link></li>
                                <li><Link to='/dashboard/addProduct'>Reported Items</Link></li>
                            </>
                        }
                    </ul>

                </div>

            </div>

        </>
    );
};

export default DashboardLayout;