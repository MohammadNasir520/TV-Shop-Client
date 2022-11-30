import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';


const DeafaultDashbardPage = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.email)
    const [isBuyer, setIsBuyer] = useState(false)
    console.log("buyer", isBuyer)
    const [isSeller, setIsSeller] = useState(false)
    console.log('seller', isSeller)
    const [isAdmin, seIstAdmin] = useState(false)
    console.log('isadmin', isAdmin)

    // load buyer
    useEffect(() => {
        if (user?.email) {
            fetch(`https://tv-shop-server.vercel.app/users/Buyer/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsBuyer(data.Buyer)
                })
        }
    }, [user?.email])



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



    return (
        <div>
            {
                isSeller && <Navigate to='/dashboard/myproducts'></Navigate>
            }
            {
                isBuyer && <Navigate to='/dashboard/myorders'></Navigate>
            }
            {
                isAdmin && <Navigate to='/dashboard/allseller'></Navigate>
            }
        </div>
    );
};

export default DeafaultDashbardPage;