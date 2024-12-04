import React from 'react'

const ElectricCategoryCard = ({image}:{image:string}) => {
  return (
    <div >
      <img className='object-contain h-10' src={image} alt="" />
      <h2 className='font-semibold text-sm text-center'>Laptop</h2>
    </div>
  )
}

export default ElectricCategoryCard
