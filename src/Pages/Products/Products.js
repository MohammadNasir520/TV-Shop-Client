import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../../Components/Modal';
import { AuthContext } from '../../Context/AuthProvider';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const Products = () => {
    const products = useLoaderData()
    console.log(products)
    const [product, setProduct] = useState(null)
    console.log(product)
    return (
        <div >
            <div className='p-4 grid  md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    products.map(product => <ProductCard
                        product={product}
                        key={product._id}
                        setProduct={setProduct}
                    ></ProductCard>)
                }
            </div>
            {product &&
                <Modal
                    productName={product.name}
                    product={product}
                    setProduct={setProduct}
                ></Modal>
            }
        </div>

    );
};

export default Products;