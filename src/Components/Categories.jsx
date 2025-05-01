import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch("/categories.json").then(res => res.json())

const Categories = () => {
    const category = use(categoryPromise);
    return (
        <div>
            <h2 className='font-bold'>All Categories</h2>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    category.map((category, index) => 
                    <NavLink 
                    to={`category/${category.id}`}
                    className="btn bg-base-100 border-0 hover:bg-base-200 shadow-none font-semibold text-accent"
                    key={index}
                    >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;