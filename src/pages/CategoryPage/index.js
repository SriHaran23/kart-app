import React from 'react'
import { useParams } from 'react-router-dom';
import MobileCategory from '../mobiles';
import Groceries from '../grocery';

const CategoryPage = ({categoryName}) => {
    console.log("categoryName",categoryName);
    
    return (
        <div>
            {
                categoryName === 'Mobiles'
                    ? <MobileCategory />
                    : <Groceries />
            }
        </div>
    )
}

export default CategoryPage
