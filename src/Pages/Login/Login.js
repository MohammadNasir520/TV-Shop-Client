import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../Context/AuthProvider';
import { saveUerToDatabase } from '../../api/usersApi';

const Login = () => {
    const { user, loginByEmailAndPassWord, loginWithEmail } = useContext(AuthContext)
    const [error, seterror] = useState('')
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()


    const location = useLocation()
    const from = location.state?.from?.pathname || '/'





    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)

        loginByEmailAndPassWord(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(user)
                seterror('')
            })
            .catch(err => {
                seterror(err.message)

                console.log(err)
            })
    }

    const handleGoogleLogin = () => {
        loginWithEmail(googleProvider)
            .then(result => {
                const Currentuser = result.user;
                console.log(user)

                const createdUser = {
                    role: 'Buyer',
                    name: Currentuser?.displayName,
                    email: Currentuser?.email,


                }
                console.log(createdUser)


                saveUerToDatabase(createdUser)
                    .then(data => {
                        console.log(data)
                        navigate('/')
                    })



            })
            .catch(err => {
                console.log(err)
                seterror(err.message)
            })



    }
    return (



        // <div className="hero min-h-screen bg-gradient-to-r from-[#164e63] to-[#0c4a6e]">
        //     <div className="hero-content flex-col lg:flex-row-reverse">
        //         {/* <div className="text-center lg:text-left">
        //                 <h1 className="text-5xl font-bold">Login now!</h1>
        //                 <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             </div> */}
        //         <div className="  card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-800 bg-opacity-30">
        //             <div className="card-body">
        //                 <form onSubmit={handleLogin} >
        //                     <p className='text-center text-xl text-white'>Login</p>
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text text-white">Email</span>
        //                         </label>
        //                         <input type="text" name='email' placeholder="email" required className="input input-bordered" />
        //                     </div>
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text text-white">Password</span>
        //                         </label>
        //                         <input type="password" name='password' required placeholder="password" className="input input-bordered" />
        //                         <label className="label">

        //                         </label>
        //                     </div>
        //                     <p className='text-red-600'>{error}</p>
        //                     <div className="form-control mt-3">
        //                         <button className="btn btn-primary text-white">Login</button>
        //                     </div>

        //                 </form>

        //                 <div className="form-control mt-4">
        //                     <button onClick={handleGoogleLogin} className="btn btn-primary">Login With Google</button>
        //                 </div>
        //                 <p className='text-white'>Don't have an account?<Link to='/signup' className="label-text-alt text-lime-400  link link-hover text-xl ">SignUp  </Link></p>
        //             </div>
        //         </div>
        //     </div>

        // </div>


        <>



            <div className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-[#164e63] to-[#0c4a6e] bg-cover bg-no-repeat" >
                <div className="rounded-xl bg-gray-800 bg-opacity-30 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                    <div className="text-white">

                        <form onSubmit={handleLogin}>

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


                            <p>{error}</p>
                            <div className="mt-4 flex justify-center text-lg text-black">
                                <button
                                    type="submit"
                                    className=" bg-cyan-500 bg-opacity-50 px-5 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-cyan-600">
                                    SignIn
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;