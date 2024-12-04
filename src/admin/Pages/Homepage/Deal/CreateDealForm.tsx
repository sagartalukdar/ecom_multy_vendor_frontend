import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik'
import React from 'react'



const CreateDealForm = () => {
    const formik=useFormik({
        initialValues:{
            discount:0,
            category:null
        },
        onSubmit:(values)=>{
            console.log(values);
        }
    })
  return (
    <Box component={"form"} onSubmit={formik.handleSubmit} className='space-y-6'>
      <Typography variant='h4' className='text-center'>
        Create Deal
      </Typography>
      <TextField
        fullWidth
        name='discount'
        label="Discount"
        value={formik.values.discount}
        onChange={formik.handleChange}
        error={formik.touched.discount && Boolean(formik.errors.discount)}
        helperText={formik.touched.discount && formik.errors.discount}
        onBlur={formik.handleBlur}
      />
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={formik.values.category}
        label="Category"
        name='category'
        onChange={formik.handleChange}
      >
       {[1,1,1,1].map((item,index)=><MenuItem key={index}>{item}</MenuItem>)}
      </Select>
      </FormControl>

      <Button fullWidth sx={{py:".7rem"}} type='submit' variant='contained'>create </Button>
    </Box>
  )
}

export default CreateDealForm
