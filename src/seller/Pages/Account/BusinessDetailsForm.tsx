import { Button, Grid2, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup' 

const validationSchema=Yup.object().shape({
  businessName:Yup.string().required("name is required"),
  GSTIN:Yup.string().required("GSTIN is required"),
  accountStatus:Yup.string().required("")
})

const BusinessDetailsForm = () => {

  const formik=useFormik(
    {
      initialValues:{
        businessName:"",
        GSTIN:"",
        accountStatus:""
      },
      validationSchema:validationSchema,
      onSubmit:(values)=>{
        console.log(values)
      }
    }
   );

  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <Grid2 container spacing={1}>
        <Grid2 size={{xs:12}}>
          <TextField
           fullWidth
           name='businessName'
           label="Business Name / Brand Name"
           value={formik.values.businessName}
           onChange={formik.handleChange}
           error={formik.touched.businessName && Boolean(formik.errors.businessName)}
           helperText={formik.touched.businessName && formik.errors.businessName}
           onBlur={formik.handleBlur}
          />
        </Grid2>

        <Grid2 size={{xs:6}}>
          <TextField
            fullWidth
            name='GSTIN'
            label="GSTIN"
            value={formik.values.GSTIN}
            onChange={formik.handleChange}
            error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)}
            helperText={formik.touched.GSTIN && formik.errors.GSTIN}
            onBlur={formik.handleBlur}
          />
        </Grid2>

        <Grid2 size={{xs:6}}>
          <TextField
           fullWidth
           name='accountStatus'
           label="Amount Status"
           value={formik.values.accountStatus}
           onChange={formik.handleChange}
           error={formik.touched.accountStatus && Boolean(formik.errors.accountStatus)}
           helperText={formik.touched.accountStatus && formik.errors.accountStatus}
           onBlur={formik.handleBlur}
          />
        </Grid2>           

        <Grid2 size={{xs:12}}>
          <Button fullWidth variant='contained' type='submit' sx={{py:"14px",mt:'0.5rem'}}>
            update
          </Button>
        </Grid2>              
        
      </Grid2>
    </form>
    </div>
  )
}

export default BusinessDetailsForm
