import React from 'react'
import { ProductContext } from '../../contexts/product.context'
import { useContext } from 'react'
import ProductCard from '../../components/product-card/ProductCard.component'

const Shop = () => {
    const {products,setProducts}=useContext(ProductContext);
  return (
      <div className="grid grid-cols-4 gap-x-10 gap-y-50">
        {
            products.map((product)=>
               <ProductCard key={product.id} product={product}/>
            )
        }
    </div>
  )
}

export default Shop