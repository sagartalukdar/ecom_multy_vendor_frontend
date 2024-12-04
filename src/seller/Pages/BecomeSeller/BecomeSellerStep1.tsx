import { Box, TextField } from '@mui/material'
import React from 'react'

const BecomeSellerStep1 = ({formik}:any) => {
  return (
    <Box>
      {/* <p className='text-xl font-bold text-center pb-9'>Contact Details</p> */}
      <div className="space-y-5">
      <TextField
            fullWidth
            name='sellerName'
            label="Seller Name"
            value={formik.values.sellerName}
            onChange={formik.handleChange}
            error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
            helperText={formik.touched.sellerName && formik.errors.sellerName}
            onBlur={formik.handleBlur}
        />
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
        <TextField
            fullWidth
            name='mobile'
            label="Mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
            onBlur={formik.handleBlur}
        />
         <TextField
            fullWidth
            name='password'
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
        />
         <TextField
            fullWidth
            name='gstin'
            label="GSTIN"
            value={formik.values.gstin}
            onChange={formik.handleChange}
            error={formik.touched.gstin && Boolean(formik.errors.gstin)}
            helperText={formik.touched.gstin && formik.errors.gstin}
            onBlur={formik.handleBlur}
        />
      </div>
    </Box>
  )
}

export default BecomeSellerStep1
