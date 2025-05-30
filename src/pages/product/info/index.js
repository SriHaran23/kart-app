'use client';

import React, { useEffect, useState } from 'react'
import './style.css';
import Offers from '../../../json/offers.json'
// import Offers from '@/app/json/offers.json'
import { generateRandomColor } from '../../../functions';

const DetailsInfo = ({setLoading,product}) => {
    // const [offers, setOffers] = useState({});

    useEffect(() => {
        // const productItem = JSON.parse(localStorage.getItem('productItem'));
        // if (productItem) {
        //     setProduct(productItem)
        // }
    }, []);

    

    // useEffect(() => {
    //     console.log("offers", offers[product?.category]);
    // }, [offers])

    return (
        <div className='details px-3 pb-0'>
            <h4 className='text-capitalize'>{product?.title}</h4>
            <span className={`d-inline-flex rounded gap-1 fs-6 p-1 lh-sm text-light ${product?.rating > 4 ? 'bg-success' : product?.rating >= 2 && product?.rating <= 4 ? 'bg-warning' : 'bg-danger'}`}>
                <p className='fw-semibold mb-0'>{product?.rating?.toFixed(1)}</p>&#9733;
            </span>
            <h4 className='text-capitalize'>₹{(product?.price * 86.55).toFixed(2)}</h4>
            <p className=''>&emsp;{product?.description}</p>
            <span className='d-inline-flex  align-items-center'><i className="bi bi-truck fs-4 px-1"></i></span>
            <h4 className='text-capitalize text-decoration-underline pb-2'>Offers</h4>
            <ul className='border-bottom pb-2'>
                {Offers[product?.category]?.map((offer, index) => {
                    const boldText = "Special Launch Offer:";
                    return (
                        <li key={index}>
                            {offer.startsWith(boldText) ? (
                                <>
                                    <b>{boldText}</b>
                                    {offer.slice(boldText.length)}
                                </>
                            ) : (
                                offer
                            )}
                        </li>
                    );
                })}
            </ul>
            <h4 className='text-capitalize text-decoration-underline pb-2'>reviews</h4>
            {product?.reviews?.map((review, index) => (
                <div key={index} className={`d-flex py-2 ${product?.reviews?.length - 1 > index && 'border-bottom'}`}>
                    <div className='text-center d-flex justify-content-center '>
                        <span className='fw-bold rounded-4 reviewImg' style={{ backgroundColor: generateRandomColor() }}>{review?.reviewerName[0]}</span>
                    </div>
                    <div className='ms-2 review'>
                        <div className='d-flex justify-content-between'>
                            <b className=''>{review?.reviewerName}</b>
                            <div className='d-flex gap-2'>
                                <span className={`d-inline-flex rounded gap-1 fs-6 p-1 lh-sm text-light ${review?.rating > 4 ? 'bg-success' : review?.rating > 2 && review?.rating <= 4 ? 'bg-warning' : 'bg-danger'}`}>
                                    <p className='fw-semibold mb-0'>{review?.rating}</p>&#9733;
                                </span>
                                {/* <StarRating rating={review?.rating} /> */}
                            </div>
                        </div>
                        <p className='text-body-tertiary mb-0' style={{ fontSize: '14px' }}>{review?.reviewerEmail}</p>
                        <p className='mb-0'>{review?.comment}</p>
                    </div>
                </div>
            ))}
            {product?.reviews?.map((review, index) => (
                <div key={index} className={`d-flex py-2 ${product?.reviews?.length - 1 > index && 'border-bottom'}`}>
                    <div className='text-center d-flex justify-content-center '>
                        <span className='fw-bold rounded-4 reviewImg' style={{ backgroundColor: generateRandomColor() }}>{review?.reviewerName[0]}</span>
                    </div>
                    <div className='ms-2 review'>
                        <div className='d-flex justify-content-between'>
                            <b className=''>{review?.reviewerName}</b>
                            {/* <StarRating rating={review?.rating} /> */}
                        </div>
                        <p className='text-body-tertiary mb-0' style={{ fontSize: '14px' }}>{review?.reviewerEmail}</p>
                        <p className='mb-0'>{review?.comment}</p>
                    </div>
                </div>
            ))}
            {product?.reviews?.map((review, index) => (
                <div key={index} className={`d-flex py-2 ${product?.reviews?.length - 1 > index && 'border-bottom'}`}>
                    <div className='text-center d-flex justify-content-center '>
                        <span className='fw-bold rounded-4 reviewImg' style={{ backgroundColor: generateRandomColor() }}>{review?.reviewerName[0]}</span>
                    </div>
                    <div className='ms-2 review'>
                        <div className='d-flex justify-content-between'>
                            <b className=''>{review?.reviewerName}</b>
                            {/* <StarRating rating={review?.rating} /> */}
                        </div>
                        <p className='text-body-tertiary mb-0' style={{ fontSize: '14px' }}>{review?.reviewerEmail}</p>
                        <p className='mb-0'>{review?.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DetailsInfo