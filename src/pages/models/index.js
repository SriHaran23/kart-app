import React, { useEffect, useState } from 'react'
import realmePrices from '../../json/realmePrices.json';
import './style.css';
import Filter from './filter';
import Pagination from '../../components/pagintion';
import { getMobiles } from '../../functions';
import { Link, useParams } from 'react-router-dom';

const MobileBrands = () => {
    const { brandName } = useParams();
    const [mobiles, setMobiles] = useState([]);
    const [products, setProducts] = useState([]);
    const [prices, setPrices] = useState(realmePrices?.realme_models);
    const [brands, setBrands] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = mobiles?.slice(indexOfFirstRecord, indexOfLastRecord);

    const nPages = Math.ceil(mobiles?.length / recordsPerPage);

    const handleProduct = (mobile) => {
        // localStorage.setItem('product', JSON.stringify(mobile));
    }


    useEffect(() => {
        const recall = async () => {
            console.log("llaa",brandName);
            let data = await getMobiles(brandName)
            
            setMobiles(data?.Models);
        }

        recall()
    }, []);


    useEffect(() => {
        console.log('products', products);
    }, [products])

    return (
        <div className='d-flex align-items-center h-100'>
        <div id='items-screen' className='container d-flex justify-content-evenly pb-0 gap-3 px-3'>
            <div className='custom-card my-2 col-2 '>
                <div className="card-body p-2 scrollable-div">
                    <Filter brands={brands} setBrands={setBrands} />
                </div>
            </div>
            <div className='custom-card flex-fill my-2 '>
                <div className="card-body p-auto scrollable-div">
                    <div className='d-block align-self-stretch gap-3 p-4 z-0'>
                        {currentRecords?.map((mobile, index) => (
                            // <div>
                            <Link key={index} to={`/Mobiles/${brandName}/${mobile?.Model?.replaceAll(' ','_')}`} onClick={() => handleProduct(mobile)} style={{ textDecoration: 'none', color: '#000' }}>
                                {/* <span className=''>
                                    <div className='d-flex justify-content-center'>
                                        <img
                                            className='text-center'
                                            // src={'assets/img/categories/mobiles_and_accessories.jpg'}
                                            src={`/assets/img/mobiles/realme/1/black/1.jpg`}
                                            alt={mobile?.model}
                                            style={{ width: "150px", height: "150px" }}
                                        />
                                    </div>
                                    <p className='mb-0 text-center text-capitalize'>{mobile?.brand}</p>
                                </span> */}
                                <div className='category-item1 row'>
                                    {/* <Image src='/assets/img/mobiles/realme/1/black/1.jpg' alt="mobile" width={50} height={38} />   */}
                                    <div className='col-4 col-md-3 d-flex justify-content-center'>
                                        <img className='mx-auto mbl-img' src='/assets/img/mobiles/realme/1/black/1.jpg' alt="mobile" />
                                    </div>
                                    {/* <div className='d-flex justify-content-around mt-3'> */}
                                    <div className='col-8 col-md-9 d-block d-md-flex specifications'>
                                        <div className=''>
                                            <span className='d-flex flex-wrap fs-4'><h6 className='fs-3 me-2'>{mobile?.Model}</h6> ({mobile?.Specifications?.Performance?.RAM.trim()})</span>
                                            <ul className='d-none d-md-block '>
                                                <li>Colors: {mobile?.Specifications?.General?.Colours}</li>
                                                <li>{mobile?.Specifications?.Camera?.RearCamera} | {mobile?.Specifications?.Camera?.FrontCamera} Front Camera</li>
                                                <li>{mobile?.Specifications?.Battery?.Capacity} Battery</li>
                                                <li>{mobile?.Specifications?.Performance?.Processor} Processor</li>
                                                <li>1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories</li>
                                            </ul>
                                        </div>
                                        {prices?.map((price, index2) => (
                                            price?.model === mobile?.Model && (
                                                <div key={index2} className=''>
                                                    <h4 className='mb-0'> {price?.price}</h4>
                                                    <b className='mb-0 text-success'>
                                                        <span className='text-secondary text-decoration-line-through'>{price?.original_price}</span> {price?.discount} off</b>
                                                    <p className='mb-0'>Free delivery</p>
                                                    <p className='mb-0 text-success'>Save extra with combo offers</p>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                    {/* </div> */}
                                </div>
                                {index < currentRecords.length - 1 && <hr className='' />}
                            </Link>
                        ))}
                    </div>
                </div>
                    <div className='bottom-bar bg-white rounded pt-2'>
                        <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </div>
            </div>
        </div>
        </div>
    )
}

export default MobileBrands