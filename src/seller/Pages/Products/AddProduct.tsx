import { AddPhotoAlternate, CloseRounded } from '@mui/icons-material';
import { Button, CircularProgress, FormControl, FormHelperText, Grid2, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup' 
import { uploadToCloudinary } from '../../../Util/uploadToCloudinary';
import { colorFilters } from '../../../Data/Filter/Color';
import { mainCategory } from '../../../Data/Category/MainCategory';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../../Redux/Store';
import { createProducts } from '../../../Redux/Seller/sellerProductSlice';
import { menLevelTwo } from '../../../Data/Category/LevelTwo/MenLevelTwo';
import { womenLevelTwo } from '../../../Data/Category/LevelTwo/WomenLevelTwo';
import { furnitureLevelTwo } from '../../../Data/Category/LevelTwo/FurnitureLevelTwo';
import { electricLevelTwo } from '../../../Data/Category/LevelTwo/ElectricLevelTwo';
import { menLevelThree } from '../../../Data/Category/LevelThree/MenLevelThree';
import { womenLevelThree } from '../../../Data/Category/LevelThree/WomenLevelThree';
import { electricLevelThree } from '../../../Data/Category/LevelThree/ElectricLevelThree';
import { furnitureLevelThree } from '../../../Data/Category/LevelThree/FurnitureLevelThree';

const validationSchema=Yup.object().shape({

})

const AddProduct = () => {
  const dispatch=useAppDispatch();
  const [uploadingImage,setUploadingImage]=useState(false);
  const [showSnackBar,setShowSnackBar]=useState(false);
  const [selectedCategory1,setSelectedCategory1]=useState("");
  const [selectedCategory2,setSelectedCategory2]=useState("");

  const categoryTwo:{[key:string]:any[]}={
    men:menLevelTwo,
    women:womenLevelTwo,
    electronics:electricLevelTwo,
    home_furniture:furnitureLevelTwo
  }
  
  const categoryThree:{[key:string]:any[]}={
    men:menLevelThree,
    women:womenLevelThree,
    electronics:electricLevelThree,
    home_furniture:furnitureLevelThree
  }
  const childCategory=(category:any,parentCategoryId:any)=>{
    return category.filter((child:any)=>child.parentcategoryId===parentCategoryId);
  }

  const formik=useFormik(
    {
      initialValues:{
        title:"",
        description:"",
        mrpPrice:"",
        sellingPrice:"",
        quantity:"",
        color:"",
        images:[],
        category1:"",
        category2:"",
        category3:"",
        sizes:""
      },
      validationSchema:validationSchema,
      onSubmit:(values)=>{
        console.log(values)
        dispatch(createProducts({request:values,jwt:localStorage.getItem("jwt")}));
      }
    }
   );

   const handleCategoryChange=(e:any)=>{
    const {name,value}=e.target;
    formik.setFieldValue(name,value);

    if(name==="category1"){
      setSelectedCategory1(value);
    }else{
      setSelectedCategory2(value);
    }
   }

  const handleChangeProductImage=async(event:any)=>{
    const file=event.target.files[0];
    setUploadingImage(true);
    const image=await uploadToCloudinary(file,"image");
    // const image=URL.createObjectURL(file);
    formik.setFieldValue("images",[image,...formik.values.images]);
    setUploadingImage(false);
  }
  const removeImage=(index:number)=>{
    const updatedImages=[...formik.values.images];
    updatedImages.splice(index,1);
    formik.setFieldValue("images",updatedImages);
  }
  return (
    <div>
      <form className='space-y-4 p-4' onSubmit={formik.handleSubmit}>
      <Grid2 container spacing={2}>
        <Grid2 size={{xs:12}} className="flex flex-wrap gap-5">

          <input type="file" 
           accept='image/*'
           id='productImage'
           style={{display:"none"}}
           onChange={handleChangeProductImage}
          />

          <label
          className='relative'
          htmlFor="productImage">
            <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400'>
              <AddPhotoAlternate className='text-gray-700' />
            </span>
            {uploadingImage && (
              <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                <CircularProgress/>
              </div>
            )}
          </label>

          <div className="flex flex-wrap gap-2">
            {formik.values.images?.map((item,index)=>(
              <div className="relative">
                <img src={item} key={index} className='w-24 h-24 object-cover' alt="" />
                <IconButton
                onClick={()=>removeImage(index)}
                size='small'
                color='error'
                sx={{
                  position:'absolute',
                  top:0,
                  right:0,
                  outline:"none"
                }}
                >
                  <CloseRounded sx={{bgcolor:'white'}}/>
                </IconButton>
              </div>
            ))}
          </div>

        </Grid2>

        <Grid2 size={{xs:6}}>
          <TextField
            fullWidth
            name='title'
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            onBlur={formik.handleBlur}
          />
        </Grid2>

        <Grid2 size={{xs:6}}>
          <FormControl
           fullWidth   
           error={formik.touched.color && Boolean(formik.errors.color)}
          >
            <InputLabel id="color-label">Color</InputLabel>

            <Select labelId='color-label' 
            id='color'
            name='color'
            label="Color"
            value={formik.values.color}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            >
             <MenuItem>
               <em>None</em>
             </MenuItem>

             {colorFilters.map((color,index)=>
             <MenuItem value={color.name}>
             <div key={index} className='flex items-center justify-between w-full'>
              <p>{color.name}</p>
              <p style={{backgroundColor:color.hexValue}} className={`h-5 w-5 rounded-full  ${color.name==="White"?"border border-black":""}`}></p>
            </div>
             </MenuItem>)}
            </Select>
            {/* <FormHelperText>{formik.touched.color && formik.errors.color}</FormHelperText> */}
          </FormControl>
        </Grid2>  

        <Grid2 size={{xs:12}}>
          <TextField
           multiline
           rows={4}
           fullWidth
           name='description'
           label="Description"
           value={formik.values.description}
           onChange={formik.handleChange}
           error={formik.touched.description && Boolean(formik.errors.description)}
           helperText={formik.touched.description && formik.errors.description}
           onBlur={formik.handleBlur}
          />
        </Grid2>    

         <Grid2 size={{xs:4}}>
          <TextField
           fullWidth
           name='mrpPrice'
           label="MRP Price"
           value={formik.values.mrpPrice}
           onChange={formik.handleChange}
           error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
           helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
           onBlur={formik.handleBlur}
          />
        </Grid2>        

        <Grid2 size={{xs:4}}>
          <TextField
           fullWidth
           name='sellingPrice'
           label="Selling Price"
           value={formik.values.sellingPrice}
           onChange={formik.handleChange}
           error={formik.touched.sellingPrice && Boolean(formik.errors.sellingPrice)}
           helperText={formik.touched.sellingPrice && formik.errors.sellingPrice}
           onBlur={formik.handleBlur}
          />
        </Grid2>      

         <Grid2 size={{xs:4}}>
          <TextField
           fullWidth
           name='quantity'
           label="Quantity"
           value={formik.values.quantity}
           onChange={formik.handleChange}
           error={formik.touched.quantity && Boolean(formik.errors.quantity)}
           helperText={formik.touched.quantity && formik.errors.quantity}
           onBlur={formik.handleBlur}
          />
        </Grid2>       

        <Grid2 size={{xs:12,md:4,lg:3}}>
           <FormControl
           fullWidth   
           error={formik.touched.category1 && Boolean(formik.errors.category1)}
          >
            <InputLabel id="category1-label">First Category</InputLabel>

            <Select labelId='category1-label' 
            id='category1'
            name='category1'
            label="First Category"
            value={formik.values.category1}
            onChange={handleCategoryChange}
            onBlur={formik.handleBlur}
            >
             <MenuItem>
               <em>None</em>
             </MenuItem>

             {mainCategory.map((item,index)=>
             <MenuItem key={index} value={item.categoryId}>
              {item.name}
             </MenuItem>)}
            </Select>
            {/* <FormHelperText>{formik.touched.color && formik.errors.color}</FormHelperText> */}
          </FormControl>
        </Grid2>  

        <Grid2 size={{xs:12,md:4,lg:3}}>
           <FormControl
           fullWidth   
           error={formik.touched.category2 && Boolean(formik.errors.category2)}
          >
            <InputLabel id="category2-label">Second Category</InputLabel>

            <Select labelId='category2-label' 
            id='category2'
            name='category2'
            label="Second Category"
            value={formik.values.category2}
            onChange={handleCategoryChange}
            onBlur={formik.handleBlur}
            >
             <MenuItem>
               <em>None</em>
             </MenuItem>

             {categoryTwo[selectedCategory1]?.map((item,index)=>
             <MenuItem key={index} value={item.categoryId}>
              {item.name}
             </MenuItem>)}

            </Select>
            {/* <FormHelperText>{formik.touched.color && formik.errors.color}</FormHelperText> */}
          </FormControl>
        </Grid2> 

        <Grid2 size={{xs:12,md:4,lg:3}}>
           <FormControl
           fullWidth   
           error={formik.touched.category3 && Boolean(formik.errors.category3)}
          >
            <InputLabel id="category3-label">Third Category</InputLabel>

            <Select labelId='category3-label' 
            id='category3'
            name='category3'
            label="Third Category"
            value={formik.values.category3}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            >
             <MenuItem>
               <em>None</em>
             </MenuItem>

             {categoryThree[selectedCategory1] && childCategory(categoryThree[selectedCategory1],selectedCategory2).map((item:any,index:number)=>
             <MenuItem key={index} value={item.categoryId}>
              {item.name}
             </MenuItem>)}

            </Select>
            {/* <FormHelperText>{formik.touched.color && formik.errors.color}</FormHelperText> */}
          </FormControl>
        </Grid2> 

        <Grid2 size={{xs:12,md:4,lg:3}}>
          <TextField
           fullWidth
           name='sizes'
           label="Sizes"
           value={formik.values.sizes}
           onChange={formik.handleChange}
           error={formik.touched.sizes && Boolean(formik.errors.sizes)}
           helperText={formik.touched.sizes && formik.errors.sizes}
           onBlur={formik.handleBlur}
          />
        </Grid2>   

        <Grid2 size={{xs:12}} className="text-center">
          <Button fullWidth variant='contained' type='submit' sx={{py:"14px",mt:'0.5rem'}}>
            Add Product
          </Button>
        </Grid2>              
        
      </Grid2>
      </form>
    </div>
  )
}

export default AddProduct
