import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const Grocery = ({ product, index }) => {
  const { categoryName } = useParams();

    const handleClick = (product, index) => {
        // localStorage.setItem('productItem', JSON.stringify(product));
    };
    return (
        <Link className='w-100 h-100' to={`/category/${categoryName}/${product?.id}`} style={{ textDecoration: 'none', color: '#000' }}>
            <div className="custom-card1 h-100 position-relative" onClick={() => handleClick(product, index)} >
                <div className="card-img-container" style={{ position: 'relative', height: '220px' }}>
                    <img
                        src={product?.thumbnail}
                        className="card-img-top"
                        alt="thumbnail"
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
                        <p className='customcard-header bg-primary text-capitalize fw-medium mb-0'>{product?.title}</p>
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