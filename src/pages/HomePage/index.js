import React, { useContext, useEffect, useState } from 'react'
import './style.css';
import categoriesData from '../../json/items.json';
import realmeModels from '../../json/realmeModels.json';
import realmePrices from '../../json/realmePrices.json';
// import { useData } from '../../context/DataContext';
// import { useData } from '../../context/DataContext';
import { encryptObject, generateRandomColor } from '../../functions';
import { Link, useNavigate } from 'react-router-dom'
import { CategoryContext, CompleteContext } from '../../App';
import CategoryPage from '../CategoryPage';
import MobileCategory from '../mobiles';
import Groceries from '../grocery';

const HomePage = () => {
  const [category, setCategory] = useState(categoriesData?.categories[0]);
  // const { data, setData } = useData() || {};
  const navigate = useNavigate()
  const [selectedIndex, setSelectedIndex] = useState(0);
  const categoryType = {
    Groceries: "grocery",
    Mobiles: "mobiles",
    Electronics: "electronics",
    Fashion: "fashion",
    Appliances: "appliances",
    "Home & Furniture": "furniture",
    "Toys & Baby Care": "babyCare"
  };
  const handleSearchChange = (e) => {
    // setSearchTerm(e.target.value);
  };

  const handleClick = (category, index) => {
    setSelectedIndex(index);

    setCategory(category)
  };

  return (
    <div className='home-page h-100'>
      <div className='d-flex d-md-none justify-content-center '>
        <form className='d-flex search-input-container mx-3 my-1'>
          <input type="text" name="search" placeholder="Search..." className="search-input rounded-pill flex-fill" />
          <span className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </span>
        </form>
      </div>
      <div className='d-flex flex-column flex-column flex-lg-row p-3 gap-3 h-100'>
        <div className="custom-card category h-100">
          <div className="card-body h-100">
            {/* <h4 className='m-2 p-2 border-bottom'>Category</h4> */}
            <ul className='d-flex flex-lg-column justify-content-between position-relative h-100 p-2 mb-0'>
              <div
                className="selection-indicator"
                style={{
                  top: `${selectedIndex * 78}px`,  // dynamically adjust
                  height: `70px`
                }}
              ></div>
              {categoriesData?.categories.map((category, index) => (
                // <Link key={index} to={`/category/${category?.category}`} className='d-flex justify-content-center' style={{ textDecoration: 'none', color: '#000' }}>
                <li key={index} /* className='dropdown' */ className={` categories-item item-size ${index === selectedIndex ? 'selected' : ''}`} onClick={() => handleClick(category, index)}>
                  <span className='d-flex flexx-column align-items-center'>
                    <img
                      className='text-center category-img'
                      src={`assets/img/categories/${category.image_name}`}
                      title={category?.category}
                      alt={category?.category}
                    />
                    {/* <span className='w-100'>
                      <p className='mb-0 text-truncate text-center' style={{width:"90px"}}>{category?.category}</p>
                    </span> */}
                  </span>
                  {/* <div className="dropdownContent">
                  {category.brands.map((brands, index) => (
                    <p className='' key={index}>{brands}</p>
                  ))}
                </div> */}
                </li>
                // </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className='custom-card content-main h-100'>
          <div className='content-div p-3 pt-2'>
            <div className='d-flex gap-3 align-items-center border-bottom position-sticky mb-3 pb-1 '>
              <img
                className='text-center category-img'
                src={`assets/img/categories/${category.image_name}`}
                title={category?.category}
                alt={category?.category}
              />
              <h4 className='fw-semibold mb-0'>{category?.category}</h4>
            </div>
            <div>
              {
                category?.category === 'Mobiles'
                  ? <MobileCategory categoryName={category} />
                  : <Groceries categoryName={category} />
              }
            </div>
            {/* <CategoryPage categoryName={category}/> */}
          </div>
        </div>
      </div>
      {/* <section>
        {categories.map((category, index) => (
          <div key={index} className="custom-card position-relative mx-3 my-4 pb-3">
            <b className='category-name px-1 text-light' style={{ backgroundColor: generateRandomColor(), }}>{category?.category}</b>
            <div className="card-body" style={{ height: '50px' }}>

            </div>
          </div>
        ))}
      </section> */}
    </div>
  )
}

export default HomePage