import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import DashboardNavbar from '../../../Shared/DashboardNavbar/DashboardNavbar';

const AdminLout = () => {
    const [isAdmin, seIstAdmin] = useState(false);
    const { user } = useContext(AuthContext)
    //loading admin 
    useEffect(() => {
        if (user?.email) {
            fetch(`https://tv-shop-server.vercel.app/users/Admin/${user?.email}`)
                .then(res => res.json())
                .then(data => {

                    seIstAdmin(data.Admin)
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
                            isAdmin && <>
                                <li><Link to='/AdminDashboard/allSeller' >All Sellers</Link></li>
                                <li><Link to='/AdminDashboard/allBuyer'> All Buyers</Link></li>
                                <li><Link to='/AdminDashboard/reportedItems'>Reported Items</Link></li>
                            </>
                        }
                    </ul>

                </div>

            </div>

        </>
    );
};

export default AdminLout;