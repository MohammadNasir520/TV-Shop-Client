import React, { useEffect, useState } from 'react';
import ProductCard from '../../../Shared/ProductCard/ProductCard';
import MyOrdersCard from '../MyOrdersCard/MyOrdersCard';

const MyOrders = () => {
    const [myorders, setMyOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bookedProduct')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyOrders(data)
            })

    }, [])
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