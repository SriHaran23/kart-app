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
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext)
  const { completeData, setCompleteData } = useContext(CompleteContext)
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

    var temp = { ...completeData };
    temp['category'] = category;
    console.log("temptemptemp", temp, completeData)
    setCompleteData({ ...completeData, ...temp })
    setSelectedCategory(category?.category);
    setCategory(category)
    // localStorage.setItem('mobiles', JSON.stringify(category?.items));
    // localStorage.setItem('category', category?.category);
    console.log('categoryss', category);
    // encryptObject(category)
  };

  useEffect(() => {
    console.log(";;;;;;;;", category);

  }, [category])
  return (
    <div className=''>
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
      <div className='d-flex flex-column flex-column flex-lg-row'>
        <div className="custom-card category mx-3 p-2">
          <div className="card-body h-100">
            {/* <h4 className='m-2 p-2 border-bottom'>Category</h4> */}
            <ul className='d-flex flex-lg-column  justify-content-between h-100 ps-0 py-2 mb-0'>
              {categoriesData?.categories.map((category, index) => (
                // <Link key={index} to={`/category/${category?.category}`} className='d-flex justify-content-center' style={{ textDecoration: 'none', color: '#000' }}>
                <li key={index} /* className='dropdown' */ className={` categories-item item-size`} onClick={() => handleClick(category, index)}>
                  <span className=''>
                    <div className=''>
                      <img
                        className='text-center category-img'
                        src={`assets/img/categories/${category.image_name}`}
                        title={category?.category}
                        alt={category?.category}
                      />
                    </div>
                    <p className='mb-0 text-end d-lg-none'>{category?.category}</p>
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
        <div className='custom-card content-main'>
          <div className='content-div'>
            {console.log("fgh", category)}
            {
              category?.category === 'Mobiles'
                ? <MobileCategory categoryName={category} />
                : <Groceries categoryName={category} />
            }
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