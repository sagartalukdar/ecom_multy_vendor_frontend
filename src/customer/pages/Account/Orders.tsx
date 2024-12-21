import React, { useEffect } from 'react'
import OrderItem from './OrderItem'
import { useAppDispatch, useAppSelector } from '../../../Redux/Store'
import { fetchUserOrderHistory } from '../../../Redux/Customer/OrderSlice';

const Orders = () => {
  const dispatch=useAppDispatch();
  const {customerOrder}=useAppSelector(store=>store);
  useEffect(()=>{
    dispatch(fetchUserOrderHistory(localStorage.getItem("jwt")||""));
  },[])
  return (
    <div className='text-sm min-h-screen'>
      <div className="pb-5">
        <h1 className="font-semibold">All Orders</h1>
        <p>from anytime</p>
      </div>
      <div className="space-y-2">
        {customerOrder.orders.length>0 && customerOrder.orders.map((order)=>order?.orderItems?.map((orderItem,index)=><OrderItem key={index} order={order} item={orderItem} />))}
      </div>
    </div>
  )
}

export default Orders
