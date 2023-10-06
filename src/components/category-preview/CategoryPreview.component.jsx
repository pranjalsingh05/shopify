import React from 'react'
import ProductCard from '../product-card/ProductCard.component'
import "./CategoryPreview.css"
import {useNavigate} from "react-router-dom"

const CategoryPreview = ({title,products}) => {
  const navigate=useNavigate();
  const pageHandler=()=>{
    navigate(`/shop/${title}`)
  }
  return (
    <div className='category-preview-container'>
          <h1 >
              <span onClick={pageHandler}className='title'>{title.toUpperCase()}</span>
          </h1>
          <div className='preview'>
             {products.filter((_,idx)=>idx<4)
             .map((product)=><ProductCard key={product.id} product={product} />)
             }
          </div>

    </div>
  )
}

export default CategoryPreview