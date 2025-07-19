import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import Grocery from './grocery';
import CartLoader from '../../components/loader';
import { fetchProducts } from '../../functions';
import { CategoryContext, CompleteContext } from '../../App';
import { useParams } from 'react-router-dom';

const Groceries = ({ categoryName }) => {
  // const { categoryName } = useParams();
  const { completeData, setCompleteData } = useContext(CompleteContext)

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const categories = {
    Groceries: "groceries",
    // Mobiles: "smartphones",
    Electronics: ["laptops", "tablets", "mobile-accessories"],
    Fashion: ["mens-shirts", "mens-shoes", "mens-watches", "womens-dresses", "womens-shoes", "womens-watches", "womens-bags", "womens-jewellery", "tops"],
    Appliances: ["kitchen-accessories", "home-decoration"],
    "Home & Furniture": ["furniture", "home-decoration"],
    "Toys & Baby Care": ["beauty", "skin-care", "sports-accessories"],
  };
  const [selectedCategoryType, setSelectedCategoryType] = useState([]);
  const [activeTab, setActiveTab] = useState(0); // Tracks the active tab


  useEffect(() => {
    // const categoryData = localStorage.getItem('category');
    // if (categoryData) {
    //   setCategory(categoryData)
    // }
    // setSelectedCategoryType(categories[selectedCategory])
    // console.log('categoryName',selectedCategoryType,categories[categoryName?.category]);
    setSelectedCategoryType(categories[categoryName?.category])
    fetchProducts(categories, categoryName?.category, setProducts, setLoading);

  }, [categoryName]);


  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(()=>{
    var filteredProdects = products.filter((el)=>el?.category === categoryName?.category?.toLowerCase())
    console.log('filteredProdects',filteredProdects);
    
  },[products])

  return (
    loading ? <CartLoader />
      : <div className='d-flex flex-column justify-content-start '>
          <div className='container-fluid'>
            <div className='row row-cols-1 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5  justify-content-start row-gap-4'>
              {products?.map((product, index) => product?.category === categoryName?.category?.toLowerCase() && (
                <div key={index} className="col py-0">
                  <Grocery product={product} index={index} categoryName={categoryName?.category} />
                </div>
              ))}
            </div>
          </div>
          {Array.isArray(categories[categoryName?.category]) &&
            <div className=''>
              <ul className="nav nav-tabs">
                {categories[categoryName?.category].map((item, index) => (
                  <li key={index} className="nav-item">
                    <a className={`nav-link ${activeTab === index ? "active" : ""}`} href="#"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default link behavior
                        handleTabClick(index);
                      }}>{item}</a>
                  </li>
                ))}
              </ul>
              <div className="tab-pane active row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-gap-4 p-2 mx-2 mt-1">
                {/* {console.log('sdfx',activeTab)} */}
                {products?.map((product, productIndex) => selectedCategoryType[activeTab] == product?.category && (
                  <div className="col" key={productIndex}>
                    <Grocery product={product} index={productIndex} category={categoryName} />

                  </div>
                ))}
              </div>
            </div>
          }
      </div>

  )
}

export default Groceries