import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Catagories = () => {

    const [selectedCategory, setSelectedCategory] = useState('')
    console.log(selectedCategory)

    const navigate = useNavigate()

    const handleSelectedCategory = category => {
        setSelectedCategory(category)
        fetch(`http://localhost:5000/category/${category.categoryName}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate(`/category/${category.categoryName}`)
            })
    }

    const productsCategory = [

        {
            categoryName: 'Samsung TV',
            img: 'https://media.gettyimages.com/id/1212428969/photo/samsung-logo-at-samsung-customer-service-center-in-krakow-poland-on-6th-march-2020.jpg?s=612x612&w=gi&k=20&c=xdxAwetJ6hr9XP9qR-ftE8XyLeaBwRNLnEAHiay0ZS8=',
            description: 'In This Category you will get All Samsung Tv for Buy'
        },
        {
            categoryName: 'LG TV',
            img: 'https://i.pinimg.com/736x/f3/59/7e/f3597e9b57cf5a3427172d4334ed5937.jpg',
            description: 'In This Category you will get All LG Tv for Buy'

        },
        {
            categoryName: 'Sony TV',
            img: 'https://besthqwallpapers.com/Uploads/10-11-2021/181771/thumb2-sony-3d-logo-4k-gray-brickwall-creative-brands.jpg',
            description: 'In This Category you will get All Sony Tv for Buy'
        },
    ]
    return (
        <div className='w-full' >
            <h1 className='text-center text-white text-3xl my-4'>Category</h1>
            <div className='grid lg:grid-cols-3 gap-3 '>
                {
                    productsCategory.map(category => <CategoryCard
                        handleSelectedCategory={handleSelectedCategory}
                        category={category}
                    ></CategoryCard>)
                }


            </div>
        </div>
    );
};

export default Catagories;