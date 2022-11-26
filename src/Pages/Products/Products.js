import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const Products = () => {
    const products = useLoaderData()
    console.log(products)



    return (
        <div >
            <div className='p-4 grid  md:grid-cols-2 gap-4'>

                {
                    products.map(product => <ProductCard
                        product={product}
                        key={product._id}
                    ></ProductCard>)
                }
            </div>
        </div>

    );
};

export default Products;