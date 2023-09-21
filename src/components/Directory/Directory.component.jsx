import React from 'react'
import Categoryitem from "../category-item/Categoryitem.component"
const Directory = ({categories}) => {
    return (
    <div className="w-full flex flex-wrap justify-between">
        {categories.map((category) =>
            <Categoryitem key={category.id} category={category} />
        )}
    </div>
  )
}

export default Directory