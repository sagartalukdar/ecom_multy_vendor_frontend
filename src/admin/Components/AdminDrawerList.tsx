import React from 'react'
import DrawerList from '../../Components/DrawerList'
import { AccountBox, AddCard, Category, CollectionsSharp, Dashboard, Done, ElectricBolt, Home, IntegrationInstructions, LocalOffer, Logout } from '@mui/icons-material'

const menu=[
  {
    name:"Dashboard",
    path:"/admin",
    icon:<Home className='text-primary-color'/>,
    activeIcon:<Home className='text-white'/>
  },
  {
    name:"Coupons",
    path:"/admin/coupons",
    icon:<IntegrationInstructions className='text-primary-color'/>,
    activeIcon:<IntegrationInstructions className='text-white'/>
  },
  {
    name:"Add Coupon",
    path:"/admin/add-coupon",
    icon:<LocalOffer className='text-primary-color'/>,
    activeIcon:<LocalOffer className='text-white'/>
  },
  {
    name:"Home grid",
    path:"/admin/home-grid",
    icon:<Dashboard className='text-primary-color'/>,
    activeIcon:<Dashboard className='text-white'/>
  },
  {
    name:"Electronics Category",
    path:"/admin/electronics-category",
    icon:<ElectricBolt className='text-primary-color'/>,
    activeIcon:<ElectricBolt className='text-white'/>
  },
  {
    name:"Shop by Category",
    path:"/admin/shop-by-category",
    icon:<Category className='text-primary-color'/>,
    activeIcon:<Category className='text-white'/>
  },
  {
    name:"Deals",
    path:"/admin/deals",
    icon:<Done className='text-primary-color'/>,
    activeIcon:<Done className='text-white'/>
  },

]

const menu2=[
  {
    name:"Account",
    path:"/admin/account",
    icon:<AccountBox className='text-primary-color'/>,
    activeIcon:<AccountBox className='text-white'/>
  },
  {
    name:"Logout",
    path:"/",
    icon:<Logout className='text-primary-color'/>,
    activeIcon:<Logout className='text-white'/>
  }
]

const AdminDrawerList = ({toggleDrawer}:any) => {
  return (
    <div>
        <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />
    </div>
  )
}

export default AdminDrawerList
