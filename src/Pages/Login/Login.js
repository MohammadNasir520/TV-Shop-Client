import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { user, loginByEmailAndPassWord, loginWithEmail } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)

        loginByEmailAndPassWord(email, password)
            .then(result => {
                const user = result.user;
                navigate('/')
                console.log(user)
            })
            .catch(err => {


                console.log(err)
            })
    }
    const handleGoogleLogin = () => {
        loginWithEmail(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <form onSubmit={handleLogin}>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div> */}
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
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

                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-4">
                                <button onClick={handleGoogleLogin} className="btn btn-primary">Login With Google</button>
                            </div>
                            <p>Don't have an account?<Link to='/signup' className="label-text-alt text-sky-700 link link-hover ">Please  SignUp  Here</Link></p>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    );
};

export default Login;