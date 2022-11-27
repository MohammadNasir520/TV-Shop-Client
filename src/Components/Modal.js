import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Modal = ({ product, setProduct }) => {
    console.log(product?.productName)
    const { user } = useContext(AuthContext)

    return (
        <div>

            <input type="checkbox" id="BookNowModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setProduct(null)} htmlFor="BookNowModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form>




                        <div className=" shadow-2xl bg-base-100">
                            <div >
                                <div className="form-control">
                                    <label className="label">
                                        <span >Product name</span>
                                    </label>

                                    <input type="text" name='product' defaultValue={product?.productName} readOnly placeholder="Product name" required className=" border px-4 py-1 " />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text px-2">Product Price</span>
                                    </label>
                                    <input type="text" name='productPrice' defaultValue={product?.productPrice} readOnly placeholder="Product name" required className="border px-4 py-1" />
                                </div>

                                {/* <input type="text" name="product" defaultValue={product?.productName} id="" /> */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text px-2">Your Name</span>
                                    </label>
                                    <input type="text" name='name' defaultValue={user?.displayName} readOnly placeholder="your Name" required className="border px-4 py-1" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text px-2">Email</span>
                                    </label>
                                    <input type="text" name='email' defaultValue={user?.email} readOnly placeholder="Product name" required className="border px-4 py-1" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text px-2"> Your Phone Number</span>
                                    </label>
                                    <input type="text" name='phone' placeholder="Please Enter Your Phone Number " required className="border px-4 py-1" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text px-2"> Your Location</span>
                                    </label>
                                    <input type="text" name='phone' placeholder="Please Enter Your Location " required className="border px-4 py-1" />
                                </div>


                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">submit</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    );
};

export default Modal;