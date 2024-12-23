import { Box, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useAppDispatch } from '../../../Redux/Store'
import { sendLoginSignupOtp } from '../../../Redux/Auth/AuthSlice'
import { sellerSignin } from '../../../Redux/Seller/SellerSlice'

const SellerLoginForm = () => {
  const dispatch=useAppDispatch();

  const formik=useFormik({
    initialValues:{
      email:"",
      otp:""
    },
    onSubmit:(values)=>{
     console.log(values);
     dispatch(sellerSignin(values))
    }
  });

  const handleSendOtp=()=>{
     dispatch(sendLoginSignupOtp({email:formik.values.email}))
  }  

   return (
    <Box>
    <div className='space-y-5'>
      <h1 className="text-center font-bold text-xl text-primary-color">Login as seller</h1>

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
              <Button disabled={seller.loading} onClick={()=>formik.handleSubmit()} fullWidth sx={{py:"11px"}} variant='contained'>
                {seller.loading? <CircularProgress size={24} color='success'/>:"login"}
              </Button>
          </div>
          }

    </div>
    </Box>
  )
}

export default SellerLoginForm
