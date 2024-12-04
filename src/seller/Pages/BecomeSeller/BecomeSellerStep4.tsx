import { Box, TextField } from '@mui/material'
import React from 'react'

const BecomeSellerStep4 = ({formik}:any) => {
  return (
    <Box>
    {/* <p className='text-xl font-bold text-center pb-5'>Address Details</p> */}
    <div className="space-y-5">
       <TextField
          fullWidth
          name='businessDetails.businessEmail'
          label="Business Email"
          value={formik.values.businessDetails?.email}
          onChange={formik.handleChange}
          error={formik.touched.businessDetails?.businessEmail && Boolean(formik.errors.businessDetails?.businessEmail)}
          helperText={formik.touched.businessDetails?.businessEmail && formik.errors.businessDetails?.businessEmail}
          onBlur={formik.handleBlur}
      />
      <TextField
          fullWidth
          name='businessDetails.businessMobile'
          label="Business Mobile"
          value={formik.values.businessDetails?.businessMobile}
          onChange={formik.handleChange}
          error={formik.touched.businessDetails?.businessMobile && Boolean(formik.errors.businessDetails?.businessMobile)}
          helperText={formik.touched.businessDetails?.businessMobile && formik.errors.businessDetails?.businessMobile}
          onBlur={formik.handleBlur}
      />
      <TextField
          fullWidth
          name='businessDetails.businessName'
          label="Business Name"
          value={formik.values.businessDetails?.businessName}
          onChange={formik.handleChange}
          error={formik.touched.businessDetails?.businessName && Boolean(formik.errors.businessDetails?.businessName)}
          helperText={formik.touched.businessDetails?.businessName && formik.errors.businessDetails?.businessName}
          onBlur={formik.handleBlur}
      />

    </div>
  </Box>
  )
}

export default BecomeSellerStep4
