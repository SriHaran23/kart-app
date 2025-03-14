'use client';

import React, { useEffect, useState } from 'react'
import realmePrices from '../../json/realmePrices.json';
import './style.css';
import Pagination from '@/app/components/pagintion';
import Filter from './filter';
import Link from 'next/link';
import { getMobiles } from '@/app/functions';

const MobileBrands = () => {
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
        localStorage.setItem('product', JSON.stringify(mobile));
    }


    useEffect(() => {
        let brand = localStorage.getItem('brand');
        const recall = async (brand) => {
            let data = await getMobiles(brand)
            setMobiles(data?.models);
        }

        recall(brand)
    }, []);


    useEffect(() => {
        console.log('products', products);
    }, [products])

    return (
        <div>
            <div className='items-screen d-flex justify-content-around mt-5 p-4 pb-0 gap-3'>
                <div className='custom-card my-2 col-2 scrollable-div d-none d-md-block'>
                    <div className="card-body p-2">
                        <Filter brands={brands} setBrands={setBrands} />
                    </div>
                </div>
                <div className='custom-card ms-2 my-2 scrollable-div'>
                    <div className="card-body p-auto">
                        <div className='d-flex flex-wrap gap-3 p-4'>
                            {currentRecords?.map((mobile, index) => (
                                // <div>
                                <Link key={index} href={'/categories/product'} onClick={() => handleProduct(mobile)} style={{ textDecoration: 'none', color: '#000' }}>
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
                                    <div className='category-item row'>
                                        {/* <Image src='/assets/img/mobiles/realme/1/black/1.jpg' alt="mobile" width={50} height={38} />   */}
                                        <div className='col-4 col-md-2 justify-content-center'>
                                            <img className='mx-auto d-block mbl-img' src='/assets/img/mobiles/realme/1/black/1.jpg' alt="mobile" />
                                        </div>
                                        {/* <div className='d-flex justify-content-around mt-3'> */}
                                        <div className='col-8 col-md-10 d-block d-md-flex specifications'>
                                            <div className=''>
                                                <span className='d-flex flex-wrap fs-5'><h6 className='fs-4 me-2'>{mobile?.Model}</h6> ({mobile?.Specifications?.Performance?.RAM.trim()})</span>
                                                <ul className='d-none d-md-block'>
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
                                    {index < currentRecords.length - 1 && <hr className='mb-0' />}
                                </Link>
                            ))}
                        </div>
                        <div className='mt-3 sticky-bottom bg-white py-2'>
                            <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileBrands