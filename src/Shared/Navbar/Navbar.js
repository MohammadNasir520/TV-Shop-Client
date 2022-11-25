import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const { user, loginByEmailAndPassWord, logout } = useContext(AuthContext)

    const [Buyer, setIsBuyer] = useState(false)

    // load user by current users email
    // const { data = [] } = useQuery({
    //     queryKey: ['userRole'],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/users?email=${user?.email}`);
    //         const data = await res.json();
    //         return data;
    //     }
    // })


    const handleLogout = () => {
        logout()
    }


    console.log(user)
    const navbarItems = <>


        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li >
            <Link to='/categories'>
                Categories

            </Link>
            <Link to='/dashboard'>
                Dashboard

            </Link>

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
                <NavLink className="btn btn-ghost normal-case text-xl">Sell Your TV</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbarItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label htmlFor="drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;