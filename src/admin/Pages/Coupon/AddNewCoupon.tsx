import { LocalizationProvider } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { useFormik } from 'formik'
import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Button, Grid2, TextField } from '@mui/material';
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
  code: Yup.string().required("Code is required"),
  discountedPercentage: Yup.number().min(0, "Discount percentage cannot be negative").required("Discount percentage is required"), // Validate non-negative numbers
  validityStartDate: Yup.date()
    .nullable()
    .required("Start date is required"),
  validityEndDate: Yup.date()
    .nullable()
    .required("End date is required"),
  minimumOrderValue: Yup.number().min(0, "cannot be negative").required("Minimum order value is required"),
});



interface CouponFormValue{
  code:string,
  discountedPercentage:number,
  validityStartDate:Dayjs|null,
  validityEndDate:Dayjs| null,
  minimumOrderValue:number,
}


const AddNewCoupon = () => {
  const formik=useFormik<CouponFormValue>(
    {
      initialValues:{
        code:"",
        discountedPercentage:0,
        validityStartDate:null,
        validityEndDate:null,
        minimumOrderValue:0,
      },
      validationSchema:validationSchema,
      onSubmit:(values)=>{
        console.log(values);
        const formatedValue={
          ...values,
          validityStartDate:values.validityStartDate?.toISOString(),
          validityEndDate:values.validityEndDate?.toISOString()
        }
        console.log("formated values : "+values);
      }
    }
  );
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary-color pb-5 text-center">Create New Coupon</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box component={"form"} onSubmit={formik.handleSubmit} sx={{mt:3}}>         
          <Grid2 container spacing={2}>
            <Grid2 size={{xs:12,md:4}}>
              <TextField
              required
              fullWidth
              name='code'
              label="Coupon Code"
              value={formik.values.code}
              onChange={formik.handleChange}
              error={formik.touched.code && Boolean(formik.errors.code)}
              helperText={formik.touched.code && formik.errors.code}
              onBlur={formik.handleBlur}
              />
            </Grid2>

            <Grid2 size={{xs:12,md:4}}>
              <TextField
              required
              fullWidth
              type='number'
              name='minimumOrderValue'
              label="Minimum Order Value"
              value={formik.values.minimumOrderValue}
              onChange={formik.handleChange}
              error={formik.touched.minimumOrderValue && Boolean(formik.errors.minimumOrderValue)}
              helperText={formik.touched.minimumOrderValue && formik.errors.minimumOrderValue}
              onBlur={formik.handleBlur}
              />
            </Grid2>

            <Grid2 size={{xs:12,md:4}}>
              <TextField
              required
              type='number'
              fullWidth
              name='discountedPercentage'
              label="Discounted Percentage"
              value={formik.values.discountedPercentage}
              onChange={formik.handleChange}
              error={formik.touched.discountedPercentage && Boolean(formik.errors.discountedPercentage)}
              helperText={formik.touched.discountedPercentage && formik.errors.discountedPercentage}
              onBlur={formik.handleBlur}
              />
            </Grid2>

            <Grid2 size={{xs:12,sm:6}}>
              <DatePicker
               sx={{width:"100%"}}
               label="Validity Start Date"
               name='validityStartDate'
               onChange={formik.handleChange}
               value={formik.values.validityStartDate}
              />
            </Grid2>

            <Grid2 size={{xs:12,sm:6}}>
              <DatePicker
               sx={{width:"100%"}}
               label="Validity End Date"
               name='validityEndDate'
               onChange={formik.handleChange}
               value={formik.values.validityEndDate}
              />
            </Grid2>

            <Grid2 size={{xs:12}}>
             <Button fullWidth variant='contained' sx={{py:'.5rem'}}>
              Add coupon
             </Button>
            </Grid2>

          </Grid2>
        </Box>
      </LocalizationProvider>
    </div>
  )
}

export default AddNewCoupon
