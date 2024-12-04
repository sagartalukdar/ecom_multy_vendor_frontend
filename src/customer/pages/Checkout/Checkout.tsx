import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import AddressCard from './AddressCard'
import { AddAlarm, AddLocation } from '@mui/icons-material'
import AddressForm from './AddressForm'
import PricingCard from '../Cart/PricingCard'

const paymentGatewayList=[
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnNRhFjB2hmA-AjNJ0Vgvez06SaOPX3OWsJqSZnwJYcpQ0VCCtHWdjNz9Gymvh6wEWwu4&usqp=CAU",
    label:"razorpay",
    value:"RAZORPAY"
  },
  {
    image:"https://raw.githubusercontent.com/stripe/stripe-android/master/assets/stripe_logo_slate_small.png",
    label:"stripe",
    value:"STRIPE"
  }
]

const Checkout = () => {
  const [openAddressForm, setOpenAddressForm] = useState(false);
  const handleCloseAddressForm = () => setOpenAddressForm(false);
  const handleOpenAddressForm=()=>{
    setOpenAddressForm(true);
  }
  const [paymentGateway, setPaymentGateway] = useState("RAZORPAY");
  const handlePaymentChange=(e:any)=>{
    setPaymentGateway(e.target.value)
    console.log(e.target.value);
  }

  const radioAddress=[
    "add1","add2"
  ]
  const [selectedAddress,setSelectedAddress]=useState(radioAddress[0]||"");
  const handleSelectAddress=(e:any)=>{
    setSelectedAddress(e.target.value)
    console.log(e.target.value);
  }

  return (
    <div className='pt-10 px-5 sm:px-10 md:px-24 lg:px-40 min-h-screen'>
      <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
        <div className="col-span-2 space-y-5">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Select Address</h1>
            <Button onClick={handleOpenAddressForm}>
              Add new address
            </Button>
          </div>

          <div className="text-sm font-medium space-y-5">
            <p>saved address</p>           
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              className='flex justify-center gap-3'
              onChange={handleSelectAddress}
              value={selectedAddress}
            >
              <div className='space-y-3'>
                 {radioAddress.map((item,index)=>
                 <FormControlLabel 
                 sx={{ml:'0px'}}
                 className='border-2 w-full pl-5 rounded-md flex justify-start '
                 key={index} value={item} control={<Radio />} 
                 label={
                   <AddressCard/>
                 }
                 />
                )}
              </div>
            </RadioGroup>
          </div>

          <div className="py-4 px-5 rounded-md border">
            <Button startIcon={<AddLocation/>} onClick={handleOpenAddressForm}>
              Add new address
            </Button>
          </div>
        </div>

        <div className="space-y-3">
        <div className='border rounded-md p-3'>
          <h1 className="text-center font-semibold text-lg text-primary-color pb-3">choose payment type</h1>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className='flex justify-center gap-3'
            onChange={handlePaymentChange}
            value={paymentGateway}
          >
            {paymentGatewayList.map((item,index)=>
              <FormControlLabel 
              className='border rounded-md flex justify-center '
              key={index} value={item.value} control={<Radio />} 
              label={
                <img className='w-[70px]' src={item.image} alt={item.label} />
              }
              />
            )}

          </RadioGroup>
        </div>  
        <div className='border rounded-md'>
          <PricingCard/>
          <div className="p-5">
            <Button variant='contained' fullWidth sx={{py:"11px"}}>
              pay
            </Button>
          </div>
        </div>
        </div>

      </div>

      <AddressForm openAddressForm={openAddressForm} handleCloseAddressForm={handleCloseAddressForm} paymentGateway={paymentGateway}/>
    </div>
  )
}

export default Checkout
