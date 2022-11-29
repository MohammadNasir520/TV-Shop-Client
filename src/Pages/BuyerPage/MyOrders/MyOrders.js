import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import ProductCard from '../../../Shared/ProductCard/ProductCard';
import MyOrdersCard from '../MyOrdersCard/MyOrdersCard';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [myorders, setMyOrders] = useState([])
    console.log(myorders)
    useEffect(() => {
        fetch(`https://tv-shop-server.vercel.app/bookedProduct/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyOrders(data)
            })

    }, [user?.email])
    return (
        <div>



            <h1 className='text-center text-white text-2xl my-2'>Your Booked Products</h1>
            <div className='grid lg:grid-cols-2 '>
                {
                    myorders.map(bookedProduct => <MyOrdersCard
                        bookedProduct={bookedProduct}
                    ></MyOrdersCard>)
                }
            </div>
        </div>
    );
};

export default MyOrders;