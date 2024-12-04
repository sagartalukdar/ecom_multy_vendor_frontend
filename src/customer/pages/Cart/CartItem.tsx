import { Button, Divider, IconButton } from '@mui/material'
import React, { useState } from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Close } from '@mui/icons-material';
import { cartItem } from '../../../Types/CartTypes';
import { useAppDispatch } from '../../../Redux/Store';
import { deleteCartItem, updateCartItem } from '../../../Redux/Customer/CartSlice';


const CartItem = ({item}:{item:cartItem}) => {
    // const [quantity,setQuantity]=useState(item?.quantity);
    const dispatch=useAppDispatch();
    const handleItemQuantity=(val:number)=>{
      console.log("cart item quantity")
      dispatch(updateCartItem({jwt:localStorage.getItem("jwt"),cartItemId:item?.id,cartItem:{quantity:item?.quantity+val}}))
    }
    const handleDeleteCart=()=>{
      dispatch(deleteCartItem({jwt:localStorage.getItem("jwt"),cartItemId:item?.id}));
    }
  return (
    <div className='border rounded-md relative'>
      <div className="p-5 flex gap-3">
        <div>
            <img className='w-[90px] rounded-md' src={item?.product?.images[0]} alt="" />
        </div>
        <div className="space-y-2">
            <h1 className="font-bold text-lg">{item?.product?.seller?.businessDetails?.businessName}</h1>
            <p className='text-gray-600 font-medium text-sm'>{item?.product?.title}</p>
            <p className='text-gray-500 text-xs'><strong>Sold By:</strong> {item?.product?.seller?.sellerName}</p>
            <p className='text-sm'>7 days replacement policy</p>
            <p><strong className='text-gray-500'>Quantity : </strong> {item?.quantity}</p>
        </div>         
      </div>
      <Divider/> 
        <div className="px-5 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2 w-[140px] justify-between">
                <Button disabled={item?.quantity===1} onClick={()=>handleItemQuantity(-1)}>
                <RemoveOutlinedIcon/>
                </Button>
                <span>{item?.quantity}</span>
                <Button onClick={()=>handleItemQuantity(1)}>
                <AddOutlinedIcon/>
                </Button>
            </div>
            <div className="">
                <p className='font-medium text-gray-700'>₹ {item?.sellingPrice}</p>
            </div>
        </div>
        <div className="absolute top-1 right-1">
            <IconButton onClick={handleDeleteCart} color='error'>
                <Close className='text-primary-color'/>
            </IconButton>
        </div>
    </div>
  )
}

export default CartItem
