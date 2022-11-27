import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../../Components/Modal';
import { AuthContext } from '../../Context/AuthProvider';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const Products = () => {
    const products = useLoaderData()
    console.log(products)



    return (
        <div >
            <div className='p-4 grid  md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    products.map(product => <ProductCard
                        product={product}
                        key={product._id}
                    ></ProductCard>)
                }
            </div>
            <Modal
            // product={product}
            ></Modal>
        </div>

    );
};

export default Products;