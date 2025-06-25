import React, { useEffect, useState } from 'react'
import ArrowDown from '../../svg/ArrowDown';
import ArrowUp from '../../svg/ArrowUp';
import ProductImageZoom from './imageZoom';

const Images = ({categoryName,product,images,imageIndex,setImagesIndex}) => {
    const [currentPage, setCurrentPage] = useState(1);
        const recordsPerPage = 5;
        const indexOfLastRecord = currentPage * recordsPerPage;
        const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
        const currentRecords = images?.slice(indexOfFirstRecord, indexOfLastRecord);
    
        const nPages = Math.ceil(images?.length / recordsPerPage);
    
        const handlePageChange = (page) => {
            if (page !== '...' && page !== currentPage) setCurrentPage(page);
        }

        useEffect(() => {
          console.log("images",images);
          
        }, [images])
        
  return (
    <div>
         <div className='d-flex justify-content-center product-img'>
            <img className={` categoryName !== 'Mobiles' &&  'product-items'}`} src={images[imageIndex]} alt={categoryName} />
            {/* <ProductImageZoom src={images[imageIndex]} alt={categoryName}/> */}
        </div>
        {currentRecords?.length > 1 &&
            <div className="d-flex justify-content-between gap-2">
                <div className='d-flex align-items-center'>
                    <button className={`btn ${currentPage === 1 ? 'disabled btn-outline-secondary' : 'btn-outline-info'}`} style={{ rotate: '90deg' }} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <ArrowDown />
                    </button>
                </div>
                <div className="d-flex justify-content-around gap-2" >
                    {currentRecords.map((src, index) => (
                        <img key={index} src={src} alt={`Img ${index + 1}`} onClick={() => categoryName !== 'Mobiles' ? setImagesIndex(index) : setImagesIndex(index + 1)} className="carousel-image my-2" />
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
  )
}

export default Images