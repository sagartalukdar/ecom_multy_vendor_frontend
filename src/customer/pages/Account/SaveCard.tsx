import { CreditCard, CreditScore } from '@mui/icons-material'
import React from 'react'

const SaveCard = () => {
  return (
    <div className=' px-5 lg:px-10 pt-6 pb-16 flex flex-col justify-center items-center'>
    <CreditScore sx={{fontSize:"10rem",bgcolor:"inf"}}/>
    <div className='flex flex-col items-center space-y-3 md:px-5 text-center'>
       <p className='text-2xl font-bold'>Save Your Creadit Card/Debit Cards During Payment</p>
       <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sit animi maiores corporis? Molestiae ullam obcaecati cum, reiciendis veritatis minus.</p>
    </div>
  </div>
  )
}

export default SaveCard
