import { Box, TextField } from '@mui/material'
import React from 'react'

const BecomeSellerStep3 = ({formik}:any) => {
  return (
    <Box>
    {/* <p className='text-xl font-bold text-center pb-9'>Contact Details</p> */}
    <div className="space-y-5">
      <TextField
          fullWidth
          name='bankDetails.accountNumber'
          label="Account Number"
          value={formik.values.bankDetails?.accountNumber}
          onChange={formik.handleChange}
          error={formik.touched.bankDetails?.accountNumber && Boolean(formik.errors.bankDetails?.accountNumber)}
          helperText={formik.touched.bankDetails?.accountNumber && formik.errors.bankDetails?.accountNumber}
          onBlur={formik.handleBlur}
      />
       <TextField
          fullWidth
          name='bankDetails.accountHolderName'
          label="Account Holder Name"
          value={formik.values.bankDetails?.accountHolderName}
          onChange={formik.handleChange}
          error={formik.touched.bankDetails?.accountHolderName && Boolean(formik.errors.bankDetails?.accountHolderName)}
          helperText={formik.touched.bankDetails?.accountHolderName && formik.errors.bankDetails?.accountHolderName}
          onBlur={formik.handleBlur}
      />
      <TextField
          fullWidth
          name='bankDetails.ifscCode'
          label="IFSC Code"
          value={formik.values.bankDetails?.ifscCode}
          onChange={formik.handleChange}
          error={formik.touched.bankDetails?.ifscCode && Boolean(formik.errors.bankDetails?.ifscCode)}
          helperText={formik.touched.bankDetails?.ifscCode && formik.errors.bankDetails?.ifscCode}
          onBlur={formik.handleBlur}
      />
    </div>
  </Box>
  )
}

export default BecomeSellerStep3
