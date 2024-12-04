import React from 'react'
import DealCard from './DealCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealsSlicker from './DealsSlicker';


const Deal = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
  return (
    <div className='py-5 px-5 lg:px-20'>
      <DealsSlicker/>
    </div>
  )
}

export default Deal
