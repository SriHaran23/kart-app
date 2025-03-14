import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import Grocery from './grocery';
import CartLoader from '../../components/loader';
import { fetchProducts } from '../../functions';
import { CategoryContext } from '../../App';

const Groceries = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState();
  const categories = {
    Groceries: "groceries",
    // Mobiles: "smartphones",
    Electronics: ["laptops", "tablets", "mobile-accessories"],
    Fashion: ["mens-shirts", "mens-shoes", "mens-watches", "womens-dresses", "womens-shoes", "womens-watches", "womens-bags", "womens-jewellery", "tops"],
    Appliances: ["kitchen-accessories", "home-decoration"],
    "Home & Furniture": ["furniture", "home-decoration"],
    "Toys & Baby Care": ["beauty", "skin-care", "sports-accessories"],
  };
    const {selectedCategory, setSelectedCategory}= useContext(CategoryContext)
  const [selectedCategoryType, setSelectedCategoryType] = useState(categories[selectedCategory]);
  const [activeTab, setActiveTab] = useState(0); // Tracks the active tab

  useEffect(() => {
    const categoryData = localStorage.getItem('category');
    if (categoryData) {
      setCategory(categoryData)
    }
    console.log("categoryData", selectedCategory);
    setSelectedCategoryType(categories[selectedCategory])

    fetchProducts(categories, categoryData, setProducts, setLoading);
    // console.log("fff",selectedCategoryType[activeTab]);

  }, [/* activeTab */]);


  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className=''>
      {loading ? <CartLoader />
        : <div className='custom-card p-3 m-4 d-flex justify-content-start '>
          <div className="card-body p-auto">
            <h4 className='border-bottom mb-2 pb-2'>{selectedCategory}</h4>
            <div className='row row-cols-5 px-4'>
              {products?.map((product, index) => product?.category === selectedCategory?.toLowerCase() && (
                <div key={index} className="col py-3">
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
                    <div className="tab-pane active row row-cols-4 row-gap-4 p-2 mt-1">
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