import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { saveUer } from '../../api/usersApi';
import { AuthContext } from '../../Context/AuthProvider';

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


                saveUer(createdUser)
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



        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div> */}
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <p className='text-center text-xl'>Login</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">

                                </label>
                            </div>
                            <p className='text-red-600'>{error}</p>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Login</button>
                            </div>

                        </form>

                        <div className="form-control mt-4">
                            <button onClick={handleGoogleLogin} className="btn btn-primary">Login With Google</button>
                        </div>
                        <p>Don't have an account?<Link to='/signup' className="label-text-alt text-sky-700 link link-hover ">Please  SignUp  Here</Link></p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Login;