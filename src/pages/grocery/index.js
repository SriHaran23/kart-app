import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import Grocery from './grocery';
import CartLoader from '../../components/loader';
import { fetchProducts } from '../../functions';
import { CategoryContext, CompleteContext } from '../../App';

const Groceries = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext)
  const { completeData, setCompleteData } = useContext(CompleteContext)

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(completeData?.category?.category);
  const categories = {
    Groceries: "groceries",
    // Mobiles: "smartphones",
    Electronics: ["laptops", "tablets", "mobile-accessories"],
    Fashion: ["mens-shirts", "mens-shoes", "mens-watches", "womens-dresses", "womens-shoes", "womens-watches", "womens-bags", "womens-jewellery", "tops"],
    Appliances: ["kitchen-accessories", "home-decoration"],
    "Home & Furniture": ["furniture", "home-decoration"],
    "Toys & Baby Care": ["beauty", "skin-care", "sports-accessories"],
  };
  const [selectedCategoryType, setSelectedCategoryType] = useState(categories[category]);
  const [activeTab, setActiveTab] = useState(0); // Tracks the active tab

  useEffect(() => {
    // const categoryData = localStorage.getItem('category');
    // if (categoryData) {
    //   setCategory(categoryData)
    // }
    // console.log("categoryData", categoryData);
    // setSelectedCategoryType(categories[selectedCategory])

    fetchProducts(categories, category, setProducts, setLoading);
    console.log("completeData?.category",completeData?.category);

  }, [/* activeTab */]);


  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className=''>
      {loading ? <CartLoader />
        : <div className='custom-card p-3 m-4 d-flex justify-content-start '>
          <div className="card-body p-auto">
            <div className='d-flex gap-3 align-items-center border-bottom mb-3 pb-1 '>
              <img
                className='text-center category-img '
                src={`assets/img/categories/${completeData?.category?.image_name}`}
                alt={category?.category}
              />
              <p className='fs-4 fw-semibold'>{selectedCategory}</p>
            </div>
            <div className='row row-cols-1 row-cols-lg-5 px-0 row-gap-4'>
              {products?.map((product, index) => product?.category === selectedCategory?.toLowerCase() && (
                <div key={index} className="col py-0">
                  <Grocery product={product} index={index} category={selectedCategory} />
                </div>
              ))}
            </div>
            {Array.isArray(categories[selectedCategory]) &&
              <div className=''>
                <ul className="nav nav-tabs">
                  {categories[selectedCategory].map((item, index) => (
                    <li key={index} className="nav-item">
                      <a className={`nav-link ${activeTab === index ? "active" : ""}`} href="#"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default link behavior
                          handleTabClick(index);
                        }}>{item}</a>
                    </li>
                  ))}
                </ul>
                {Array.isArray(categories[selectedCategory]) && (
                  <div className="tab-pane active row row-cols-4 row-gap-4 p-2 mx-2 mt-1">
                    {products?.map((product, productIndex) => selectedCategoryType[activeTab] == product?.category && (
                      <div className="col" key={productIndex}>
                        <Grocery product={product} index={productIndex} category={selectedCategory} />
                        {console.log("uuuu", product?.category)}

                      </div>
                    ))}
                  </div>
                )}
              </div>
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Groceries