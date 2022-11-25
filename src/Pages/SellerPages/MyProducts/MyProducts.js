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
    //         const res = await fetch(`http://localhost:5000/product/${user?.email}`);
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    // console.log(data)
    const [refresh, setRefresh] = useState(false)

    const [myProducts, seMyProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product/${user?.email}`)
            .then(res => res.json())
            .then(data => {

                seMyProduct(data)

            })
    }, [user?.email, refresh])


    console.log(myProducts);
    return (
        <div className='p-4 grid  md:grid-cols-2 gap-4'>

            {
                myProducts?.map(myProduct => <MYProductsCard
                    product={myProduct}
                    key={myProduct._id}
                    setRefresh={setRefresh}
                    refresh={refresh}
                ></MYProductsCard>)
            }
        </div>
    );
};

export default MyProducts;