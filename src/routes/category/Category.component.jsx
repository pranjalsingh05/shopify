import React from 'react'
import { useParams }  from "react-router-dom"
import { useContext,useEffect,useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/ProductCard.component';

const Category= () => {
    const {category}=useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        setProducts(categoriesMap[category]);
      },[category,categoriesMap])
  return (
    <div className='flex flex-col mb-6'>
          <h1 className=' flex justify-center mb-6'>
              <span className='mb-25 text-4xl'>{category.toUpperCase()}</span>
          </h1>
          <div className='grid grid-cols-4 gap-4'>
              {products && products.map((product) => <ProductCard key={category} product={product} />)}
          </div>
    </div>
        
    
  )
}

export default Category