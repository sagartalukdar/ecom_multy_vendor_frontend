import React, { useState } from 'react'
import HomeCategoryTable from '../HomeCategoryTable'
import { Button } from '@mui/material';
import DealTable from './DealTable';
import DealCategoryTable from './DealCategoryTable';
import CreateDealForm from './CreateDealForm';

const tabs=[
  "Deals",
  "Category",
  "Create Deal"
]

const Deal = () => {
  const [activeTab,setActiveTab]=useState("Deals");
  const handleChangeTab=(tabName:string)=>{
    setActiveTab(tabName);
  }

  return (
    < >
      <div className="flex flex-col gap-4">
        <div className='flex space-x-3'>
        {tabs.map((item,index)=><Button onClick={()=>handleChangeTab(item)} variant={activeTab===item?"contained":"outlined"}  key={index}>{item}</Button>)}
        </div>
        {activeTab==="Deals"?<DealTable/>:activeTab==="Category"?<DealCategoryTable/>:<div className=' flex flex-col justify-center items-center h-[70vh]'><CreateDealForm/></div>}
      </div>
    </>
  )
}

export default Deal
