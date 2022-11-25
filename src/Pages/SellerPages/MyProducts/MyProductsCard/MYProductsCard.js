import { data } from 'autoprefixer';
import React, { useState } from 'react';

const MYProductsCard = ({ product, setRefresh, refresh }) => {
    const { _id, image, productName, Condition, description, productPrice, sellerName, location, purchasingPrice, todayTime, } = product;


    const handleDeletProduct = (id) => {
        console.log('delete', id)
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setRefresh(!refresh)
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
                            <div className="border text-sm rounded-lg badge-outline pl-2 py-1">Price: {productPrice} tk </div>
                            <div className="border text-sm rounded-lg badge-outline pl-2 py-1">location: {location}</div>
                            <div className="border text-sm rounded-lg badge-outline pl-2 py-1 ">Original Price:{purchasingPrice}tk</div>
                            <div className=" border text-sm rounded-lg pl-2 py-1">{todayTime}</div>
                            {/* <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div> */}
                        </div>
                        <div className='flex gap-3'>

                            <div onClick={() => handleDeletProduct(_id)} className=" cursor-pointer border  rounded-lg pl-2 py-1 w-1/2  text-center bg-gradient-to-r from-primary to-secondary text-black ">Delete Product</div>
                            <div className=" border cursor-pointer rounded-lg pl-2 py-1 w-1/2  text-center bg-gradient-to-r from-primary to-secondary text-black ">Advertise</div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default MYProductsCard;