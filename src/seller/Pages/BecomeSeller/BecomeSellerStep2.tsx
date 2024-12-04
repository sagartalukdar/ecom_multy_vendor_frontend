import { Box, Grid2, TextField } from '@mui/material'
import React from 'react'

const BecomeSellerStep2 = ({formik}:any) => {
  return (
    <Box>
    {/* <p className='text-xl font-bold text-center pb-5'>Address Details</p> */}
    <form onSubmit={formik.handleSubmit}>
      <Grid2 container spacing={1}>
        <Grid2 size={{xs:12}}>
          <TextField
           fullWidth
           name='pickupAddress.name'
           label="Name"
           value={formik.values.pickupAddress?.name}
           onChange={formik.handleChange}
           error={formik.touched.pickupAddress?.name && Boolean(formik.errors.pickupAddress?.name)}
           helperText={formik.touched.pickupAddress?.name && formik.errors.pickupAddress?.name}
           onBlur={formik.handleBlur}
          />
        </Grid2>

        <Grid2 size={{xs:6}}>
          <TextField
           fullWidth
           name='pickupAddress.mobile'
           label="Mobile"
           value={formik.values.pickupAddress?.mobile}
           onChange={formik.handleChange}
           error={formik.touched.pickupAddress?.mobile && Boolean(formik.errors.pickupAddress?.mobile)}
           helperText={formik.touched.pickupAddress?.mobile && formik.errors.pickupAddress?.mobile}
           onBlur={formik.handleBlur}
          />
        </Grid2>

        <Grid2 size={{xs:6}}>
          <TextField
           fullWidth
           name='pickupAddress.pinCode'
           label="pinCode"
           value={formik.values.pickupAddress?.pinCode}
           onChange={formik.handleChange}
           error={formik.touched.pickupAddress?.pinCode && Boolean(formik.errors.pickupAddress?.pinCode)}
           helperText={formik.touched.pickupAddress?.pinCode && formik.errors.pickupAddress?.pinCode}
           onBlur={formik.handleBlur}
          />
        </Grid2>

        <Grid2 size={{xs:12}}>
          <TextField
           fullWidth
           name='pickupAddress.address'
           label="Address"
           value={formik.values.pickupAddress?.address}
           onChange={formik.handleChange}
           error={formik.touched.pickupAddress?.address && Boolean(formik.errors.pickupAddress?.address)}
           helperText={formik.touched.pickupAddress?.address && formik.errors.pickupAddress?.address}
           onBlur={formik.handleBlur}
          />
        </Grid2>

        <Grid2 size={{xs:6}}>
          <TextField
           fullWidth
           name='pickupAddress.city'
           label="City"
           value={formik.values.pickupAddress?.city}
           onChange={formik.handleChange}
           error={formik.touched.pickupAddress?.city && Boolean(formik.errors.pickupAddress?.city)}
           helperText={formik.touched.pickupAddress?.city && formik.errors.pickupAddress?.city}
           onBlur={formik.handleBlur}
          />
        </Grid2>

        <Grid2 size={{xs:6}}>
          <TextField
           fullWidth
           name='pickupAddress.state'
           label="State"
           value={formik.values.pickupAddress?.state}
           onChange={formik.handleChange}
           error={formik.touched.pickupAddress?.state && Boolean(formik.errors.pickupAddress?.state)}
           helperText={formik.touched.pickupAddress?.state && formik.errors.pickupAddress?.state}
           onBlur={formik.handleBlur}
          />
        </Grid2>           

        <Grid2 size={{xs:12}}>
          <TextField
           fullWidth
           name='pickupAddress.locality'
           label="Locality"
           value={formik.values.pickupAddress?.locality}
           onChange={formik.handleChange}
           error={formik.touched.pickupAddress?.locality && Boolean(formik.errors.pickupAddress?.locality)}
           helperText={formik.touched.pickupAddress?.locality && formik.errors.pickupAddress?.locality}
           onBlur={formik.handleBlur}
          />
        </Grid2>              

      </Grid2>
    </form>
  </Box>
  )
}

export default BecomeSellerStep2
