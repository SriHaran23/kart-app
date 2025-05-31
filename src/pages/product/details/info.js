import React from 'react'

const Info = ({mobiles,features}) => {
    console.log(":",features);
    
    return (
        <div>
            <div>
                <h4 className='fs-2 mb-0 d-flex align-items-center gap-3'>{mobiles?.Model} <span className='fs-4 fw-medium'>({mobiles?.Specifications?.General?.Colours?.split(",")[0].trim()}, {features?.prices?.variant})</span></h4>
                <p className='text-success fw-medium mb-0'>Extra ₹{features?.saving?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace(/(\d)(?=(\d{2})+\d{3}\b)/g, "$1,")} off</p>
                <p className='fs-3 fw-semibold mb-0'>{features?.prices?.price} <span className='fs-5 text-secondary text-decoration-line-through'>{features?.prices?.original_price}</span> <span className='text-success fs-5'>{features?.prices?.discount} off</span></p>
                <p>+ ₹59 Secured Packaging Fee</p>
            </div>
            <b className='fs-5'>Available offers</b>
            <ul>
                {features?.offers?.map((offer, index) => (
                    <li key={index}>
                        {offer?.type != "Extra Offer" && <span className='fw-semibold'>{offer?.type}</span>} <span>{offer?.description}</span>
                    </li>
                ))}
            </ul>
            <hr />
            <div className='d-flex gap-3 align-items-center mt-3' >
                <h5 style={{ width: '6rem' }}>Colour:</h5>
                {features?.color?.map((color, index) => (
                    <div key={index} className='gap-3'>
                        <div className='border-1 rounded'>
                            <img title={mobiles?.Specifications?.General?.Colours?.split(",")[index].trim()} src={`/assets/img/mobiles/realme/1/${color}/1.jpg`} alt={`Img ${index + 1}`} className='d-flex mx-auto' style={{ height: '70px' }} />
                            <p className='text-center'>{mobiles?.Specifications?.General?.Colours?.split(",")[index].trim()}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='d-flex gap-3 align-items-center mt-3' >
                <h5 style={{ width: '6rem' }}>Ram:</h5>
                {features?.ram?.map((ram, index) => (
                    <div key={index} className='gap-3 '>
                        <p className='text-center mb-0 border border-1 p-2 rounded'>{ram}</p>
                    </div>
                ))}
            </div>
            <div className='d-flex gap-3 align-items-center mt-3' >
                <h5 style={{ width: '6rem' }}>Storage:</h5>
                {features?.storage?.map((storage, index) => (
                    <div key={index} className='gap-3 '>
                        <p className='text-center mb-0 border border-1 p-2 rounded'>{storage}</p>
                    </div>
                ))}
            </div>
            <div className='mt-3' >
                <h5 style={{ width: '7rem' }}>Highlights:</h5>
                {mobiles?.Highlights?.map((highlight, index) => (
                    <li key={index} className=''>{highlight}</li>
                ))}
            </div>
            <div className='mt-3'>
                <p><span className='fs-5 fw-medium'>Description: </span>{mobiles?.Description}</p>
            </div>
        </div>
    )
}

export default Info