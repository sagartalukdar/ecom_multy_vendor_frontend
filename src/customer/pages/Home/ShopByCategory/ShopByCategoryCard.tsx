import React from 'react'
import "./ShopByCategory.css";

const ShopByCategoryCard = () => {
  return (
    <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>
      <div className="custom-border bg-primary-color w-[150px] h-[150px] lg:h-[200px] lg:w-[200px] rounded-full">
        <img 
        className='group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top rounded-full h-full w-full'
        src="https://cdn.pixabay.com/photo/2017/03/25/23/32/kitchen-2174593_1280.jpg"
        alt="" 
        />
      </div>
      <h1>Kitchen and Table</h1>
    </div>
  )
}

export default ShopByCategoryCard
