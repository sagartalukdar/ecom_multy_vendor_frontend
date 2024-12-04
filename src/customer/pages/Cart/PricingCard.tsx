import { Divider } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../../Redux/Store'

const PricingCard = () => {
  const {cart}=useAppSelector(store=>store);
  return (
    <>
    <div className='p-5 space-y-3'>
      <div className="flex justify-between items-center">
        <span>Subtotal</span>
        <span>₹ {cart.cart?.totalMrpPrice}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Discount</span>
        <span>₹ {cart.cart?.discount}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Shipping</span>
        <span>₹ 70</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Plateform fee</span>
        <span>₹ 20</span>
      </div>

      <Divider/>

      <div className="flex justify-between items-center">
        <span className='text-lg font-semibold'>Total</span>
        <span>₹ {cart.cart?.totalSellingPrice}</span>
      </div>

    </div>
    </>
  )
}

export default PricingCard
