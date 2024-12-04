import { Button, Grid2, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup' 

const validationSchema=Yup.object().shape({
  name:Yup.string().required("name is required"),
  mobile:Yup.string().required("mobile number is required").matches(/^[6-9]\d{9}$/,"invalid mobile number"),
})

const PersonalDetailsForm = () => {

  const formik=useFormik(
    {
      initialValues:{
        name:"",
        mobile:"",
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
           name='name'
           label="Name"
           value={formik.values.name}
           onChange={formik.handleChange}
           error={formik.touched.name && Boolean(formik.errors.name)}
           helperText={formik.touched.name && formik.errors.name}
           onBlur={formik.handleBlur}
          />
        </Grid2>

        <Grid2 size={{xs:12}}>
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

export default PersonalDetailsForm
