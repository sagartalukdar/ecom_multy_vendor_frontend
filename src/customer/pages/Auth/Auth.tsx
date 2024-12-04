import React, { useState } from 'react'
import authBanner from "./auth-banner.png"
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Button } from '@mui/material';

const Auth = () => {
  const [isLogin,setIsLogin]=useState(true);
  const handleLoginRegister=()=>{
    setIsLogin(!isLogin);
  }
  return (
    <div className='flex justify-center h-[90vh] items-center'>
      <div className="max-w-md h-[85vh] rounded-md shadow-xl">
        <img className='w-full rounded-t-md' src={authBanner} alt="" />
        <div className="mt-5 px-10">
          {isLogin?<LoginForm/>:<RegisterForm/>}
          <div className="flex items-center gap-1 justify-center mt-5">
            <h1 className="text-center text-md font-medium"> {isLogin?"don't have account ?":"have account ?"} </h1>
            <Button onClick={handleLoginRegister} size='small'>
              {isLogin?"Create Account":"login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
