import React, { useState, useEffect, useRef } from 'react';
import './style.css'; // Add necessary styles here

const CategoryCard = ({ categoriesData, handleClick }) => {

    return (
        <div className="custom-card category p-2 h-100 position-relative">
            <div className="card-body h-100">
                <ul className="d-flex flex-lg-column justify-content-between h-100 ps-0 py-2 mb-0">
                    {categoriesData?.categories.map((category, index) => (
                        <li key={index} className="categories-item item-size" onClick={() => handleClick(category, index)}>
                            <span>
                                <div>
                                    <img
                                        className="text-center category-img"
                                        src={`assets/img/categories/${category.image_name}`}
                                        title={category?.category}
                                        alt={category?.category}
                                    />
                                </div>
                                <p className="mb-0 text-end d-lg-none">{category?.category}</p>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoryCard;
