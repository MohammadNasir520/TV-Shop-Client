import React from 'react';

const CategoryCard = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-3'>

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
            <div className="card  lg:w-80 lg:h-80 bg-cyan-200  bg-base-100 shadow-xl">
                <figure><img className='w-full h-full' src="https://media.gettyimages.com/id/1212428969/photo/samsung-logo-at-samsung-customer-service-center-in-krakow-poland-on-6th-march-2020.jpg?s=612x612&w=gi&k=20&c=xdxAwetJ6hr9XP9qR-ftE8XyLeaBwRNLnEAHiay0ZS8=" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Samsung TV
                        <div className="badge badge-secondary">used</div>
                    </h2>
                    <p>In This Category you will get All Samsung Tv for Buy</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
            <div className="card  lg:w-80 lg:h-80 bg-cyan-200  bg-base-100 shadow-xl">
                <figure><img className='w-full h-full' src="https://i.pinimg.com/736x/f3/59/7e/f3597e9b57cf5a3427172d4334ed5937.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        LG TV
                        <div className="badge badge-secondary">used</div>
                    </h2>
                    <p>In This Category you will get All LG  Tv for Buy</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
            <div className="card  lg:w-80 lg:h-80 bg-cyan-200  bg-base-100 shadow-xl">
                <figure><img className='w-full h-full' src="https://besthqwallpapers.com/Uploads/10-11-2021/181771/thumb2-sony-3d-logo-4k-gray-brickwall-creative-brands.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Samsung TV
                        <div className="badge badge-secondary">used</div>
                    </h2>
                    <p>In This Category you will get All Samsung Tv for Buy</p>
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