import React, { useContext, useEffect, useState } from 'react';
import { fetchProducts } from '../../functions';
import { CategoryContext, CompleteContext } from '../../App';
import realmePrices from '../../json/realmePrices.json';
import './style.css';

const Categories = () => {
  const { selectedCategory } = useContext(CategoryContext);
  const { completeData } = useContext(CompleteContext);

  const [products, setProducts] = useState([]);
  const [mobilesBrands, setMobilesBrands] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);

  const categories = {
    Groceries: "groceries",
    Electronics: ["laptops", "tablets", "mobile-accessories"],
    Fashion: ["mens-shirts", "mens-shoes", "mens-watches", "womens-dresses", "womens-shoes", "womens-watches", "womens-bags", "womens-jewellery", "tops"],
    Appliances: ["kitchen-accessories", "home-decoration"],
    "Home & Furniture": ["furniture", "home-decoration"],
    "Toys & Baby Care": ["beauty", "skin-care", "sports-accessories"],
  };

  const categoryName = completeData?.category?.category;
  const categoryItems = completeData?.category?.items || [];
  const selectedCategoryType = categories[categoryName];

  useEffect(() => {
    fetchProducts(categories, categoryName, setProducts, setLoading);
    const stored = localStorage.getItem('mobiles');
    if (stored) setMobilesBrands(JSON.parse(stored));
  }, []);

  // const handleMobileClick = (mobile) => {
  //   localStorage.setItem('mobileBrand', JSON.stringify(mobilesBrands[0]?.models));
  //   localStorage.setItem('brand', mobile?.brand);
  // };

  return (
    <div className="custom-card p-3 m-4">
      <div className="card-body">
        {/* Header */}
        <div className="d-flex gap-3 align-items-center border-bottom mb-3 pb-1">
          <img
            className="category-img"
            src={`assets/img/categories/${completeData?.category?.image_name}`}
            alt={categoryName}
          />
          <p className="fs-4 fw-semibold">{selectedCategory}</p>
        </div>

        {/* Mobile Brands */}
        {categoryItems.length > 0 && (
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-gap-4">
            {categoryItems.map((mobile, i) => (
              <div key={i} className="col">
                <div className="custom-card w-100" /* onClick={() => handleMobileClick(mobile)} */>
                  <div style={{ height: '150px', position: 'relative' }}>
                    <img
                      src={`/assets/img/mobiles/thumbnails/${mobile?.brand}.jpg`}
                      alt={mobile?.brand}
                      style={{ width: '100%', height: '180px', objectFit: 'contain', position: 'relative', top: '15%' }}
                    />
                  </div>
                  <div className="bg-light text-center">
                    <h4 className="bg-primary text-capitalize p-1">{mobile?.brand}</h4>
                    <p className="mb-0 fs-6"><strong>Starting from</strong> ₹{mobile?.starting_price}*</p>
                    <p className="mb-0">*including coupon offer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Products - Single Category (like groceries) */}
        {typeof selectedCategoryType === 'string' && (
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 row-gap-4 mt-3">
            {products.filter(p => p.category === selectedCategoryType).map((p, i) => (
              <div key={i} className="col">
                <div className="custom-card p-2 h-100">
                  <img src={p.image} alt={p.title} style={{ height: 120, objectFit: 'contain', width: '100%' }} />
                  <p className="fw-semibold mt-2">{p.title}</p>
                  <p className="text-muted mb-0">₹{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Products with Tabs (like fashion, electronics) */}
        {Array.isArray(selectedCategoryType) && (
          <>
            <ul className="nav nav-tabs mt-4">
              {selectedCategoryType.map((item, idx) => (
                <li key={idx} className="nav-item">
                  <a
                    href="#"
                    className={`nav-link ${activeTab === idx ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(idx);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="tab-pane active row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-gap-4 mt-3">
              {products.filter(p => p.category === selectedCategoryType[activeTab]).map((p, i) => (
                <div key={i} className="col">
                  <div className="custom-card p-2 h-100">
                    <img src={p.image} alt={p.title} style={{ height: 120, objectFit: 'contain', width: '100%' }} />
                    <p className="fw-semibold mt-2">{p.title}</p>
                    <p className="text-muted mb-0">₹{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Categories;
