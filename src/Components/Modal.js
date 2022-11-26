import React from 'react';

const Modal = ({ product }) => {
    const { productName } = product;
    return (
        <div>

            <input type="checkbox" id="BookNowModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="BookNowModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form>




                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product name</span>
                                    </label>
                                    <input type="text" name='email' defaultValue={productName} placeholder="Product name" required className="input input-bordered" />
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