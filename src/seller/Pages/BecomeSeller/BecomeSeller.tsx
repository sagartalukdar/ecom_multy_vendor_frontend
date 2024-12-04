import React, { useState } from 'react'
import SellerAccountForm from './SellerAccountForm';
import SellerLoginForm from './SellerLoginForm';
import { Button } from '@mui/material';

const BecomeSeller = () => {
    const [isLogin,setIsLogin]=useState(false);
    const handleShowPage=()=>{
        setIsLogin(!isLogin);
    }
  return (
    <div className='grid md:gap-10 grid-cols-3 min-h-screen'>
      <section className='lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-2xl rounded-b-md'>
        {!isLogin?<SellerAccountForm/>:<SellerLoginForm/>}
        <div className='mt-10 space-y-2'>
          <h1 className="text-center text-sm font-medium"> {isLogin?"don't have account ?":"have account ?"} </h1>
          <Button onClick={handleShowPage} fullWidth sx={{py:"11px"}} variant='outlined'>
            {isLogin?"Register":"login"}
          </Button>
        </div>
      </section>

      <section className='hidden md:col-span-1 lg:col-span-2 md:flex justify-center items-center'>
        <div className="w-[70%] px-5 space-y-3">
            <div className="space-y-2 font-bold text-center">
                <p className='text-2xl'>join the marketplace</p>
                <p className="text-primary-color text-xl">start selling here</p>
            </div>
            <img className='w-full h-80' src=" https://cdn.pixabay.com/photo/2015/11/06/13/26/new-1027875_1280.jpg" alt="" />
        </div>
      </section>
    </div>
  )
}

export default BecomeSeller
