import { type } from '@testing-library/user-event/dist/type';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { uploadImage } from '../../api/uploadImage';
import { saveUer } from '../../api/usersApi';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { updateUser, setUser } = useContext(AuthContext)
    const [Buyer, setBuer] = useState(false)
    const { createUserByEmailAndPss } = useContext(AuthContext)
    const [error, seterror] = useState('')


    const navigate = useNavigate();




    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSignUp = event => {
        event.preventDefault()


        const role = event.target.userType.value;
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const image = event.target.image.files[0]



        uploadImage(image)
            .then(photoURL => {
                console.log(photoURL);


                if (photoURL) {
                    createUserByEmailAndPss(email, password)
                        .then(result => {
                            const user = result.user;
                            console.log(user);
                            seterror('')
                            toast(`you have created an account as a ${role} `)
                            const createdUser = {
                                role,
                                name,
                                email,
                                photoURL

                            }
                            updateUser(createdUser)

                            // save user to database
                            saveUer(createdUser)
                                .then(data => {
                                    console.log(data)
                                    navigate(from, { replace: true })
                                })
                        })
                        .catch(error => {
                            console.log(error)
                            seterror(error.message)
                        })
                    // console.log(createdUser)



                }



                console.log(image);


            })




    }

    // const handleUpdateUser = profie => {
    //     const name = {
    //         displayName: profie.name

    //     }
    //     updateUser(name)
    // }

    return (
        <>
            {/* <form>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input required type="text" name='name' placeholder="Name" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Please select your account type</span>
                                    </label>

                                    <select defaultValue={'Buyer'} name='userType' className="select select-accent w-full max-w-xs">

                                        <option disabled>Please Choose Your account type</option>
                                        <option>Seller</option>
                                        <option >Buyer</option>
                                    </select>
                                </div>
                                <p className='text-red-600'>{error}</p>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">SignUP</button>
                                </div>
                                <p>Already  have an account?<Link to='/login' className="label-text-alt text-sky-700 link link-hover ">Please  Login  Here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </form> */}


            <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/04/44/90/69/240_F_444906906_EMcNCw95irM6vNDcbiwzd1fYshRpWw78.jpg') ` }}>
                <div className="rounded-xl bg-gray-800 bg-opacity-30 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                    <div className="text-white">
                        {/* <h1 className="mb-2 text-2xl text-center">SignUp</h1> */}
                        {/* <div className="mb-8 flex flex-col items-center">
                            <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" width="150" alt="" srcset="" />
                            <h1 className="mb-2 text-2xl">TVShop</h1>
                            <span className="text-gray-300">Enter Login Details</span>
                        </div> */}
                        <form onSubmit={handleSignUp}>
                            <div className="mb-1 text-lg">
                                <label htmlFor="" className="label">
                                    <span className='label-text text-white'>Your Full Name </span>
                                </label>
                                <input
                                    className="w-72 border-none bg-emerald-300 bg-opacity-10 px-6 py-1 text-center text-inherit placeholder-gray-400 shadow-lg outline-none backdrop-blur-md"
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name" />
                            </div>
                            <div className="mb- text-lg">
                                <label htmlFor="" className="label">
                                    <span className='label-text text-white'>Your Email</span>
                                </label>
                                <input
                                    className="w-72 border-none bg-emerald-300 bg-opacity-10 px-6 py-1 text-center text-inherit  placeholder-gray-400 shadow-lg outline-none backdrop-blur-md"
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email" />
                            </div>

                            <div className="mb- text-lg w-72">
                                <label htmlFor="" className="label">
                                    <span className='label-text text-white'>Password</span>
                                </label>
                                <input
                                    className="w-72 rounded border-none bg-emerald-300 bg-opacity-10 px-6 py-1 text-center text-inherit  placeholder-gray-400 shadow-lg outline-none backdrop-blur-md"
                                    type="Password"
                                    name="password"
                                    placeholder="*********"

                                />

                            </div>
                            <div className="mb- text-lg">
                                <label htmlFor="" className="label">
                                    <span className='label-text text-white'>Your Photo</span>
                                </label>
                                <input
                                    className="w-72  rounded border-none bg-emerald-300 bg-opacity-10 px-8 py-1 text-center text-inherit placeholder-slate-300 shadow-lg outline-none backdrop-blur-md"
                                    type="file"
                                    name="image"
                                    placeholder="*********"

                                />
                            </div>
                            <div className='w-72'>
                                <label className="label">
                                    <span className="label-text text-white">Please select your account type</span>
                                </label>

                                <select defaultValue={'Buyer'} name='userType' className="w-72 rounded border-none bg-emerald-300 bg-opacity-10 px-6 py-1 text-center text-slate-300 placeholder-slate-300 shadow-lg outline-none backdrop-blur-md">

                                    <option className='bg-gray-800' disabled>Please Choose Your account type</option>
                                    <option className='bg-gray-800'>Seller</option>
                                    <option className='bg-gray-800' >Buyer</option>

                                </select>
                            </div>
                            <p>{error}</p>
                            <div className="mt-4 flex justify-center text-lg text-black">
                                <button
                                    type="submit"
                                    className=" bg-cyan-500 bg-opacity-50 px-5 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-cyan-600">
                                    SignUp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;