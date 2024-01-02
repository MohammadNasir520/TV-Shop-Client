import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { deleteUserById, getAllBuyers } from '../../../api/usersApi';

const AllBuyers = () => {
    const [allBuyer, setAllBuyer] = useState([]);


    // load al buyers
    useEffect(() => {
        fetchAllByers()

    }, [])

    const fetchAllByers = () => {
        getAllBuyers()
            .then(data => {
                console.log(data)
                setAllBuyer(data)

            })
    }

    // delete buyers by id



    const handleDeletebuyerbyId = Buyer => {

        console.log('delete buyer', Buyer)

        deleteUserById(Buyer._id)
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`${Buyer.name} deleted success fully`)
                }
                fetchAllByers()
            })
    }
    return (
        <div>
            <div>
                <div>

                    <div className="container">
                        <h1 className="mb-4 text-3xl text-center text-white">
                            All Buyers Information
                        </h1>

                        {/* <table className="text-left w-full "> */}
                        {/* <thead className="bg-black flex text-white w-full">
                            <tr className="flex w-full mb-4">

                                <th className="p-4 w-1/4">serial</th>
                                <th className="p-4 w-1/4">Name</th>
                                <th className="p-4 w-1/4">Email</th>
                                <th className="p-4 w-1/4">Verify</th>
                                <th className="p-4 w-1/4">Delete</th>
                            </tr>
                        </thead> */}

                        {/* <tbody className="bg-grey-light flex flex-col items-center justify-between w-full" >
                            {allseller?.map((seller, index) => <tr className={`px-2 flex w-full mb-4 bg-gradient-to-r from-[#164e63] to-[#0c4a6e] text-slate-50 font-medium `}
                                key={index}

                            >

                                <td className="p-4 w-1/4">{index + 1}</td>
                                <td className="p-4 w-1/4">{seller.name}</td>
                                <td className="p-4 w-1/4">{seller.email}</td>
                                <td className="p-4 w-1/4"><button className="btn glass btn-sm">verify</button></td>
                                <td className="p-4 w-1/4"><button className="btn btn-outline btn-error btn-sm">Delete</button></td>
                            </tr>)

                            }

                        </tbody> */}
                        {/* </table> */}

                        <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-4 p-4 '>
                            {
                                allBuyer?.map((buyer, index) => <div
                                    key={index}
                                    className="card   bg-gradient-to-r from-[#164e63] to-[#0c4a6e] text-slate-50 font-medium "

                                >
                                    <div className="flex flex-col items-center space-y-3  ">
                                        <img className="object-cover w-16 h-16 mx-2  mt-5 rounded-full" src={buyer?.photoURL} alt="Pic" />

                                    </div>
                                    <div className="card-body items-center text-white text-center">

                                        <h2 className="card-title"> {index + 1}. Name: {buyer?.name}</h2>
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