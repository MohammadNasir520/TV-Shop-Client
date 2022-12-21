import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const BookingProduct = useLoaderData();
    console.log(BookingProduct)
    return (
        <div>
            <p className='text-white text-center text-3xl my-10'>Payment</p>
            <div>


                <div className="card  lg:w-80   bg-gradient-to-r from-[#164e63] to-[#0c4a6e] text-slate-50 font-medium shadow-xl mx-auto">
                    {/* <figure><img src={BookingProduct?.image} className='w-full h-full' alt="Product pic" /></figure> */}
                    <div className="card-body">
                        <h2 className="card-title">
                            {
                                BookingProduct?.productName
                            }
                            {/* <div className="badge badge-secondary">used</div> */}
                        </h2>
                        <p>Price: {BookingProduct?.productPrice} tk</p>
                        <div className="card-actions justify-end">
                            {/* <div className="badge badge-outline">Fashion</div> */}
                            {/* <div className="badge badge-outline">Products</div> */}
                        </div>

                        <button
                            className=" border  rounded-lg pl-2 py-1 w-1/2 mx-auto text-center bg-gradient-to-r from-primary to-secondary text-black "

                        > Pay
                        </button>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Payment;