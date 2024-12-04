import React from 'react'
import ProductCard from './ProductCard'
import { useAppDispatch, useAppSelector } from '../../../Redux/Store'

const SimilarProduct = () => {
  const {product}=useAppSelector(store=>store);

  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between gap-4 gap-y-8'>
      {product.products?.map((item)=><ProductCard item={item}/>)}
    </div>
  )
}

export default SimilarProduct
