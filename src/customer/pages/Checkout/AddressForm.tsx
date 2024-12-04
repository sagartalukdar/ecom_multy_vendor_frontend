import { Box, Button, Grid2, Modal, TextField } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import { useAppDispatch } from '../../../Redux/Store';
import { createOrder } from '../../../Redux/Customer/OrderSlice';

const validationSchema=Yup.object().shape({
  name:Yup.string().required("name is required"),
  mobile:Yup.string().required("mobile number is required").matches(/^[6-9]\d{9}$/,"invalid mobile number"),
  pinCode:Yup.string().required("pinCode is required").matches(/^[1-9][0-9]{6}$/,"invalid pin code"),
  address:Yup.string().required("address is required"),
  city:Yup.string().required("city is required"),
  state:Yup.string().required("state is required"),
  locality:Yup.string().required("locality is required"),
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:{
    xs:400,
    sm:500
  },
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const AddressForm = ({openAddressForm,handleCloseAddressForm,paymentGateway}:any) => {
  const dispatch=useAppDispatch();
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
      dispatch(createOrder({shippingAddress:values,jwt:localStorage.getItem("jwt")||"",paymentMethod:paymentGateway}))
      
    }
  }
 );
  return (
    <div>
      <Modal
        open={openAddressForm}
        onClose={handleCloseAddressForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <p className='text-xl font-bold text-center pb-5'>Contact Details</p> */}
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
                  Add address
                </Button>
              </Grid2>              
              
            </Grid2>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AddressForm
