'use client';

import React, { useEffect, useState } from 'react'
import './style.css';
import ArrowUp from '@/app/svg/ArrowUp';
import ArrowDown from '@/app/svg/ArrowDown';
import Details from './details';
import DetailsInfo from './info';
import CartLoader from '@/app/components/loader';
import Offers from '../../json/offers.json'

const ItemDetails = () => {
    const [category, setCategory] = useState();
    const [loading, setLoading] = useState(true);
    const [imageIndex, setImagesIndex] = useState(0);
    const [images, setImages] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = images?.slice(indexOfFirstRecord, indexOfLastRecord);

    const nPages = Math.ceil(images?.length / recordsPerPage);

    const handlePageChange = (page) => {
        if (page !== '...' && page !== currentPage) setCurrentPage(page);
    };

    useEffect(() => {
        const categoryData = localStorage.getItem('category');
        const prodectItem = JSON.parse(localStorage.getItem('productItem'));
        setCategory(categoryData)
        if (categoryData != 'Mobiles') {
            setImages(prodectItem?.images)
            console.log("prodectItem?.images", prodectItem);
        }
        else {
            let image = Array.from({ length: 10 }, (_, i) => `/assets/img/mobiles/realme/p1/feather-blue/${i + 1}.jpeg`);
            setImages(image)
        }
        setLoading(true)
        if (Offers) {
            setTimeout(() => {
                setLoading(false)
            }, 3000);
        }
    }, [Offers]);

    return (
        <div className='page-height mt-5'>
            {loading ? <CartLoader /> :
                <div className='d-lg-flex mt-4'>
                    <div className='col-lg-5 pe-0'>
                        <div className='d-flex justify-content-center'>
                            <img className={`${category != 'Mobiles' && 'product-items'}`} src={images[imageIndex]} alt={category} />
                        </div>
                        {currentRecords?.length > 1 &&
                            <div className="d-flex justify-content-between gap-3 ">
                                <div className='d-flex align-items-center'>
                                    <button className={`btn ${currentPage === 1 ? 'disabled btn-outline-secondary' : 'btn-outline-info'}`} style={{ rotate: '90deg' }} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                        <ArrowDown />
                                    </button>
                                </div>
                                <div className="d-flex justify-content-start gap-2" style={{ width: '85%' }}>
                                    {currentRecords.map((src, index) => (
                                        <img key={index} src={src} alt={`Img ${index + 1}`} onClick={() => category !== 'Mobiles' ? setImagesIndex(index) : setImagesIndex(index + 1)} className="carousel-image my-2" />
                                    ))}
                                </div>
                                <div className='d-flex align-items-center'>
                                    <button className={`btn btn-3 ${currentPage === nPages ? 'disabled btn-outline-secondary' : 'btn-outline-info'}`} style={{ rotate: '90deg' }} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === nPages}>
                                        <ArrowUp />
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='col-lg-7 '>
                        <div className='ps-0'>
                            {category == 'Mobiles' ? <Details /> : <DetailsInfo setLoading={setLoading} />}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemDetails