import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SellerBuyerTable from '../SellerBuyerTAble/SellerBuyerTable';
import SellerTable from './SellerTable';

const Allseller = () => {
    const [allseller, setAlseller] = useState([]);

    const [refresh, setRefresh] = useState(false);
    // load all sellers
    useEffect(() => {
        fetch('http://localhost:5000/users/seller')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAlseller(data)
            })
    }, [refresh])

    // delete sellers by id
    const handleDeleteSeller = (seller) => {
        console.log(seller, 'delete')
        fetch(`http://localhost:5000/users/seller/${seller._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    setRefresh(!refresh)
                    toast.success(`${seller.name} Deleted Successfully`)
                }
            })
    }
    return (
        <div>
            <div>
                <div>

                    <div class="container">
                        <h1 class="mb-4 text-3xl text-center text-white">
                            All Sellers Information
                        </h1>

                        {/* <table class="text-left w-full "> */}
                        {/* <thead class="bg-black flex text-white w-full">
                                <tr class="flex w-full mb-4">

                                    <th class="p-4 w-1/4">serial</th>
                                    <th class="p-4 w-1/4">Name</th>
                                    <th class="p-4 w-1/4">Email</th>
                                    <th class="p-4 w-1/4">Verify</th>
                                    <th class="p-4 w-1/4">Delete</th>
                                </tr>
                            </thead> */}

                        {/* <tbody class="bg-grey-light flex flex-col items-center justify-between w-full" >
                                {allseller?.map((seller, index) => <tr className={`px-2 flex w-full mb-4 bg-gradient-to-r from-[#164e63] to-[#0c4a6e] text-slate-50 font-medium `}
                                    key={index}

                                >

                                    <td class="p-4 w-1/4">{index + 1}</td>
                                    <td class="p-4 w-1/4">{seller.name}</td>
                                    <td class="p-4 w-1/4">{seller.email}</td>
                                    <td class="p-4 w-1/4"><button className="btn glass btn-sm">verify</button></td>
                                    <td class="p-4 w-1/4"><button className="btn btn-outline btn-error btn-sm">Delete</button></td>
                                </tr>)

                                }

                            </tbody> */}
                        {/* </table> */}

                        <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-4 p-4'>
                            {
                                allseller?.map((seller, index) => <div className="card text-white bg-gradient-to-r from-[#164e63] to-[#0c4a6e] text-slate-50 font-medium ">
                                    <div className="card-body items-center text-center">
                                        <div className="badge ">{index + 1}</div>
                                        <h2 className="card-title">Name: {seller.name}</h2>
                                        <p>Email: {seller.email}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn glass btn-sm">verify</button>
                                            <button onClick={() => handleDeleteSeller(seller)} className="btn btn-outline btn-error btn-sm">Delete</button>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Allseller;