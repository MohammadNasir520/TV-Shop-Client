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
            {
                myorders.length === 0 ? <div><p className='text-white text-center text-3xl mt-10'>You have no bokked product.... <br /> Please booke  products</p></div>
                    :
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

            }
        </div>
    );
};

export default MyOrders;
