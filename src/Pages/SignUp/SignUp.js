import { type } from '@testing-library/user-event/dist/type';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const [Buyer, setBuer] = useState(false)
    const { createUserByEmailAndPss } = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault()
        const role = event.target.userType.value;
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const createdUser = {
            role,
            name,
            email,

        }

        createUserByEmailAndPss(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(createdUser)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })
            .catch(error => {
                console.log(error)
            })
        console.log(createdUser)



    }


    return (
        <form onSubmit={handleSignUp}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />

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
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />

                            </div>

                            <select name='userType' className="select select-accent w-full max-w-xs">
                                <option disabled>Please Choose Your account type</option>
                                <option>Seller</option>
                                <option selected >Buyer</option>
                            </select>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignUp;