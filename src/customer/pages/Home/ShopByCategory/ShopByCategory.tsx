import React from 'react'
import ShopByCategoryCard from './ShopByCategoryCard'

const ShopByCategory = () => {
  return (
    <div className='flex justify-center flex-wrap space-x-4 space-y-4 lg:px-20'>
      {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,20].map((item)=><ShopByCategoryCard/>)}
    </div>
  )
}

export default ShopByCategory
