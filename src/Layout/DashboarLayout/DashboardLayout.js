
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { getRoleByEmail } from '../../api/usersApi';
import { AuthContext } from '../../Context/AuthProvider';
import DashboardNavbar from '../../Shared/DashboardNavbar/DashboardNavbar';
import Spinner from '../../Shared/Spinner/Spinner';
import AdminSidNavLink from './SideNavLink/AdminSidNavLink';
import BuyerSideNavLink from './SideNavLink/BuyerSideNavLink';
import SellerSideNavLink from './SideNavLink/SellerSideNavLink';

const DashboardLayout = () => {

    const { user, loading, logout } = useContext(AuthContext)
    const [role, setRole] = useState('')



    useEffect(() => {
        getRoleByEmail(user?.email)
            .then(data => {

                setRole(data)
            })
    }, [user?.email])


    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <>
            {/* <div className='md:hidden'>

                <DashboardNavbar></DashboardNavbar>
            </div> */}

            {/* <Navbar></Navbar> */}
            <div className="drawer drawer-mobile">
                <input id="drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">

                    <label htmlFor="drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 bg-base-100 text-base-content">

                        {/* <!-- Sidebar content here --> */}


                        {/* users name and picture */}
                        <div className="flex flex-col items-center my-6 -mx-2">
                            <img className="object-cover w-24 h-24 mx-2 rounded-full" src={user?.photoURL} alt="Users Pic" />
                            <h4 className="mx-2 mt-2 font-bold text-2xl text-black ">{user?.displayName}</h4>
                            <p className="mx-2 mt-1 text-xl font-medium text-black ">{user?.email}</p>
                        </div>

                        {
                            role === 'Buyer' && <BuyerSideNavLink></BuyerSideNavLink>
                        }
                        {
                            role === 'Seller' && <div>

                                <SellerSideNavLink></SellerSideNavLink>
                                <BuyerSideNavLink></BuyerSideNavLink>
                            </div>
                        }
                        {
                            role === 'Admin' && <AdminSidNavLink></AdminSidNavLink>

                        }

                        <div className='flex justify-between absolute bottom-1 gap-24   '>
                            <NavLink to={'/'}>
                                <div className='font-bold w-10 text-center cursor-pointer  hover:bg-slate-300'>
                                    <svg className="w-6 h-6 mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    <p className=''> Home</p>
                                </div>
                            </NavLink>

                            <NavLink
                                onClick={logout}
                                to={'/login'}
                            >
                                <div className='font-bold w-14 text-center cursor-pointer hover:bg-slate-300'>
                                    <svg className="w-6 h-6 mx-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                    <p>LogOut</p>
                                </div>
                            </NavLink>

                        </div>
                    </ul>

                </div>

            </div>

        </>
    );
};

export default DashboardLayout;