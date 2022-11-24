import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const time = new Date()
    const todayTime = time.toLocaleString();
    console.log(todayTime)
    console.log(time)
    const imageBbKey = process.env.REACT_APP_imagebb_key;
    const handleAddProduct = (event) => {

        event.preventDefault()
        const email = user.email;
        const sellerName = user.displayName;
        const productName = event.target.ProductName.value;
        const productPrice = event.target.productPrice.value;
        const productCategory = event.target.productCategory.value;
        const Condition = event.target.productCondition.value;
        const mobileNumber = event.target.mobileNumber.value;
        const location = event.target.location.value;
        const description = event.target.description.value;
        const purchasingPrice = event.target.purchasingPrice.value;
        const purchasingYear = event.target.purchasingYear.value;
        const image = event.target.img.value;
        console.log(Condition)
        const product = {
            email, productName, productPrice, Condition, productCategory, mobileNumber, location, description, purchasingPrice, purchasingYear,
            image, todayTime, sellerName
        }
        console.log(product)
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <form onSubmit={handleAddProduct}>
            <div className='grid lg:grid-cols-3 gap-4  p-10'>


                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product Name</span>

                    </label>
                    <input required name='ProductName' type="text" placeholder="Type here" className="input  w-full " />

                </div>
                <div className='form-control w-full'>
                    <label className="label">
                        <span className="label-text"> Select Product category</span>

                    </label>
                    <select name='productCategory' className="select w-full">
                        <option disabled>Product category</option>
                        <option>Samsung TV</option>
                        <option >LG TV</option>
                        <option >Sony TV</option>
                    </select>
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product image link</span>

                    </label>
                    <input required name='img' type="text" placeholder="Type here" className="input  w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product Price</span>

                    </label>
                    <input required name='productPrice' type="text" placeholder="Type here" className="input w-full " />

                </div>

                <div className='form-control w-full'>
                    <label className="label">
                        <span className="label-text"> Select Product Condition</span>

                    </label>
                    <select name='productCondition' className="select w-full">
                        <option disabled>Product condition</option>
                        <option selected>Excellent</option>
                        <option >Good</option>
                        <option >Normal</option>
                    </select>
                </div>


                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Mobile Number</span>

                    </label>
                    <input required name='mobileNumber' type="text" placeholder="Type here" className="input w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Location</span>

                    </label>
                    <input required name='location' type="text" placeholder="Type here" className="input w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text"> description</span>

                    </label>
                    <input required name='description' type="text" placeholder="Type here" className="input w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Purchasing Price</span>

                    </label>
                    <input required name='purchasingPrice' type="text" placeholder="Type here" className="input w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Purchasing Year</span>

                    </label>
                    <input required name='purchasingYear' type="text" placeholder="Type here" className="input w-full " />

                </div>
            </div>
            <div className='w-1/2 mx-auto '>
                <input required type="submit" value="Add a product" className='btn w-full  mx-auto ' />
            </div>

        </form>


    );
};

export default AddProduct;