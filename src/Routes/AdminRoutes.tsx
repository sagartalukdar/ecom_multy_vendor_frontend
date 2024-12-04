import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from '../admin/Pages/Dashboard/Dashboard'
import Coupon from '../admin/Pages/Coupon/Coupon'
import AddNewCoupon from '../admin/Pages/Coupon/AddNewCoupon'

import ElectronicTable from '../admin/Pages/Homepage/ElectronicTable'
import ShopByCategory from '../admin/Pages/Homepage/ShopByCategory'
import Deal from '../admin/Pages/Homepage/Deal/Deal'
import HomeGrid from '../admin/Pages/Homepage/HomeGrid'

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/coupons' element={<Coupon/>} />
      <Route path='/add-coupon' element={<AddNewCoupon/>} />
      <Route path='/home-grid' element={<HomeGrid/>} />
      <Route path='/electronics-category' element={<ElectronicTable/>} />
      <Route path='/shop-by-category' element={<ShopByCategory/>} />
      <Route path='/deals' element={<Deal/>} />
      </Routes>
    </div>
  )
}

export default AdminRoutes
