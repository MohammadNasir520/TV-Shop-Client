import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const time = new Date()
    const todayTime = time.toLocaleString();
    console.log(todayTime)
    console.log(time)
    const navigate = useNavigate()

    // const imageBbKey = process.env.REACT_APP_imagebb_key;
    //collecting data from form 
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
        const usedYear = event.target.usedYear.value;
        console.log(Condition)
        const product = {
            email, productName, productPrice, Condition, productCategory, mobileNumber, location, description, purchasingPrice, purchasingYear,
            image, todayTime, sellerName, usedYear
        }
        console.log(product)

        // add product by post method
        fetch('https://tv-shop-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('product added successfully')
                navigate('/sellerDashboard/myProducts')
            })
    }
    return (
        <form onSubmit={handleAddProduct}>
            <div className='grid lg:grid-cols-3 gap-4  p-10'>


                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text text-white">Television  Name</span>

                    </label>
                    <input required name='ProductName' type="text" placeholder="Type here" className="input  w-full " />

                </div>
                <div className='form-control w-full'>
                    <label className="label">
                        <span className="label-text text-white"> Select Tv category</span>

                    </label>
                    <select name='productCategory' className="select w-full">
                        <option disabled>Tv category</option>
                        <option>Samsung TV</option>
                        <option >LG TV</option>
                        <option >Sony TV</option>
                    </select>
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-white">TV image link</span>

                    </label>
                    <input required name='img' type="text" placeholder="Type here" className="input  w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-white">Resale Price</span>

                    </label>
                    <input required name='productPrice' type="text" placeholder="Type here" className="input w-full " />

                </div>

                <div className='form-control w-full'>
                    <label className="label">
                        <span className="label-text text-white"> Select TV Condition</span>

                    </label>
                    <select name='productCondition' className="select w-full">
                        <option disabled>TV condition</option>
                        <option selected>Excellent</option>
                        <option >Good</option>
                        <option >Normal</option>
                    </select>
                </div>


                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-white">Mobile Number</span>

                    </label>
                    <input required name='mobileNumber' type="text" placeholder="Type here" className="input w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-white">Location</span>

                    </label>
                    <input required name='location' type="text" placeholder="Type here" className="input w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-white"> description</span>

                    </label>
                    <input required name='description' type="text" placeholder="Type here" className="input w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-white">Purchasing Price</span>

                    </label>
                    <input required name='purchasingPrice' type="text" placeholder="Type here" className="input w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-white">Purchasing Year</span>

                    </label>
                    <input required name='purchasingYear' type="text" placeholder="Type here" className="input w-full " />

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-white">Used Year</span>

                    </label>
                    <input required name='usedYear' type="text" placeholder="Type here" className="input w-full " />

                </div>
            </div>
            <div className='w-1/2 mx-auto '>
                <input required type="submit" value="Add a Television" className='btn w-full  mx-auto ' />
            </div>

        </form>


    );
};

export default AddProduct;