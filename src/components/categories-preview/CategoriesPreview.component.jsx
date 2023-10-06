import React from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import { useContext } from 'react'
import CategoryPreview from '../category-preview/CategoryPreview.component'

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <>
            {Object.keys(categoriesMap).map((title) => (
                <>
                    <CategoryPreview title={title} products={categoriesMap[title]} />
                </>
            ))}
         </>
       )
}

export default CategoriesPreview