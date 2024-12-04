import React, { useEffect, useState } from 'react'
import "./ProductCard.css";
import { Button } from '@mui/material';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router';
import { Product } from '../../../Types/ProductType';


const ProductCard = ({item}:{item:Product}) => {
  const [currentImage,setCurrentImage]=useState(0);
  const [isHovered,setIsHovered]=useState(false);

  const navigate=useNavigate();

  useEffect(()=>{
   let interval:any
   if(isHovered){
    interval=setInterval(() => {
      setCurrentImage((prevImage)=>(prevImage+1)%item?.images?.length);
    }, 1000);
   }
   else if(interval){
    clearInterval(interval);
    interval=null
   }
   return ()=>clearInterval(interval);
  },[isHovered])
  return (
    <>
      <div onClick={()=>navigate(`/product-details/${item?.category?.categoryId}/${item?.title}/${item?.id}`)} className="group px-4 relative cursor-pointer">
        <div className="card"
        onMouseLeave={()=>setIsHovered(false)}
        onMouseEnter={()=>setIsHovered(true)}
        >
          {item?.images?.map((item,index)=>
            <img 
            className='card-media object-top'
            style={{transform:`translateX(${(index-currentImage)*100}%)`}}
            src={item} alt="" />
          )}

        { isHovered &&
          <div className="flex flex-col items-center space-y-2 indicator">
            <div className='flex items-center gap-2'>
            {item?.images?.map((item,index)=><div key={index} className={`${index===currentImage?"active":""} indicator-button`}></div>)}
            </div>
            <div className='flex gap-3'>
              <Button variant='contained' color='secondary'>
                <FavoriteIcon className='text-primary-color'/>
              </Button>
              <Button variant='contained' color='secondary'>
                <ModeCommentIcon className='text-primary-color'/>
              </Button>
            </div>
          </div>
        }

        </div>

        <div className="details w-[250px] pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>{item?.seller?.businessDetails?.businessName}</h1>
            <p>{item?.title}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className='font-sans text-gray-800'>₹ {item?.sellingPrice}</span>
            <span className='thin-line-through text-gray-400'>₹ {item?.mrpPrice}</span>
            <span className='text-primary-color font-semibold'> {item?.discountedPercent}%</span>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default ProductCard
