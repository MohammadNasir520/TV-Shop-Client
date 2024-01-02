import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteBookingById } from '../../../api/BookingsApi';
import { deleteUserById } from '../../../api/usersApi';
import { AuthContext } from '../../../Context/AuthProvider';
import Spinner from '../../../Shared/Spinner/Spinner';
import MyOrdersCard from '../MyOrdersCard/MyOrdersCard';

const MyOrders = () => {
    const { user, } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    const [myorders, setMyOrders] = useState([])


    useEffect(() => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_Base_url}/bookedProduct/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyOrders(data)
                setLoading(false)
            })

    }, [user?.email])

    const handleDeleteBookings = order => {
        setLoading(true)
        console.log(order);
        deleteBookingById(order._id)
            .then(data => {
                console.log(data);
                toast.error(`${order.productName} deleted`)

                setLoading(false)
                const existingOrder = myorders.filter((singleOrder) => singleOrder._id !== order._id)
                setMyOrders(existingOrder)
            })
            .catch(error => {
                console.log(error);
            })

    }
    if (loading) {
        return <Spinner></Spinner>
    }
    return (


        <>
            {
                myorders.length === 0 ?
                    <div
                        className='h-screen flex justify-center items-center text-xl text-slate-300 text-center'>
                        <p>Your haven't booked any product yet <br /> Please booked first</p>
                    </div>
                    :

                    <table className="text-left w-full ">
                        <thead className="bg-slate-800 flex text-white w-full">
                            <tr className="flex w-full mb-4">

                                <th className="p-2 w-1/4">serial</th>
                                <th className="p-2 w-1/4">TV Name</th>
                                <th className="p-2 w-1/4">Price</th>
                                <th className="p-2 w-1/4">pay</th>
                                <th className="p-2 w-1/4">cancel</th>
                            </tr>
                        </thead>

                        <tbody className="bg-grey-light flex flex-col items-center justify-between w-full " >
                            {myorders?.map((order, index) => <tr
                                className={`px-2 flex w-full my-1  bg-gradient-to-r from-[#164e63] to-[#0c4a6e] text-slate-50 font-medium shadow-lg shadow-slate-900 `}
                                key={index}

                            >

                                <td className="p-2 w-1/4">{index + 1}</td>
                                <td className="p-2 w-1/4">{order.productName}</td>
                                <td className="p-2 w-1/4">{order.productPrice}</td>

                                <td className="p-2 w-1/4">
                                    {
                                        order?.paid ? <button className="btn glass btn-sm">Paid</button>
                                            :

                                            <Link
                                                to={`/dashboard/payment/${order._id}`}>

                                                <button className="btn glass btn-sm">Pay</button>

                                            </Link>
                                    }

                                </td>
                                <td
                                    onClick={() => handleDeleteBookings(order)}
                                    className="p-2 w-1/4">
                                    <button
                                        className="btn btn-outline btn-error btn-sm">
                                        cancel
                                    </button>
                                </td>
                            </tr>)

                            }

                        </tbody>
                    </table>
            }
        </>
    );
};

export default MyOrders;
