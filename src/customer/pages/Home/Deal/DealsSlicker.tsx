import React, { Component } from "react";
import Slider from "react-slick";
import DealCard from "./DealCard";

import { useMediaQuery, useTheme } from "@mui/material";

function DealsSlicker() {
 
  const theme=useTheme();
  const isLarge=useMediaQuery(theme.breakpoints.up("lg"));

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: isLarge?5:2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item,index)=>
          <div key={index}>
            <DealCard/>
          </div>
        )}
       
      </Slider>
    </div>
  );
}

export default DealsSlicker;
