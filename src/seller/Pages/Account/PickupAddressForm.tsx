import React from 'react'
import * as Yup from 'yup' 
import AddressForm from '../../../customer/pages/Checkout/AddressForm'
import { useFormik } from 'formik'
import { Button, Grid2, TextField } from '@mui/material'

const validationSchema=Yup.object().shape({
  name:Yup.string().required("name is required"),
  mobile:Yup.string().required("mobile number is required").matches(/^[6-9]\d{9}$/,"invalid mobile number"),
  pinCode:Yup.string().required("pinCode is required").matches(/^[1-9][0-9]{6}$/,"invalid pin code"),
  address:Yup.string().required("address is required"),
  city:Yup.string().required("city is required"),
  state:Yup.string().required("state is required"),
  locality:Yup.string().required("locality is required"),
})

const PickupAddressForm = () => {

  const formik=useFormik(
    {
      initialValues:{
        name:"",
        mobile:"",
        pinCode:"",
        address:"",
        city:"",
        state:"",
        locality:""
      },
      validationSchema:validationSchema,
      onSubmit:(values)=>{
        console.log(values)
      }
    }
   );

  return (

    <form onSubmit={formik.handleSubmit}>
      <Grid2 container spacing={1}>
        <Grid2 size={{xs:12}}>
          <TextField
           fullWidth
           name='name'
           label="Name"
           value={formik.values.name}
           onChange={formik.handleChange}
           error={formik.touched.name && Boolean(formik.errors.name)}
           helperText={formik.touched.name && formik.errors.name}
           onBlur={formik.handleBlur}
          />
        </Grid2>

        <Grid2 size={{xs:6}}>
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
        </Grid2>

        <Grid2 size={{xs:6}}>
          <TextField
           fullWidth
           name='pinCode'
           label="pinCode"
           value={formik.values.pinCode}
           onChange={formik.handleChange}
           error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
           helperText={formik.touched.pinCode && formik.errors.pinCode}
           onBlur={formik.handleBlur}
          />
        </Grid2>

        <Grid2 size={{xs:12}}>
          <TextField
           fullWidth
           name='address'
           label="Address"
           value={formik.values.address}
           onChange={formik.handleChange}
           error={formik.touched.address && Boolean(formik.errors.address)}
           helperText={formik.touched.address && formik.errors.address}
           onBlur={formik.handleBlur}
          />
        </Grid2>

        <Grid2 size={{xs:6}}>
          <TextField
           fullWidth
           name='city'
           label="City"
           value={formik.values.city}
           onChange={formik.handleChange}
           error={formik.touched.city && Boolean(formik.errors.city)}
           helperText={formik.touched.city && formik.errors.city}
           onBlur={formik.handleBlur}
          />
        </Grid2>

        <Grid2 size={{xs:6}}>
          <TextField
           fullWidth
           name='state'
           label="State"
           value={formik.values.state}
           onChange={formik.handleChange}
           error={formik.touched.state && Boolean(formik.errors.state)}
           helperText={formik.touched.state && formik.errors.state}
           onBlur={formik.handleBlur}
          />
        </Grid2>           

        <Grid2 size={{xs:12}}>
          <TextField
           fullWidth
           name='locality'
           label="Locality"
           value={formik.values.locality}
           onChange={formik.handleChange}
           error={formik.touched.locality && Boolean(formik.errors.locality)}
           helperText={formik.touched.locality && formik.errors.locality}
           onBlur={formik.handleBlur}
          />
        </Grid2>              

        <Grid2 size={{xs:12}}>
          <Button fullWidth variant='contained' type='submit' sx={{py:"14px",mt:'0.5rem'}}>
            update address
          </Button>
        </Grid2>              
        
      </Grid2>
    </form>

  )
}

export default PickupAddressForm
