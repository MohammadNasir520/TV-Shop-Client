import React from 'react';

const CategoryCard = ({ category, handleSelectedCategory }) => {
    return (
        <div>


            <div onClick={() => handleSelectedCategory(category)} className="card  cursor-pointer lg:w-80 lg:h-80   bg-gradient-to-r from-[#164e63] to-[#0c4a6e] text-slate-50 font-medium shadow-xl mx-auto">
                <figure><img className='w-full h-full' src={category?.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {category.categoryName}

                    </h2>
                    {/* <p>{category.description}</p> */}
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>


        </div>
    );
};

export default CategoryCard;