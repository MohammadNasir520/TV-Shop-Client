import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Modal from '../../../Components/Modal';
import ProductCard from '../../../Shared/ProductCard/ProductCard';
import Spinner from '../../../Shared/Spinner/Spinner';
import SmallSpinner from '../../../Shared/SmallSpinner/SmallSpinner';
const AdvertisedProducts = () => {
    const [advertisedProducts, setAdverTisedProducts] = useState([]);
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    console.log(advertisedProducts)
    useEffect(() => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_Base_url}/products/advertised`)
            .then(res => res.json())
            .then(data => {
                setAdverTisedProducts(data)
                console.log(data)
                if (data) {
                    setLoading(false)
                }

            })
    }, [])
    return (
        <div>

            {
                loading ?
                    <div className=' flex flex-col h-[500px]  justify-center items-center'>
                        <div className='flex justify-center items-center text-white text-2xl font-bold space-y-3'>Advertised Tv </div>
                        <SmallSpinner></SmallSpinner>


                    </div>

                    :
                    <div >
                        {
                            advertisedProducts.length !== 0 && <>
                                <h2 className='text-center text-white text-3xl my-4'>Advertised Tv</h2>
                                <div className='grid lg:grid-cols-3 lg:m-6 gap-6'>
                                    {
                                        advertisedProducts?.map(advertisedProduct => <ProductCard
                                            key={advertisedProduct._id}
                                            product={advertisedProduct}
                                            setProduct={setProduct}
                                        ></ProductCard>)
                                    }
                                </div>
                            </>
                        }
                        {
                            product && <Modal
                                product={product}
                                setProduct={setProduct}
                            ></Modal>
                        }
                    </div>
            }
        </div>
    );
};

export default AdvertisedProducts;