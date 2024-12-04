import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../Redux/Store';
import { useFormik } from 'formik';
import { sendLoginSignupOtp } from '../../../Redux/Auth/AuthSlice';
import { Box, Button, CircularProgress, TextField } from '@mui/material';
import { customerSignup } from '../../../Redux/Customer/CustomerSlice';
import * as Yup from "yup"


const validationSchema=Yup.object().shape({
  email:Yup.string().required("email is required"),
  otp:Yup.string().required("otp is required"),
})

const RegisterForm = () => {
  const dispatch=useAppDispatch();
  const {auth,customer}=useAppSelector(store=>store);

  const formik=useFormik({
    initialValues:{
      email:"",
      otp:"",
      fullName:""
    },
    validationSchema,
    onSubmit:(values)=>{
     console.log(values);
     dispatch(customerSignup(values))
    }
  });
  
  const handleSendOtp=()=>{
     dispatch(sendLoginSignupOtp({email:formik.values.email}))
  }  
  return (
    <div>
       <Box>
          <div className='space-y-3'>
            <h1 className="text-center font-bold text-primary-color text-xl">Signup</h1> 
            {!auth.otp &&
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
                <TextField
                    fullWidth
                    name='fullName'
                    label="Full Name"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                    helperText={formik.touched.fullName && formik.errors.fullName}
                    onBlur={formik.handleBlur}
                />
              </div>
            }

            {!auth.otp &&
            <Button disabled={auth.loading} onClick={handleSendOtp} fullWidth sx={{py:"11px"}} variant='contained'>
              {auth.loading? <CircularProgress size={24} color='success'/>:"send otp"}
            </Button>}

            {auth.otp &&
            <Button disabled={customer.loading} onClick={()=>formik.handleSubmit()} fullWidth sx={{py:"11px"}} variant='contained'>
              {customer.loading? <CircularProgress size={24} color='success'/>:"signup"}
            </Button>}

          </div>
        </Box>
    </div>
  )
}

export default RegisterForm
