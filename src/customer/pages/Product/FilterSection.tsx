import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { teal } from '@mui/material/colors'
import React, { useState } from 'react'
import { colorFilters } from '../../../Data/Filter/Color'
import { useSearchParams } from "react-router-dom";
import { price } from '../../../Data/Filter/Price';
import { discount } from '../../../Data/Filter/Discount';

const FilterSection = () => {
  const [expendColor,setExpendColor]=useState(false);
  const [searchParam,setSearchParam]=useSearchParams();
  const handleColorToggle=()=>{
    setExpendColor(!expendColor);
  }

  const clearAllFilter=()=>{
   const newUrlSearchParam=new URLSearchParams();
   setSearchParam(newUrlSearchParam);
  }

  const updateFilterParam=(e:any)=>{
    const {value,name}=e.target;
    if(value){
      searchParam.set(name,value);
    }else{
      searchParam.delete(name);
    }
    setSearchParam(searchParam);
  }
  return (
    <div className='-z-50 space-y-5 bg-white'>
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
        <p className="text-lg font-semibold">Filters</p>
        <Button onClick={clearAllFilter} size='small' className='text-teal-600 cursor-pointer font-semibold'>clear all</Button>
      </div>
      <Divider/>

      <div className='px-9 space-y-6'>
      <section>
      <FormControl>
        <FormLabel className='text-2xl font-semibold ' sx={{fontSize:'16px',fontWeight:'bold',color:teal[500],pb:'14px'}} id='color'>Color</FormLabel>
        <RadioGroup
          aria-labelledby="color"
          defaultValue=""
          name="color"
          onChange={updateFilterParam}
        >
          {colorFilters.slice(0,expendColor?colorFilters.length:5).map((item)=> <FormControlLabel value={item.name} control={<Radio/>} 
          label={
            <div className='flex items-center justify-between w-40 '>
              <p>{item.name}</p>
              <p style={{backgroundColor:item.hexValue}} className={`h-5 w-5 rounded-full  ${item.name==="White"?"border border-black":""}`}></p>
            </div>
          } 
          /> )}

        </RadioGroup>
      </FormControl>
      <div>
        <button onClick={handleColorToggle} className='text-primary-color cursor-pointer hover:text-teal-900 flex items-center'>
          {expendColor?"hide":`+${colorFilters.length-5} more`}
        </button>   
      </div>
      </section>

      <section>
        <FormControl>
        <FormLabel className='text-2xl font-semibold ' sx={{fontSize:'16px',fontWeight:'bold',color:teal[500],pb:'14px'}} id='price'>Price</FormLabel>
        <RadioGroup
          aria-labelledby="price"
          defaultValue=""
          name="price"
          onChange={updateFilterParam}
        >
          {price.map((item,index)=> <FormControlLabel key={index} value={item.value} control={<Radio size='small'/>} 
          label={item.name} 
          /> )}

        </RadioGroup>
        </FormControl>
      </section>

      <section>
        <FormControl>
        <FormLabel className='text-2xl font-semibold ' sx={{fontSize:'16px',fontWeight:'bold',color:teal[500],pb:'14px'}} id='discount'>Discount</FormLabel>
        <RadioGroup
          aria-labelledby="discount"
          defaultValue=""
          name="discount"
          onChange={updateFilterParam}
        >
          {discount.map((item,index)=> <FormControlLabel key={index} value={item.value} control={<Radio size='small'/>} 
          label={item.name} 
          /> )}

        </RadioGroup>
        </FormControl>
      </section>
      </div>
    </div>
  )
}

export default FilterSection
