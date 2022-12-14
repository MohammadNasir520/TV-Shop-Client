import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const MYProductsCard = ({ product, setRefresh, refresh }) => {
    const { _id, image, productName, Condition, description, productPrice, sellerName, location, purchasingPrice, todayTime, } = product;

    // seller product delete functionaliy
    const handleDeletProduct = (id) => {
        console.log('delete', id)
        fetch(`https://tv-shop-server.vercel.app/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setRefresh(!refresh)
                    toast.error('product delete successfully')
                }
            })

    }

    // seller product advertise items
    const handleAdvertiseProducts = id => {
        console.log('advertised', id)
        fetch(`https://tv-shop-server.vercel.app/productss/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Tv Advertised successfully')
                }
            })
    }

    return (
        <div>

            <div className='md:w-full lg:w-[420px]'>
                <div className={`card  bg-base-100 shadow-xl bg-gradient-to-r from-[#164e63] to-[#0c4a6e] text-slate-50 font-medium`}>
                    <figure><img className='h-52' src={image} alt="TV" /></figure>
                    <div className="card-body">
                        <h2 className="card-title  text-white">
                            TV Name: {productName}

                        </h2>
                        <div className="badge badge-primary ">Condition:{Condition}</div>
                        <h4>Seller: {sellerName}</h4>
                        <p className='font-normal'>{description}</p>
                        <div className="card-actions justify-start grid grid-cols-2 ">
                            <div className="border text-sm rounded-lg badge-outline pl-2 py-1">Resale Price: {productPrice} tk </div>
                            <div className="border text-sm rounded-lg badge-outline pl-2 py-1">location: {location}</div>
                            <div className="border text-sm rounded-lg badge-outline pl-2 py-1 ">Original Price:{purchasingPrice}tk</div>
                            <div className=" border text-sm rounded-lg pl-2 py-1">{todayTime}</div>
                            {/* <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div> */}
                        </div>
                        <div className='flex gap-3'>

                            <div onClick={() => handleDeletProduct(_id)} className=" cursor-pointer border  rounded-lg pl-2 py-1 w-1/2  text-center bg-gradient-to-r from-primary to-secondary text-black ">Delete Product</div>
                            <div onClick={() => handleAdvertiseProducts(_id)} className=" border cursor-pointer rounded-lg pl-2 py-1 w-1/2  text-center bg-gradient-to-r from-primary to-secondary text-black ">Advertise</div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default MYProductsCard;