import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../Redux/Store';
import { useFormik } from 'formik';
import { sendLoginSignupOtp } from '../../../Redux/Auth/AuthSlice';
import { Box, Button, CircularProgress, TextField } from '@mui/material';
import * as Yup from "yup"
import { cutomerSignin } from '../../../Redux/Customer/CustomerSlice';
import { useNavigate } from 'react-router';

const validationSchema=Yup.object().shape({
  email:Yup.string().required("email is required"),
  otp:Yup.string().required("otp is required"),
})

const LoginForm = () => {
  const dispatch=useAppDispatch();
  const {auth,customer}=useAppSelector(store=>store);
  const navigate=useNavigate();
  
  const formik=useFormik({
    initialValues:{
      email:"",
      otp:""
    },
    validationSchema,
    onSubmit:(values)=>{
     console.log(values);
     dispatch(cutomerSignin(values));
    }
  });
  
  const handleSendOtp=()=>{
     dispatch(sendLoginSignupOtp({email:formik.values.email}))
  }  

  useEffect(()=>{
    if(customer.profile?.email){
      navigate("/")
    }
  },[customer.profile])

  return (
    <div>
       <Box>
          <div className='space-y-3'>
            <h1 className="text-center font-bold text-primary-color text-xl">Login</h1> 
            {!auth.otp &&
            <div className="space-y-3">
              <TextField
                fullWidth
                name='email'
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                onBlur={formik.handleBlur}
              />
              <Button disabled={auth.loading} onClick={handleSendOtp} fullWidth sx={{py:"11px"}} variant='contained'>
                {auth.loading? <CircularProgress size={24} color='success'/>:"send otp"}
              </Button>
            </div>
           }
            {auth.otp &&
              <div className="space-y-2">
                <p className="font-medium text-sm opacity-60">enter OTP sent to your email</p>
                <TextField
                    fullWidth
                    name='otp'
                    label="OTP"
                    value={formik.values.otp}
                    onChange={formik.handleChange}
                    error={formik.touched.otp && Boolean(formik.errors.otp)}
                    helperText={formik.touched.otp && formik.errors.otp}
                    onBlur={formik.handleBlur}
                />
                <Button disabled={customer.loading} onClick={()=>formik.handleSubmit()} fullWidth sx={{py:"11px"}} variant='contained'>
                  {customer.loading? <CircularProgress size={24} color='success'/>:"login"}
                </Button>
            </div>
            }

          </div>
        </Box>
    </div>
  )
}

export default LoginForm
