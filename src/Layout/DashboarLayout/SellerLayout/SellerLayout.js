import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import DashboardNavbar from '../../../Shared/DashboardNavbar/DashboardNavbar';

const SellerLayout = () => {
    const { user } = useContext(AuthContext)
    const [isSeller, setIsSeller] = useState(false)
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
    return (
        <>
            <DashboardNavbar></DashboardNavbar>

            <div className="drawer drawer-mobile">
                <input id="drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        {
                            isSeller && <>
                                <li><Link to='/sellerDashboard/myProducts' >My Product</Link></li>
                                {/* <li><Link>My Buyers</Link></li> */}
                                <li><Link to='/sellerDashboard/addProduct'>Add a Product</Link></li>
                            </>
                        }

                    </ul>

                </div>

            </div>

        </>
    );
};

export default SellerLayout;