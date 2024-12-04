import { Button, Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react'
import BecomeSellerStep1 from './BecomeSellerStep1';
import { useFormik } from 'formik';
import BecomeSellerStep2 from './BecomeSellerStep2';
import * as Yup from "yup"
import BecomeSellerStep3 from './BecomeSellerStep3';
import BecomeSellerStep4 from './BecomeSellerStep4';
import { useAppDispatch } from '../../../Redux/Store';
import { sellerSignup } from '../../../Redux/Seller/SellerSlice';

const steps=[
  "Tax Details & Mobile",
  "Pickup Address",
  "Bank Details",
  "Supplier Details"
]

const validationSchema=Yup.object().shape({
  name:Yup.string().required("name is required"),
  mobile:Yup.string().required("mobile number is required").matches(/^[6-9]\d{9}$/,"invalid mobile number"),
  pinCode:Yup.string().required("pinCode is required").matches(/^[1-9][0-9]{6}$/,"invalid pin code"),
  address:Yup.string().required("address is required"),
  city:Yup.string().required("city is required"),
  state:Yup.string().required("state is required"),
  locality:Yup.string().required("locality is required"),
})

const SellerAccountForm = () => {

  const dispatch=useAppDispatch();

  const formik=useFormik({
    initialValues:{
      mobile:"",
      otp:"",
      gstin:"",
      sellerName:"",
      email:"",
      password:"",
      pickupAddress:{
        name:"",
        mobile:"",
        pinCode:"",
        address:"",
        locality:"",
        city:"",
        state:""
      },
      bankDetails:{
        accountNumber:"",
        accountHolderName:"",
        ifscCode:""
      },
      businessDetails:{
        businessName:"",
        businessEmail:"",
        businessMobile:"",
        businessAddress:"",
        logo:"",
        banner:""
      }
    },
    validationSchema:validationSchema,
    onSubmit:(values)=>{
      console.log(values);
    }

  })

  const  [activeState,setActiveState]=useState(0);
  const handleStep=(val:number)=>{
     activeState>=0 && activeState<steps.length &&  setActiveState(activeState+val);   
     {activeState===steps.length-1 && handleCreateAccount()}
  }
  const handleCreateAccount=()=>{
    console.log("create account witgh ",formik.values);
    dispatch(sellerSignup(formik.values))
  }

  return (
    <div>
      <Stepper activeStep={activeState} alternativeLabel>
        {steps.map((label,index)=>(
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <section className='mt-10'>
        {activeState===0?<BecomeSellerStep1 formik={formik}/>:
        activeState===1?<BecomeSellerStep2 formik={formik}/>:
        activeState===2?<BecomeSellerStep3 formik={formik}/>:
        activeState===3?<BecomeSellerStep4 formik={formik}/>:""}
      </section>
      <div className="flex pt-5 items-center justify-between">
        <Button onClick={()=>handleStep(-1)} variant='contained' disabled={activeState===0} >back</Button>
        <Button onClick={()=>handleStep(1)} variant='contained' disabled={activeState===steps.length}>
        {activeState<steps.length-1?"continue":"create account"}
        </Button>
      </div>
    </div>
  )
}

export default SellerAccountForm
