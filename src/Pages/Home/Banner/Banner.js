import React from 'react';

const Banner = () => {
    return (
        <div>



            <section className="relative pt-16 bg-blueGray-50 min-h-screen">
                <h1 className='text-2xl text-center mb-3 text-white'> Our Features</h1>
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78 ">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                                <img alt="..." src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-pack-a-tv-for-moving-step-7.jpg" className="w-full align-middle rounded-t-lg" />
                                <blockquote className="relative p-8 mb-4">
                                    {/* <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                                        <polygon points="-30,95 583,95 583,65" className="text-pink-500 fill-current"></polygon>
                                    </svg> */}
                                    <h4 className="text-xl font-bold text-white">
                                        Sell or Buy Your Used TV
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        If you want to sale your used TV Then sale it in our website.
                                        After salling your Used Tv you also can buy a Tv from our website
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className={`w-full md:w-6/12 px-4  text-gray-50`}>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col mt-4">
                                        <div className={`px-4 py-5 flex-auto  bg-gradient-to-r from-[#164e63] to-[#0c4a6e] my-3 rounded-lg`}>
                                            {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i className="fas fa-sitemap"></i>
                                            </div> */}
                                            <h6 className="text-xl mb-1 font-semibold">Become a Seller</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                signUp  as seller for selling your used tv.Then You can sale your tv to  buyers.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className={`px-4 py-5 flex-auto  bg-gradient-to-r from-[#164e63] to-[#0c4a6e] my-3 rounded-lg`}>
                                            {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i className="fas fa-drafting-compass"></i>
                                            </div> */}
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Advertise your Items
                                            </h6>
                                            <p className="mb-4 text-blueGray-500">
                                                If you are a seller then you can advertise your Tv.
                                                just go to your Dashboard find your product Click on Advertise then your product will shown our homepage.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className={`px-4 py-5 flex-auto  bg-gradient-to-r from-[#164e63] to-[#0c4a6e] my-3 rounded-lg`}>
                                            {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i className="fas fa-newspaper"></i>
                                            </div> */}
                                            <h6 className="text-xl mb-1 font-semibold">Become a buyer</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                signup as a buyer.Then You will become a buyer and  can buy Tv from our website.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className={`px-4 py-5 flex-auto  bg-gradient-to-r from-[#164e63] to-[#0c4a6e] my-3 rounded-lg`}>
                                            {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i className="fas fa-file-alt"></i>
                                            </div> */}
                                            <h6 className="text-xl mb-1 font-semibold">Book and Buy Tv</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                If you are a buyer .then you can book tv from our advertised items as your preference.
                                                after payment that Tv will be yours.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <footer className="relative bg-blueGray-50 pt-8 pb-6 mt-2">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                <div className="text-sm text-blueGray-500 font-semibold py-1">

                                </div>
                            </div>
                        </div>
                    </div>
                </footer> */}
            </section>
        </div>
    );
};

export default Banner;