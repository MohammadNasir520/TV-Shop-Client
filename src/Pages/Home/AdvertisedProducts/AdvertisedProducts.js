import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Modal from '../../../Components/Modal';
import ProductCard from '../../../Shared/ProductCard/ProductCard';
const AdvertisedProducts = () => {
    const [advertisedProducts, setAdverTisedProducts] = useState([]);
    const [product, setProduct] = useState(null)
    console.log(advertisedProducts)
    useEffect(() => {
        fetch(`http://localhost:5000/products/advertised`)
            .then(res => res.json())
            .then(data => {
                setAdverTisedProducts(data)
            })
    }, [])
    return (
        <div >
            {
                advertisedProducts.length !== 0 && <>
                    <h2 className='text-center text-white text-3xl my-4'>Advertised Tv</h2>
                    <div className='grid lg:grid-cols-3 lg:m-6 gap-4'>
                        {
                            advertisedProducts?.map(advertisedProduct => <ProductCard
                                product={advertisedProduct}
                                setProduct={setProduct}
                            ></ProductCard>)
                        }
                    </div>
                </>
            }
            <Modal
                product={product}
                setProduct={setProduct}
            ></Modal>
        </div>
    );
};

export default AdvertisedProducts;