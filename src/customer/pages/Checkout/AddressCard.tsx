import { Radio } from '@mui/material'
import React from 'react'

const AddressCard = () => {
  const handleChange=(event:any)=>{
    console.log(event.target.checked);
  }
  return (
    <div className='p-5 rounded-md flex items-start'>
      <div className='space-y-3 pt-3'>
        <h1>Name</h1>
        <p className='w-[320px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, at.
        </p>
        <p><strong>Mobile :</strong> 5877465942</p>
      </div>
    </div>
  )
}

export default AddressCard
