import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { decryptObject } from '../../functions';

const Grocery = ({ product, index }) => {

    useEffect(() => {
      const decrypted = decryptObject()
      console.log("decrypted",decrypted);
      
    }, [])
    

    const handleClick = (product, index) => {
        localStorage.setItem('productItem', JSON.stringify(product));
    };
    return (
        <Link className='w-100 h-100' href={'/categories/product'} style={{ textDecoration: 'none', color: '#000' }}>
            <div className="custom-card1 h-100 position-relative" onClick={() => handleClick(product, index)} >
                <div className="card-img-container" style={{ position: 'relative', height: '220px' }}>
                    <img
                        src={product?.thumbnail}
                        className="card-img-top"
                        alt="Card image"
                        style={{
                            // width: 'auto',
                            // height: '200px',
                            // objectFit: 'contain',
                            position: 'relative',
                            top: 0,
                            left: 0,
                        }}
                    />
                </div>
                <div className="card-body">
                    <div className="card-text pb-2"
                        style={{
                            position: 'relative',
                            width: '100%',
                            background: '#fff', // Optional: for a slight dark overlay effect
                            textAlign: 'center',
                        }}>
                        <p className='header bg-primary text-capitalize d-flex justify-content-center align-items-center py-2 fw-medium' >{product?.title}</p>
                        <div className='d-block flex-fill h-100 align-items-end'>
                        <p className='mb-0'><strong>Starting from</strong> ${product?.price}*</p>
                        <p className=''>*including coupon offer</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Grocery