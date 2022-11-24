import React from 'react';

const CategoryCard = () => {
    return (
        <div>

            {/* <div className="card w-96 card-side bg-base-100 shadow-xl">
                <figure><img className='h-72 w-full' src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div> */}
            <div className="card w-96 bg-cyan-200  bg-base-100 shadow-xl">
                <figure><img className='h-72 ' src="https://media.istockphoto.com/id/483551726/photo/samsung-smart-tv-logo.jpg?s=612x612&w=0&k=20&c=Jax2x3eNo1VgA2SPZSPinCU66J9BGG5WAQrMFcYnY1Q=" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;