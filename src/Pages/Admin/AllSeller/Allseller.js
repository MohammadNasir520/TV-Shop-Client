import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { deleteUserById } from '../../../api/usersApi';
import { AuthContext } from '../../../Context/AuthProvider';
// import SellerBuyerTable from '../SellerBuyerTAble/SellerBuyerTable';
// import SellerTable from './SellerTable';

const Allseller = () => {
    const { user } = useContext(AuthContext)
    const [allseller, setAlseller] = useState([]);

    const [refresh, setRefresh] = useState(false);

    // load all sellers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_Base_url}/users/seller`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAlseller(data)
            })
    }, [refresh])

    // delete sellers by id
    const handleDeleteSeller = (seller) => {
        console.log(seller, 'delete')

        deleteUserById(seller._id)
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    setRefresh(!refresh)
                    toast.success(`${seller.name} Deleted Successfully`)
                }
            })
    }

    // handle verify seller

    const handleVirifySeller = seller => {
        console.log(seller)
        fetch(`${process.env.REACT_APP_Base_url}/seller/${seller.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => { console.log(data) })
    }

    return (
        <div>
            <div>
                <div>
                    {
                        allseller.length === 0 ?
                            <div className='h-screen flex justify-center items-center text-xl text-slate-300 text-center'>
                                <p>NO seller signed in yet</p>
                            </div>
                            :

                            <div className="container">
                                <h1 className="mb-4 text-3xl text-center text-white">
                                    All Sellers Information
                                </h1>



                                <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-4 p-4'>
                                    {
                                        allseller?.map((seller, index) => <div
                                            key={index}
                                            className="card text-white bg-gradient-to-r from-[#164e63] to-[#0c4a6e] text-slate-50 font-medium ">
                                            <div className="flex flex-col items-center ">
                                                <img className="object-cover w-16 h-16 mx-2 rounded-full" src={seller?.photoURL} alt="Pic" />

                                            </div>
                                            <div className="card-body items-center text-center my-0 py-3">
                                                <h2 className="card-title">Name: {seller.name}</h2>
                                                <p>Email: {seller.email}</p>
                                                <div className="card-actions justify-end">
                                                    <button onClick={() => handleVirifySeller(seller)} className="btn glass btn-sm">verify</button>
                                                    <button onClick={() => handleDeleteSeller(seller)} className="btn btn-outline btn-error btn-sm">Delete</button>
                                                </div>
                                            </div>

                                        </div>)
                                    }
                                </div>
                            </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default Allseller;