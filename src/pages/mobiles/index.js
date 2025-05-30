import React, { useContext, useEffect, useState } from 'react'
import realmeModels from '../../json/realmeModels.json';
import realmePrices from '../../json/realmePrices.json';
import './style.css';
import Pagination from '../../components/pagintion';
import { CompleteContext } from '../../App';
import { Link, useParams } from 'react-router-dom';
// import PriceRange from '../../components';
// import { useData } from '../../context/DataContext';

const MobileCategory = () => {
      const { categoryName } = useParams();
    
    const [mobilesBrands, setMobilesBrands] = useState([]);
    const [prices, setPrices] = useState(realmePrices?.realme_models);
      const { completeData, setCompleteData } = useContext(CompleteContext)

    // const { data, setData } = useData() || {};
    // console.log('data:', data, 'setData:', setData);

    // const [currentPage, setCurrentPage] = useState(1);
    // const recordsPerPage = 3;
    // const indexOfLastRecord = currentPage * recordsPerPage;
    // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    // const currentRecords = mobilesBrands?.slice(indexOfFirstRecord, indexOfLastRecord);

    // const nPages = Math.ceil(mobilesBrands?.length / recordsPerPage);

    useEffect(() => {
        const mobile = localStorage.getItem('mobiles');
        if (mobile) {
            setMobilesBrands(JSON.parse(mobile))
        }
    }, []);
    useEffect(() => {
        console.log("mobilesBrands", mobilesBrands);
        console.log("realmeModels", realmeModels);
    }, [mobilesBrands])

    const handleClick = (mobile, index) => {
        // setData(category?.items?.models);
        // localStorage.setItem('mobileBrand', JSON.stringify(mobilesBrands[0]?.models));
        // localStorage.setItem('brand', mobile?.brand);
        console.log('mobile', mobile?.brand);
    };

    return (
        <div className='mbl-category mb-4 '>
            {/* <div className="d-flex items-screen py-2">
                    <div className='custom-card  ms-2 me-2 p-2'>
                        <div className="card-body scrollable-div category-item">
                            <h4>Price</h4>
                            <span className='mb-2'>₹{minValue} - ₹{maxValue}</span>
                            <PriceRange />
                        </div>
                    </div> */}
                <div className='row justify-content-start row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-gap-4 mx-auto'>
                    {completeData?.category?.items?.map((mobile, index) => (
                        <div key={index} className="col">
                            <div className="custom-card w-100" onClick={() => handleClick(mobile, index)} >
                                <Link className='' to={`/Mobiles/${mobile?.brand}`} style={{ textDecoration: 'none', color: '#000' }}>
                                    <div className="card-img-container" style={{ position: 'relative', height: '150px' }}>
                                        <img
                                            src={`/assets/img/mobiles/thumbnails/${mobile?.brand}.jpg`}
                                            alt="thumbnail"
                                            style={{
                                                width: '100%',
                                                height: '180px',
                                                objectFit: 'contain',
                                                position: 'relative',
                                                top: "15%",
                                                left: 0,
                                            }}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <div className="card-text position-relative pb-2 w-100 bg-light text-center">
                                            <h4 className='header bg-primary text-capitalize p-1'>{mobile?.brand}</h4>
                                            <p className='mb-0 fs-6'><strong>Starting from</strong>₹{mobile?.starting_price}*</p>
                                            <p className=''>*including coupon offer</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div >
                        // <div className='custom-card1' key={index}>
                        //     <div className="card-body">
                        //         <div className="header">
                        //             <p className='mb-0'>50 MP AI camera</p>
                        //         </div>
                        //         <div className="content">
                        //             <p className="model mb-0 text-capitalize">{mobile?.brand}</p>
                        //             <p className="mb-0">{mobile?.ram}</p>
                        //             <p className="mb-0">{mobile?.rom}</p>
                        //             <div className="phone-image">
                        //                 <img
                        //                     className='text-center'
                        //                     // src={'assets/img/categories/mobilesBrands_and_accessories.jpg'}
                        //                     src={`/assets/img/mobiles/thumbnails/${mobile?.brand}.jpg`}
                        //                     alt={mobile?.brand}
                        //                     style={{ width: "150px", height: "150px" }}
                        //                 />
                        //             </div>
                        //             <div className="price">
                        //                 <p className='mb-0'>Starting from</p>
                        //                 <p className='mb-0'>₹{mobile?.starting_price}*</p>
                        //                 <p className=''>*including coupon offer</p>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        // <div key={index}>
                        //     <span className=''>
                        //         <div className='d-flex justify-content-center'>
                        //             <img
                        //                 className='text-center'
                        //                 // src={'assets/img/categories/mobilesBrands_and_accessories.jpg'}
                        //                 src={`/assets/img/mobiles/thumbnails/${mobile?.brand}.jpg`}
                        //                 alt={mobile?.brand}
                        //                 style={{ width: "150px", height: "150px" }}
                        //             />
                        //         </div>
                        //         <p className='mb-0 text-center text-capitalize'>{mobile?.brand}</p>
                        //     </span>
                        //     {/* {mobile?.Specifications?.General?.Colours.split(",").map((color, index1) => (
                        //     <div key={index1} className='category-item d-flex py-2'>
                        //         {/* <Image src='/assets/img/mobiles/realme/1/black/1.jpg' alt="mobile" width={50} height={38} />  
                        //         <div className="image-wrapper d-flex align-items-stretch">
                        //             <img className='w-100' src='/assets/img/mobiles/realme/1/thumbnail.jpg' alt="mobile" />
                        //         </div>
                        //         <div className='d-flex justify-content-around mt-3'>
                        //             <div className='mx-3'>
                        //                 <h6>{mobile?.Model} ( {color.trim()}, {mobile?.Specifications?.Performance?.RAM.trim()} )</h6>
                        //                 <div>
                        //                     <ul>

                        //                         <li>{mobile?.Specifications?.Camera?.RearCamera} | {mobile?.Specifications?.Camera?.FrontCamera} Front Camera</li>
                        //                         <li>{mobile?.Specifications?.Battery?.Capacity} Battery</li>
                        //                         <li>{mobile?.Specifications?.Performance?.Processor} Processor</li>
                        //                         <li>1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories</li>
                        //                     </ul>
                        //                 </div>
                        //             </div>
                        //             {prices?.map((price, index2) => (
                        //                 price?.model === mobile?.Model && (
                        //                     <div key={index2} className='w-25'>
                        //                         <h4 className='mb-0'> {price?.price}</h4>
                        //                         <b className='mb-0 text-success'>
                        //                             <span className='text-muted text-decoration-line-through'>{price?.original_price}</span> {price?.discount} off</b>
                        //                         <p className='mb-0'>Free delivery</p>
                        //                     </div>
                        //                 )
                        //             ))}
                        //         </div>
                        //     </div>
                        // ))} */}
                        // </div>
                    ))}
                </div>
            {/* </div> */}
            {/* <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
        </div>
    )
}

export default MobileCategory