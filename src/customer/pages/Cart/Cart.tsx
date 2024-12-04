import React, { useEffect, useState } from 'react'

import { Close, LocalOffer } from '@mui/icons-material'
import { teal } from '@mui/material/colors'
import { Button, IconButton, TextField } from '@mui/material'
import PricingCard from './PricingCard'
import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../../Redux/Store'
import { fetchUserCart } from '../../../Redux/Customer/CartSlice'
import CartItem from './CartItem'



const Cart = () => {
  const navigate=useNavigate();
  const dispatch=useAppDispatch();
  const {cart}=useAppSelector(store=>store);

  const [couponCode,setCouonCode]=useState("");
  const handleChange=(e:any)=>{
    setCouonCode(e.target.value);
  }

  useEffect(()=>{
    dispatch(fetchUserCart(localStorage.getItem("jwt")||""));
  },[])
  return (
    <div className='pt-10 px-5 sm:px-10 md:px-28 min-h-screen'>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className='cartItemSection lg:col-span-2 space-y-3'>
         { cart.cart?.cartItems?.map((item,index)=><CartItem key={index} item={item}/>)}
        </div>

        <div className='col-span-1 text-sm space-y-3 '>
          <div className='border rounded-md px-5 py-3 space-y-5'>
            <div className=''>
              <div className='flex gap-3 text-sm items-center'>
                <LocalOffer sx={{color:teal[600],fontSize:"17px"}}/>
                <span>apply coupon</span>
              </div>
              {false ?<div className="flex justify-between items-center mt-3">
                <TextField  id='outlined-basic'
                 placeholder='coupon code' size='small'
                 variant='outlined'
                />
                <Button>
                  apply
                </Button>
              </div> :
              <div className="flex mt-3">
                <div className="p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center">
                  <span className=''>CODE Applied</span>
                  <IconButton color='error' size='small'>
                    <Close className='text-primary-color'/>
                  </IconButton>
                </div>
              </div>
              }  
            </div>
          </div>
          <div className="border rounded-md">
            <PricingCard/>
            <div className='p-3' onClick={()=>navigate("/checkout")}>
              <Button fullWidth variant='contained' sx={{}}>
                buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
