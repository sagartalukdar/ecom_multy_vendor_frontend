import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { AddShoppingCart, FavoriteOutlined, Star } from '@mui/icons-material';
import { teal } from '@mui/material/colors';
import { Button, Divider } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import SimilarProduct from './SimilarProduct';
import ReviewCard from '../Review/ReviewCard';
import { useAppDispatch, useAppSelector } from '../../../Redux/Store';
import { useParams } from 'react-router';
import { fetchProductById } from '../../../Redux/Customer/CustomerProductSlice';
import { addItemtoCart } from '../../../Redux/Customer/CartSlice';

const ProductDetails = () => {
  const {product}=useAppSelector(store=>store);
  const dispatch=useAppDispatch();
  const {productId}=useParams();
  const [quantity,setQuantity]=useState(1);
  const [activeImage,setActiveImage]=useState(0);

  const handleActiveImage=(val:number)=>{
     setActiveImage(val);
  }

  const handleItemToCart=()=>{
    const data={
      jwt:localStorage.getItem("jwt")||"",
      request:{
        size:product.product?.sizes,
        quantity:quantity,
        productId:product.product?.id
      }
    }
    dispatch(addItemtoCart(data));
  }

  useEffect(()=>{
    if(productId){
      dispatch(fetchProductById(Number(productId)));
    }
  },[productId])

  return (
    <div className='px-5 lg:px-20 pt-10'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className='flex flex-col lg:flex-row  gap-5'>
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {product.product?.images?.map((item,index)=>
              <img onClick={()=>handleActiveImage(index)} className='lg:w-full w-[50px] cursor-pointer rounded-md' src={item} alt="" />
            )}
          </div>
          <div className="w-full lg:w-[85%] ">
            <img src={product.product?.images[activeImage]} alt="" />
          </div>
        </section>
        <section>
          <h1 className="font-bold text-lg text-primary-color">
            {product.product?.seller?.businessDetails?.businessName}
          </h1>
          <p className="text-gray-500 font-semibold">{product.product?.title}</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-5 mt-5 ">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <Star sx={{color:teal[500],fontSize:'17px'}}/>
            </div>
            <Divider flexItem orientation='vertical'/>
            <span>124 ratings</span>
          </div>
          <div className="flex items-center gap-3 mt-5 text-2xl">
            <span className='font-sans text-gray-800'>₹{product.product?.sellingPrice}</span>
            <span className='line-through text-gray-400'>₹{product.product?.mrpPrice}</span>
            <span className='text-primary-color font-semibold'> {product.product?.discountedPercent}%</span>
          </div>
          <p className='text-sm'>{product.product?.description}</p>

          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <ShieldIcon sx={{color:teal[500]}}/>
              <p>Autherntic and quality assured</p>
            </div>
            <div className="flex items-center gap-4">
              <AssuredWorkloadIcon sx={{color:teal[500]}}/>
              <p>100% money back guarented</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShippingIcon sx={{color:teal[500]}}/>
              <p>Free shipping and return</p>
            </div>
            <div className="flex items-center gap-4">
              <AccountBalanceWalletIcon sx={{color:teal[500]}}/>
              <p>Pay on delivery might be available</p>
            </div>
          </div>

          <div className="mt-7 space-y-2">
            <h1>
              Quantity
            </h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button disabled={quantity===1} onClick={()=>setQuantity(quantity-1)}>
                <RemoveOutlinedIcon/>
              </Button>
              <span>{quantity}</span>
              <Button onClick={()=>setQuantity(quantity+1)}>
                <AddOutlinedIcon/>
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <Button onClick={handleItemToCart} fullWidth variant='contained' sx={{py:'1rem'}} startIcon={<AddShoppingCart/>}>add to bag</Button>
            <Button fullWidth variant='outlined' sx={{py:'1rem'}} startIcon={<FavoriteOutlined/>}>wishlist</Button>
          </div>

          <div className="">
            <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint hic, vel totam, nostrum cumque fugit nulla dolorem iure sequi quos eius. Dolore, commodi!</p>
          </div>

          <div className='mt-7 '>
            <ReviewCard/>
          </div>
        </section>
      </div>

      <div className="mt-20">
        <h1 className="text-lg font-bold ">Similar Products</h1>
        <div className="pt-5">
        <SimilarProduct/>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails
