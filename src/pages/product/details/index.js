'use client';

import React, { useEffect, useState } from 'react'
import pricesJson from '../../../json/realmePrices'
import colorJson from '../../../json/color'
import './style.css';
import SpecificationsCategory from './specifications';
import Info from './info';
import { getMobile } from '../../../functions';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {brand,modal} = (useParams());
    const [mobiles, setMobiles] = useState([]);
    const [features, setFeatures] = useState({
        color: [],
        ram: [],
        storage: [],
        offers: pricesJson?.offers,
        prices: pricesJson?.realme_models[0],
        saving: []
    });
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        getMobile(brand,modal,setMobiles)
    }, [brand,modal]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        let colorArray = mobiles?.Specifications?.General?.Colours?.split(", ")
        features.color = colorArray?.map(item => {
            return colorJson[item]
        });;
        features.ram = mobiles?.Specifications?.Performance?.RAM?.split(", ");
        features.storage = mobiles?.Specifications?.Performance?.Internal_Storage?.split(", ");
        features.saving = parseInt(pricesJson?.realme_models[0]?.original_price?.replace(/₹|,/g, ""), 10) - parseInt(pricesJson?.realme_models[0]?.price?.replace(/₹|,/g, ""), 10);;
        setFeatures({ ...features })
    }, [mobiles])
useEffect(() => {
  console.log("features",features);
  
}, [features])

    return (
        <div className='details px-3 pb-0'>
            <Info mobiles={mobiles} features={features} />
            <div className='border border-1 m-2 px-3 py-2'>
                <div
                    style={{
                        height: isExpanded ? "auto" : "285px",
                        overflow: "hidden",
                        transition: "height 0.3s ease",
                        position: "relative"
                    }}
                >
                    <h4>Specifications</h4>
                    <hr className='fw-bold' />
                    <SpecificationsCategory title="General Features" data={mobiles?.Specifications?.General} />
                    <SpecificationsCategory title="Display Features" data={mobiles?.Specifications?.Display} />
                    <SpecificationsCategory title="Processor Features" data={mobiles?.Specifications?.Performance} />
                    <SpecificationsCategory title="Camera Features" data={mobiles?.Specifications?.Camera} />
                    <SpecificationsCategory title="Sensors Features" data={mobiles?.Specifications?.Sensors} />
                    <SpecificationsCategory title="Connectivity Features" data={mobiles?.Specifications?.Connectivity} />
                    <SpecificationsCategory last={true} title="Other Features" data={mobiles} />
                    {!isExpanded && (
                        <div className='specifications-bottom'></div>
                    )}
                </div>
                <button
                    onClick={toggleExpand}
                    className={`btn btn-outline-${isExpanded ? "warning" : "success"} mt-3`}
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            </div>
            <div className='row gap-3 p-3 pb-2 sticky-bottom bg-white'>
                <button type="button" className="col d-flex gap-2 justify-content-center align-items-center btn btn-outline-warning fs-5 fw-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                    </svg>
                    Add to cart
                </button>
                <button type="button" className="col btn btn-outline-info fs-5 fw-semibold">
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default Details