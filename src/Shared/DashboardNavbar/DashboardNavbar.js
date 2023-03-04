import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const DashboardNavbar = () => {
    const { user, loginByEmailAndPassWord, logout } = useContext(AuthContext)

    const [Buyer, setIsBuyer] = useState(false)

    // load user by current users email
    // const { data = [] } = useQuery({
    //     queryKey: ['userRole'],
    //     queryFn: async () => {
    //         const res = await fetch(`${process.env.REACT_APP_Base_url}/users?email=${user?.email}`);
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(() => {
                navigate('/login')

            })
            .catch(err => {
                console.log(err)
            })
    }



    const navbarItems = <>


        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li >
            {/* <Link to='/categories'>
                Categories

            </Link> */}
            {/* <Link to='/'>
                Dashboard

            </Link> */}

        </li>
        {user?.uid ? <li><Link onClick={handleLogout} to='/signup'>SignOut</Link></li>

            : <>

                <li><Link to='/signup'>Signup</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </>}


        {/* {Buyer?.Buyer && <li><Link to='/'>My Products</Link></li>} */}
    </>
    return (
        <div className="navbar bg-gradient-to-r from-primary to-secondary  w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60">
                        {navbarItems}
                    </ul>
                </div>
                <NavLink className="btn btn-ghost normal-case text-xl">TV Shop</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbarItems}
                </ul>
            </div>
            <div className="navbar-end sm:hidden ">

                <label htmlFor="drawer" className="btn btn-circle swap swap-rotate">

                    {/* <!-- this hidden checkbox controls the state --> */}
                    <input type="checkbox" />

                    {/* <!-- hamburger icon --> */}
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    {/* <!-- close icon --> */}
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                </label>
            </div>
        </div>
    );
};

export default DashboardNavbar;