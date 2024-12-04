import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup' 

const validationSchema=Yup.object().shape({
 
})

const BankDetailsForm = () => {

  const formik=useFormik(
    {
      initialValues:{
        accountNumber:"",
        accountHolderName:"",
        ifscCode:""
      },
      validationSchema:validationSchema,
      onSubmit:(values)=>{
        console.log(values)
      }
    }
   );

  return (
    <div className="space-y-5">
    <TextField
        fullWidth
        name='accountNumber'
        label="Account Number"
        value={formik.values.accountNumber}
        onChange={formik.handleChange}
        error={formik.touched.accountNumber && Boolean(formik.errors.accountNumber)}
        helperText={formik.touched.accountNumber && formik.errors.accountNumber}
        onBlur={formik.handleBlur}
    />
     <TextField
        fullWidth
        name='accountHolderName'
        label="Account Holder Name"
        value={formik.values.accountHolderName}
        onChange={formik.handleChange}
        error={formik.touched.accountHolderName && Boolean(formik.errors.accountHolderName)}
        helperText={formik.touched.accountHolderName && formik.errors.accountHolderName}
        onBlur={formik.handleBlur}
    />
    <TextField
        fullWidth
        name='ifscCode'
        label="IFSC Code"
        value={formik.values.ifscCode}
        onChange={formik.handleChange}
        error={formik.touched.ifscCode && Boolean(formik.errors.ifscCode)}
        helperText={formik.touched.ifscCode && formik.errors.ifscCode}
        onBlur={formik.handleBlur}
    />

    <div className="text-center w-full">
      <Button fullWidth variant='contained' type='submit' sx={{py:"14px",mt:'0.5rem'}}>
          update
      </Button>
    </div>

  </div>
  )
}

export default BankDetailsForm
