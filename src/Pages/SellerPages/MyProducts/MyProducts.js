import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MYProductsCard from './MyProductsCard/MYProductsCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    // //    load user by current users email
    // const { data: myProducts = [] } = useQuery({

    //     queryKey: ['userRole'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://tv-shop-server.vercel.app/product/${user?.email}`);
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    // console.log(data)
    const [refresh, setRefresh] = useState(false)

    // load product according to seller by email
    const [myProducts, seMyProduct] = useState([])
    console.log(myProducts)
    useEffect(() => {
        fetch(`https://tv-shop-server.vercel.app/product/${user?.email}`)
            .then(res => res.json())
            .then(data => {

                seMyProduct(data)

            })
    }, [user?.email, refresh])


    console.log(myProducts);
    return (
        <div >

            {
                !myProducts.length === 0 && <p className='text-white text-center text-3xl my-4'>Your Added Products</p>
            }
            {myProducts.length === 0 && <div className='text-center text-2xl text-white flex items-center lg:px-16 p-5 min-h-screen mx-auto'> You have not added any tv yet . please add a tv for sale</div>}
            <div className='p-4 grid  md:grid-cols-2 gap-5'>

                {
                    myProducts?.map(myProduct => <MYProductsCard
                        product={myProduct}
                        key={myProduct._id}
                        setRefresh={setRefresh}
                        refresh={refresh}
                    ></MYProductsCard>)





                }
            </div>
        </div>
    );
};

export default MyProducts;