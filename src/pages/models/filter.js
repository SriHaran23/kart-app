'use client';

import React, { useEffect, useState } from 'react'
import categoriesData from '../../json/items.json';
import './style.css';
import ArrowUp from '../../svg/ArrowUp';
import ArrowDown from '../../svg/ArrowDown';

const Filter = ({ brands, setBrands }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        console.log('ddddddddddddddddddddd', categoriesData?.categories[1]);

        // Extract brands
        const extractedBrands = categoriesData?.categories[1]?.items.map(item => item.brand);

        // Create array with brand and isSelected keys
        const brandsWithSelection = extractedBrands?.map(brand => ({
            brand,
            isSelected: false, // Default to false
        }));

        // Set state with the new structure
        setBrands(brandsWithSelection);

        console.log('rrrrrrrrrrrr', brandsWithSelection);
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleCheckboxChange = (index) => {
        const updatedBrands = brands.map((brand, i) =>
            i === index ? { ...brand, isSelected: !brand.isSelected } : brand
        );
        setBrands(updatedBrands);
    };

    return (
        <div>
            <h4>Filters</h4>
            <hr className='m-0' />
            {/* <div className="accordion accordion-flush" id="accordionFlushExample"> */}
            {/* Accordion Item 1 */}
            {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                        >Brands</button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body">
                            {brands?.map((brand, index) => (
                                <div key={index}>
                                    <input
                                        className='checkBox'
                                        type="checkbox"
                                        id={brand?.brand}
                                        name={brand?.brand}
                                        value={brand?.brand}
                                        checked={brand?.isSelected}
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                    <label htmlFor={brand?.brand}> {brand?.brand}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            <div className="accordion mt-3">
                {/* Brands */}
                <div className="accordion-item">
                    <div
                        className="accordion-header"
                        onClick={() => toggleAccordion(0)}
                    >
                        Brands <div className='ms-auto'>{activeIndex === 0 ? <ArrowUp /> : <ArrowDown />}</div>
                    </div>
                    <div className={`accordion-body flex-wrap gap-2 ${activeIndex === 0 ? 'show' : ''}`}>
                        {brands?.map((brand, index) => (
                            <div className='d-flex align-items-center' key={index}>
                                <input
                                    className='checkBox'
                                    type="checkbox"
                                    id={brand?.brand}
                                    name={brand?.brand}
                                    value={brand?.brand}
                                    checked={brand?.isSelected}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                <label className='text-capitalize ms-1' htmlFor={brand?.brand}> {brand?.brand}</label>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Rating */}
                <div className="accordion-item">
                    <div
                        className="accordion-header"
                        onClick={() => toggleAccordion(1)}
                    >
                        Rating <div className='ms-auto'>{activeIndex === 1 ? <ArrowUp /> : <ArrowDown />}</div>
                    </div>
                    <div className={`accordion-body ${activeIndex === 1 ? 'show' : ''}`}>
                        <div className='d-flex align-items-center'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                id="fourStars"
                                name="fourStars"
                                value="4★ & above"
                            />
                            <label className='text-capitalize ms-1' htmlFor="fourStars">4★ & above</label>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                id="threeStars"
                                name="threeStars"
                                value="3★ & above"
                            />
                            <label className='text-capitalize ms-1' htmlFor="threeStars">3★ & above</label>
                        </div>
                    </div>
                </div>
                {/* RAM */}
                <div className="accordion-item">
                    <div
                        className="accordion-header"
                        onClick={() => toggleAccordion(2)}
                    >
                        RAM <div className='ms-auto'>{activeIndex === 2 ? <ArrowUp /> : <ArrowDown />}</div>
                    </div>
                    <div className={`accordion-body ${activeIndex === 2 ? 'show' : ''}`}>
                        <div className='d-flex align-items-center'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                id="threeGB"
                                name="threeGB"
                                value="3GB"
                            />
                            <label className='text-capitalize ms-1' htmlFor="threeGB">3GB</label>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                id="fourGB"
                                name="fourGB"
                                value="4GB"
                            />
                            <label className='text-capitalize ms-1' htmlFor="fourGB">4GB</label>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                id="sixGB"
                                name="sixGB"
                                value="6GB"
                            />
                            <label className='text-capitalize ms-1' htmlFor="sixGB">6GB</label>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                id="eightGB"
                                name="eightGB"
                                value="8GB & above"
                            />
                            <label className='text-capitalize ms-1' htmlFor="eightGB">8GB & above</label>
                        </div>
                    </div>
                </div>
                {/* Storage */}
                <div className="accordion-item">
                    <div
                        className="accordion-header"
                        onClick={() => toggleAccordion(3)}
                    >
                        Internal Storage <div className='ms-auto'>{activeIndex === 3 ? <ArrowUp /> : <ArrowDown />}</div>
                    </div>
                    <div className={`accordion-body ${activeIndex === 3 ? 'show' : ''}`}>
                        <div className='d-flex align-items-center'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                id="sixteenToThirtyOne"
                                name="sixteenToThirtyOne"
                                value="16 - 31.9 GB"
                            />
                            <label className='text-capitalize ms-1' htmlFor="sixteenToThirtyOne">16 - 31.9 GB</label>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                id="thirtyTwoToSixtyThree"
                                name="thirtyTwoToSixtyThree"
                                value="32 - 63.9 GB"
                            />
                            <label className='text-capitalize ms-1' htmlFor="thirtyTwoToSixtyThree">32 - 63.9 GB</label>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                id="sixtyFourToOneTwentySeven"
                                name="sixtyFourToOneTwentySeven"
                                value="64 - 127.9 GB"
                            />
                            <label className='text-capitalize ms-1' htmlFor="sixtyFourToOneTwentySeven">64 - 127.9 GB</label>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                id="oneTwentyEightToTwoFiftyFive"
                                name="oneTwentyEightToTwoFiftyFive"
                                value="128 - 255.9 GB"
                            />
                            <label className='text-capitalize ms-1' htmlFor="oneTwentyEightToTwoFiftyFive">128 - 255.9 GB</label>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                id="twoFiftySixAbove"
                                name="twoFiftySixAbove"
                                value="256 GB & Above"
                            />
                            <label className='text-capitalize ms-1' htmlFor="twoFiftySixAbove">256 GB & Above</label>
                        </div>
                    </div>
                </div>
                {/* Battery capacity */}
                <div className="accordion-item">
                    <div
                        className="accordion-header"
                        onClick={() => toggleAccordion(4)}
                    >
                        Battery Capacity <div className='ms-auto'>{activeIndex === 4 ? <ArrowUp /> : <ArrowDown />}</div>
                    </div>
                    <div className={`accordion-body ${activeIndex === 4 ? 'show' : ''}`}>
                        <div className='d-flex align-items-center'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                id="threeThousandToThreeNineNineNine"
                                name="threeThousandToThreeNineNineNine"
                                value="3000 - 3999 mAh"
                            />
                            <label className='text-capitalize ms-1' htmlFor="threeThousandToThreeNineNineNine">3000 - 3999 mAh</label>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                id="fourThousandToFourNineNineNine"
                                name="fourThousandToFourNineNineNine"
                                value="4000 - 4999 mAh"
                            />
                            <label className='text-capitalize ms-1' htmlFor="fourThousandToFourNineNineNine">4000 - 4999 mAh</label>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                id="fiveThousandToFiveNineNineNine"
                                name="fiveThousandToFiveNineNineNine"
                                value="5000 - 5999 mAh"
                            />
                            <label className='text-capitalize ms-1' htmlFor="fiveThousandToFiveNineNineNine">5000 - 5999 mAh</label>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                id="fiveThousandAbove"
                                name="fiveThousandAbove"
                                value="5000 mAh Above"
                            />
                            <label className='text-capitalize ms-1' htmlFor="fiveThousandAbove">5000 mAh Above</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Filter