import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersCard = ({ bookedProduct, setProduct }) => {
    const { productId, image, productName, Condition, sellerName, description, todayTime, productPrice, location, purchasingPrice } = bookedProduct;
    console.log(bookedProduct)
    return (
        <div className='md:w-full lg:w-[420px] mx-auto'>
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
                        <div className="border text-xs rounded-lg badge-outline pl-2 py-1">Price: {productPrice} tk </div>
                        <div className="border text-xs rounded-lg badge-outline pl-2 py-1">location: {location}</div>
                        <div className="border text-xs rounded-lg badge-outline pl-2 py-1 ">Original Price:{purchasingPrice}tk</div>
                        <div className=" border text-xs rounded-lg pl-2 py-1">{todayTime}</div>
                        {/* <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div> */}
                    </div>

                    <Link className=" border  rounded-lg pl-2 py-1 w-1/2 mx-auto text-center bg-gradient-to-r from-primary to-secondary text-black "
                        to={`/dashboard/payment/${productId}`}>
                        <button
                        // onClick={() => setProduct(bookedProduct)}

                        // htmlFor="BookNowModal"

                        > Buy
                        </button>
                    </Link>

                </div>
            </div>




        </div>
    );
};

export default MyOrdersCard;