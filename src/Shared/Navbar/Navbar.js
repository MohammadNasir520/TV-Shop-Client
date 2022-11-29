import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import icon from '../../images/tv.png';
const Navbar = () => {
    const { user, loginByEmailAndPassWord, logout } = useContext(AuthContext)



    // load user by current users email
    // const { data = [] } = useQuery({
    //     queryKey: ['userRole'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://tv-shop-server.vercel.app/users?email=${user?.email}`);
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    // window.location.reload();


    const [isBuyer, setIsBuyer] = useState(false)
    console.log("buyer", isBuyer)
    const [isSeller, setIsSeller] = useState(false)
    console.log('seller', isSeller)
    const [isAdmin, seIstAdmin] = useState(false)
    console.log('isadmin', isAdmin)

    // // load buyer
    // useEffect(() => {
    //     if (user?.email) {
    //         fetch(`https://tv-shop-server.vercel.app/users/Buyer/${user?.email}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 setIsBuyer(data.Buyer)
    //             })
    //     }
    // }, [user?.email])


    //load seller
    useEffect(() => {
        if (user?.email) {
            fetch(`https://tv-shop-server.vercel.app/users/Seller/${user?.email}`)
                .then(res => res.json())
                .then(data => {

                    setIsSeller(data.Seller)
                })
        }
    }, [user?.email])

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


    console.log(user)
    const navbarItems = <>


        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {


            <li >

                <>

                    {

                        <Link to='/dashboard'>
                            Dashboard

                        </Link>}


                    {/* {isBuyer &&
                        <Link to='/buyerDashboard'>
                            BuyerDashboard

                        </Link>
                    } */}
                    {/* {isSeller &&
                        <Link to='/sellerDashboard'>
                            SellerDashboard

                        </Link>
                    } */}
                    {/* {isAdmin &&
                        <Link to='/AdminDashboard'>
                            AdminDashboard

                        </Link>
                    } */}
                </>

            </li>
        }

        {user?.uid ? <li><Link onClick={handleLogout} to='/signup'>SignOut</Link></li>

            : <>

                <li><Link to='/signup'>Signup</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </>}


        {/* {Buyer?.Buyer && <li><Link to='/'>My Products</Link></li>} */}
    </>



    window.onload = function () {
        if (!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }


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
                <img className='h-8 w-8 rounded' src={icon} alt="icon" />
                <NavLink className="btn btn-ghost normal-case text-xl">TV Shop</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbarItems}
                </ul>
            </div>
            <div className="navbar-end">

            </div>

        </div>
    );
};

export default Navbar;