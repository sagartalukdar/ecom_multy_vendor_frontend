import React from 'react'
import ElectricCategoryCard from './ElectricCategoryCard'

const data = [
  {
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwATpMjIJ0z0XiZV1CjCCc3wBadtopUAW0P_Il3NLtJ6hx2oO12Y1zD0KtAg5u3omWTIYST-FDpGcDBE7XGgAwmwJ0ZvJcbzr4-w5FM0otDTWx4Atd7nOtcA",
    name:"Laptops"
  },
  {
    image:"https://images.meesho.com/images/products/438409639/yraof_512.webp",
    name:"Smartphones"
  },
  {
    image:"https://images.meesho.com/images/products/171461958/7uv3z_512.webp",
    name:"Soft Toys"
  },
  {
    image:"https://images.meesho.com/images/products/202748855/g0wiy_512.webp",
    name:"Shoes"
  },
  {
    image:"https://images.meesho.com/images/products/432604526/i9h92_512.webp",
    name:"Bottels"
  },
  {
    image:"https://images.meesho.com/images/products/459608423/afjzk_512.webp",
    name:"Headphones"
  },
  {
    image:"https://images.meesho.com/images/products/264180374/lfpc9_512.webp",
    name:"Backpacks"
  },
  {
    image:"https://images.meesho.com/images/products/456259160/zslgb_512.webp",
    name:"Kitchen"
  }
  
]

const ElectricCategory = () => {
  return (
    <div className='flex space-x-3 overflow-x-auto w-full justify-between py-5 lg:px-20 border-b'>
      {data.map((item)=><ElectricCategoryCard image={item.image}/>)}
    </div>
  )
}

export default ElectricCategory
