import { Divider } from '@mui/material'
import React, { useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CardGiftcard, LocationOn, Logout } from '@mui/icons-material';
import Orders from './Orders';
import OrderDetails from './OrderDetails';
import UserDetails from './UserDetails';
import Address from './Address';
import SaveCard from './SaveCard';
import { useAppDispatch } from '../../../Redux/Store';
import { customerLogout } from '../../../Redux/Customer/CustomerSlice';


const menu=[
  {name:"orders",path:"/account/orders",icon:<ShoppingBagIcon/>},
  {name:"profile",path:"/account",icon:<AccountCircleIcon/>},
  {name:"saved cards",path:"/account/saved-card",icon:<CardGiftcard/>},
  {name:"addresses",path:"/account/addresses",icon:<LocationOn/>},
  {name:"logout",path:"/",icon:<Logout/>},
]

const Account = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const dispatch=useAppDispatch();

  const [activeState,setActiveState]=useState("orders");
  const handleMenuClick=(item:any)=>{
    setActiveState(item.name);
    if(item.path==="/"){
      dispatch(customerLogout(navigate));
    }else{
      navigate(item.path);
    }
  }
  return (
    <div className='px-5 lg:px-24 min-h-screen mt-10'>
      <div>
        <h1 className="text-xl font-bold pb-5">Customer Name</h1>
      </div>
      <Divider/>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
        <section className='col-span-1 lg:border-r lg:sticky lg:h-screen top-5 lg:pr-5 py-5 h-full space-y-1'>
          {menu.map((item)=>
           <div onClick={()=>handleMenuClick(item)} key={item.name} className={`py-3 px-5 rounded-md cursor-pointer border hover:text-white ${item.name===activeState?"text-white":""} ${item.name!=activeState && "hover:bg-teal-400"}  ${item.name===activeState?"bg-primary-color":""} `}>
            <p className='flex items-center space-x-3'> <span>{item.icon}</span> <span>{item.name}</span></p>
           </div>
          )}
        </section>
        <section className='right lg:col-span-2 lg:pl-5 py-5'>
          <Routes>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/' element={<UserDetails/>}/>
            <Route path='/saved-card' element={<SaveCard/>}/>
            <Route path='/saved-card' element={<SaveCard/>}/>
            <Route path='/addresses' element={<Address/>}/>
            <Route path='/orders/:orderId/:orderItemId' element={<OrderDetails/>}/>
          </Routes>
        </section>
      </div>
    </div>
  )
}

export default Account
