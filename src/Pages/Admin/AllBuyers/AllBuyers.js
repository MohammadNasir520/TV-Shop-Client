import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AllBuyers = () => {
    const [allBuyer, setAllBuyer] = useState([]);


    const [refresh, setRefresh] = useState(false)
    // load al buyers
    useEffect(() => {
        fetch('https://tv-shop-server.vercel.app/users/Buyer')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllBuyer(data)
                setRefresh(!refresh)
            })
    }, [refresh])
    // delete buyers by id



    const handleDeletebuyerbyId = Buyer => {
        console.log('dlete buyer', Buyer)
        fetch(`https://tv-shop-server.vercel.app/users/buyer/${Buyer._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`${Buyer.name} deleted success fully`)
                }
            })
    }
    return (
        <div>
            <div>
                <div>

                    <div class="container">
                        <h1 class="mb-4 text-3xl text-center text-white">
                            All Buyers Information
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

                        <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-4 p-4 '>
                            {
                                allBuyer?.map((buyer, index) => <div className="card  bg-gradient-to-r from-[#164e63] to-[#0c4a6e] text-slate-50 font-medium ">
                                    <div className="card-body items-center text-white text-center">
                                        <div className="badge ">{index + 1}</div>
                                        <h2 className="card-title">Name: {buyer.name}</h2>
                                        <p>Email: {buyer.email}</p>
                                        <button onClick={() => handleDeletebuyerbyId(buyer)} className="btn btn-outline btn-error btn-sm">Delete Buyer</button>

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

export default AllBuyers;