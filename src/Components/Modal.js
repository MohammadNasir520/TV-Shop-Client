import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';

const Modal = ({ product, setProduct }) => {

    console.log(product)
    const { user } = useContext(AuthContext)

    const handleBookingModal = event => {
        event.preventDefault()
        const form = event.target;
        const buyerName = form.name.value;
        const phone = form.phone.value;
        const meetlocation = form.location.value;
        const email = user.email;
        const productId = product._id
        const Condition = product.Condition;
        const description = product.description;
        const image = product.image;
        const location = product.location;
        const productCategory = product.productCategory;
        const productName = product.productName;
        const productPrice = product.productPrice;
        const purchasingPrice = product.purchasingPrice;
        const purchasingYear = product.purchasingPrice;
        const sellerName = product.sellerName;
        const todayTime = product.todayTime;
        const bookedProduct = {
            buyerName, phone, location, email, productId, meetlocation, Condition, description, image,
            productCategory, productName, productPrice, purchasingPrice, purchasingYear, sellerName
            , todayTime
        }
        fetch(`${process.env.REACT_APP_Base_url}/bookedProduct`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setProduct(null)
                    toast.success(`${product.productName} booked successfully`)
                }
            })
        console.log(bookedProduct)
        // const productName = form.product.value;
        // const productPrice = form.productPrice.value;
        // const buyerName = form.name.value;
    }

    return (
        <div>

            <input type="checkbox" id="BookNowModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setProduct(null)} htmlFor="BookNowModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBookingModal}>




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
                                        <span className="label-text px-2"> Meet Location</span>
                                    </label>
                                    <input type="text" name='location' placeholder="Please Enter meet Location " required className="border px-4 py-1" />
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