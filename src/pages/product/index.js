'use client';

import React, { useEffect, useState } from 'react'
import Details from './details';
import DetailsInfo from './info';
import Offers from '../../json/offers.json'
import CartLoader from '../../components/loader';
import { useLocation, useParams } from 'react-router-dom';
import { getProduct } from '../../functions';
import Images from './images';
import './style.css';

const ItemDetails = () => {
    const { categoryName,productId } = useParams();
    const location = useLocation();

    const [loading, setLoading] = useState(true);
    const [imageIndex, setImagesIndex] = useState(0);
    const [images, setImages] = useState([]);
    const [product, setProduct] = useState();

    useEffect(() => {
        setLoading(true)
        getProduct(productId,setProduct,setLoading)
        if (location?.pathname.split('/')[1] === 'Mobiles') {
            let image = Array.from({ length: 10 }, (_, i) => `/assets/img/mobiles/realme/p1/feather-blue/${i + 1}.jpeg`);
            setImages(image)
        }
        if (Offers) {
            setTimeout(() => {
                setLoading(false)
            }, 3000);
        }
    }, [location,productId]);

    return (
        <div className='page-height'>
            {loading ? <CartLoader /> :
                <div className='d-lg-flex mt-4'>
                    <div className='col-lg-5 pe-0'>
                       <Images categoryName={categoryName} product={product} images={location?.pathname.split('/')[1] === 'Mobiles' ? images :product?.images} imageIndex={imageIndex} setImagesIndex={setImagesIndex} />
                    </div>
                    <div className='col-lg-7 '>
                        <div className='ps-0'>
                            {location?.pathname.split('/')[1] === 'Mobiles' ? <Details /> : <DetailsInfo setLoading={setLoading} product={product} />}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemDetails