import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const LandingBanner = () => {
    const { user } = useContext(AuthContext)
    return (
        <section
            className="relative bg-[url(https://c8.alamy.com/comp/KB3M9Y/flat-screen-televisions-at-an-electronics-store-KB3M9Y.jpg)] bg-cover bg-center bg-no-repeat"
        >
            <div
                className="absolute inset-0 bg-black/50 sm:from-black/70 sm:to-white/25 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/70 sm:to-white/25"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                        Welcome to Online TV Shop

                        <strong className="block font-extrabold text-rose-700">
                            Like Real TV Shop
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl text-white sm:leading-relaxed">
                        Your are welcomed to Online tv shop. Visit our online  Tv Shop and Buye or sale your tv according to your preferance.                     </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        {
                            user?.uid ? ""
                                :
                                <Link
                                    to='/login'
                                    className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                >
                                    SignIn to become a Seller or Buyer
                                </Link>

                        }

                        {/* 
                        <a
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Learn More
                        </a> */}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default LandingBanner;