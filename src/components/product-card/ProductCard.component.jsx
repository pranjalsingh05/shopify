import React from 'react'
import Button from '../button-type/Button.component';
import "./productCard.css"
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({product}) => {
    const {addItemtoCart}=useContext(CartContext)
    const{name,price,imageUrl}=product
  return (
      <div className=' product-card-container  w-full flex flex-col h-96 items-center'>
          <img src={imageUrl} alt={`${name}`} className='w-full h-4/5 object-cover mb-1' />
          <Button onClick={()=>addItemtoCart(product)}  text='Add to Cart' buttontype="inverted" />
          <footer className='w-full h-5/100 flex justify-between items-center text-lg'>
              <span className='name w-90/100 mb-3'>{name}</span>
              <span className='price w-10/100'>&#8377;{price}</span>
          </footer>
      </div>

    
  )
}

export default ProductCard;