import React from 'react'
import { useParams } from 'react-router-dom';
import MobileCategory from '../mobiles';
import Groceries from '../grocery';

const CategoryPage = () => {
    const { categoryId } = useParams();

    return (
        <div>
            {
                categoryId === 'mobiles'
                    ? <MobileCategory />
                    : <Groceries />
            }
        </div>
    )
}

export default CategoryPage
