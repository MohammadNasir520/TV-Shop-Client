import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div>
            products
            {
                products.map(product => <p>{product.productCategory}</p>)
            }
        </div>
    );
};

export default Products;