import { Box, Button, Divider } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import OrderSteper from './OrderSteper';
import { PaymentOutlined } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../../Redux/Store';
import { fetchOrderItemById, fetchUserOrderById } from '../../../Redux/Customer/OrderSlice';

const OrderDetails = () => {
    const navigate=useNavigate();
    const dispatch=useAppDispatch();
    const {customerOrder}=useAppSelector(store=>store);
    const {orderId,orderItemId}=useParams();
    useEffect(()=>{
      dispatch(fetchUserOrderById({orderId:Number(orderId),jwt:localStorage.getItem("jwt")||""}));
      dispatch(fetchOrderItemById({orderItemId:Number(orderItemId),jwt:localStorage.getItem("jwt")||""}));
    },[])
  return (
    <Box>
      <section className='flex flex-col gap-5 justify-center items-center'>
        <img className='w-[100px]' src={customerOrder.orderItem?.product?.images?.[0]} alt="" />
        <div className="text-sm space-y-1 text-center">
            <h1 className="font-bold">{customerOrder.orderItem?.product?.title}</h1>
            <p>{customerOrder.orderItem?.product?.description}</p>
            <p><strong>Size :</strong> {customerOrder.orderItem?.product?.sizes}</p>
        </div>
        <div>
            <Button onClick={()=>navigate(`/reviews/5/create`)}>
                write Review
            </Button>
        </div>
      </section>
      <section className='border p-5'>
        <OrderSteper orderStatus={"CANCELED"}/>
      </section>
      <div className="border p-5">
        <h1 className="font-bold pb-3">Delivery Address</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p>{customerOrder.currentOrder?.shippingAddress?.name}</p>
            <Divider flexItem orientation='vertical'/>
            <p>{customerOrder.currentOrder?.shippingAddress?.mobile}</p>
          </div>
          <p>
          {customerOrder.currentOrder?.shippingAddress?.address}
          </p>
        </div>
      </div>

      <div className="border space-y-4">
        <div className="flex justify-between text-sm pt-5 px-5">
          <div className="space-y-1">
            <p className="font-bold">Total item price</p>
            <p className="">You saved <span className='text-green-500 font-medium text-xs'>{customerOrder.orderItem?.product?.discountedPercent}%</span> on this item</p>
          </div>
          <p className="font-medium">₹ {customerOrder.orderItem?.product?.sellingPrice}.00</p>
        </div>
      </div>

      <div className="px-5 my-5">
        <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
          <PaymentOutlined/>
          <p>Pay on delivery</p>
        </div>
      </div>

      <Divider/>
      <div className="p-5 pb-5">
        <p className="text-sm"><strong>Sold by : </strong>{customerOrder.orderItem?.product?.seller?.businessDetails.businessName}</p>
      </div>

      <div className="p-5">
        <Button
        color='error'
        sx={{py:"0.7rem"}}
        variant='outlined'
        fullWidth
        >
        {true?"order canceled":"Cancel order"}
        </Button>
      </div>

    </Box>
  )
}

export default OrderDetails
