import React, { useEffect, useState } from 'react';
import Modal from '../../Components/Modal';

const ProductCard = ({ product, setProduct }) => {

    const { image, productName, Condition, description, productPrice, sellerName, location, purchasingPrice, todayTime, usedYear } = product;



    // checking seller verification 
    useEffect(() => {
        fetch(``)
    }, [])

    return (
        <div className='md:w-full lg:w-[420px]'>
            <div className={`card  bg-base-100 shadow-2xl bg-gradient-to-r from-[#164e63] to-[#0c4a6e] text-slate-50 font-medium`}>
                <figure><img className='h-52' src={image} alt="TV" /></figure>
                <div className="card-body">
                    <h2 className="card-title  text-white">
                        TV : {productName}

                    </h2>
                    <div className='flex justify-between'>
                        <div className="badge badge-primary ">Condition:{Condition}</div>
                        <div className=" border text-xs rounded-lg pl-2 py-1">Post on: {todayTime}</div>
                        {/* <div className="badge badge-primary "></div> */}
                    </div>
                    <h4>Seller: {sellerName}</h4>

                    <div className="card-actions justify-start grid grid-cols-2 ">

                        <div className=" shadow shadow-green-500 text-sm rounded-lg  pl-2 py-1 text-center">Resale Price: {productPrice} tk </div>
                        <div className="shadow shadow-green-500 text-sm rounded-lg badge-outline pl-2 py-1 text-center">location: {location}</div>
                        <div className="shadow shadow-green-500 text-sm rounded-lg badge-outline pl-2 py-1 text-center ">Original Price:{purchasingPrice}tk</div>
                        <div className="shadow shadow-green-500  text-sm rounded-lg badge-outline pl-2 py-1 text-center ">used year:{usedYear}</div>

                        {/* <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div> */}
                    </div>
                    <p className='font-normal'>{description.slice(0, 100)}</p>

                    <label
                        onClick={() => setProduct(product)}
                        htmlFor="BookNowModal"
                        className=" border  rounded-lg pl-2 py-1 w-1/2 mx-auto text-center bg-gradient-to-r from-primary to-secondary text-black cursor-pointer">Book Now
                    </label>
                </div>
            </div>




        </div>
    );
};

export default ProductCard;