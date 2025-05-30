import React from 'react'
import { useParams } from 'react-router-dom';
import MobileCategory from '../mobiles';
import Groceries from '../grocery';

const CategoryPage = () => {
    const { categoryName } = useParams();

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
