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

const HomePage = () => {
  const [categories, setCategories] = useState(categoriesData?.categories);
  const [isOpen, setIsOpen] = useState(false);
  const [mobiles, setMobiles] = useState(realmeModels?.Models);
  const [prices, setPrices] = useState(realmePrices?.realme_models);
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

    var temp = {...completeData};
    temp['category'] = category;
    console.log("temptemptemp",temp)
    setCompleteData({...completeData,...temp})
    setSelectedCategory(category?.category);
    // localStorage.setItem('mobiles', JSON.stringify(category?.items));
    // localStorage.setItem('category', category?.category);
    console.log('categoryss', category);
    // encryptObject(category)
  };

  useEffect(() => {
    // Fetch the JSON file
    // fetch(categoriesData) // Ensure the correct path
    //   .then((response) => response.json())
    //   .then((data) => setCategories(data.categories))
    //   .catch((error) => console.error("Error loading categories:", error));
    // console.log("categoriesData", categories);
  }, []);


  return (
    <div className='mt-4'>
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
      <div className="custom-card mx-3">
        <div className="card-body">
          <h4 className='m-2 p-2 border-bottom'>Category</h4>
          <ul className='d-flex justify-content-around category py-2'>
            {categories.map((category, index) => (
              <Link key={index} to={`/category/${categoryType[category?.category]}`} style={{ textDecoration: 'none', color: '#000' }}>
                <li /* className='dropdown' */ className={`${index < categories?.length - 1 ? "me-5" : "me-4"} category-item item-size`} onClick={() => handleClick(category, index)}>
                  <span className=''>
                    <div className='d-flex justify-content-center'>
                      <img
                        className='text-center category-img'
                        src={`assets/img/categories/${category.image_name}`}
                        alt={category?.category}
                      />
                    </div>
                    <p className='mb-0 text-end'>{category?.category}</p>
                  </span>
                  {/* <div className="dropdownContent">
                  {category.brands.map((brands, index) => (
                    <p className='' key={index}>{brands}</p>
                  ))}
                </div> */}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <section>
        {categories.map((category, index) => (
          <div key={index} className="custom-card position-relative mx-3 my-4 pb-3">
            <b className='category-name px-1 text-light' style={{ backgroundColor: generateRandomColor(), }}>{category?.category}</b>
            <div className="card-body" style={{ height: '50px' }}>

            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default HomePage