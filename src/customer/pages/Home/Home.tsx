import React from 'react'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import { Button } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useNavigate } from 'react-router'
import DealsSlicker from './Deal/DealsSlicker'


const Home = () => {
  const navigate=useNavigate();
  return (
    <div className='space-y-5 lg:space-y-10 relative'>
      <ElectricCategory/>
      <CategoryGrid/>

      <div>
      <h1 className='text-lg lg:text-4xl text-center font-bold text-primary-color pb-5'>Today's Deals</h1>
      <Deal/>
      </div>

      <div>
      <h1 className='text-lg lg:text-4xl text-center font-bold text-primary-color pb-5'>Shop By Category</h1>
      <ShopByCategory/>
      </div>

      <section className=' lg:px-20 relative h-[200px] lg:h-[400px] object-cover'>
        <img className='w-full h-full' src="https://zosh-bazzar-zosh.vercel.app/seller_banner_image.jpg" alt="" />
        <div className="absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3">
          <h1>Sell your product</h1>
          <span className='text-lg md:text-2xl'>with</span>
          <span className='logo text-primary-color'> Ecom multi vendor</span>
          <div>
          <Button onClick={()=>navigate("become-seller")} variant='contained' startIcon={<StorefrontIcon/>}>
            Become seller
          </Button>
          </div>
        </div>     
      </section>

    </div>
  )
}

export default Home
