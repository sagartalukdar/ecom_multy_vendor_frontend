import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'
import { useNavigate } from 'react-router'
import { order, orderItem } from '../../../Types/OrderTypes'

const OrderItem = ({order,item}:{order:order,item:orderItem}) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`${order?.id}/${item?.id}`)} className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>
      <div className="flex items-center gap-5">
        <div className="">
            <Avatar sizes='small' sx={{backgroundColor:teal[300]}}><ElectricBolt/></Avatar>
        </div>
        <div>
            <h1 className="font-bold text-primary-color">{order?.orderStatus}</h1>
            <p>Arrining by {order?.deliverDate}</p>
        </div>
      </div>
      <div className="p-5 bg-teal-50 flex gap-3">
        <div>
            <img className='w-[70px]' src={item?.product?.images[0]} alt="" />
        </div>
        <div className="w-full space-y-2">
            <h1 className="font-bold text-lg">{item?.product?.title}</h1>
            <p className='text-gray-600 font-medium text-sm'>{item?.product?.seller?.businessDetails?.businessName}</p>
            <p className='text-gray-500 text-sm'><strong>size:</strong> {item?.product?.sizes}</p>
        </div>         
      </div>
    </div>
  )
}

export default OrderItem
