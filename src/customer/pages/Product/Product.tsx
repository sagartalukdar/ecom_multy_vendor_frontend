import React, { useEffect, useRef, useState } from 'react'
import FilterSection from './FilterSection'
import ProductCard from './ProductCard'
import { Box, Divider, FormControl, IconButton, InputLabel, MenuItem, Pagination, Select, useMediaQuery, useTheme } from '@mui/material'
import FilterAltSharpIcon from '@mui/icons-material/FilterAltSharp';
import { useNavigate, useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../Redux/Store';
import { useSearchParams } from 'react-router-dom';
import { fetchAllProducts } from '../../../Redux/Customer/CustomerProductSlice';

const Product = () => {
  const theme=useTheme();
  const isLarge=useMediaQuery(theme.breakpoints.up("lg"));
  const [showSmallFilter,setShowSmallFilter]=useState(false);

  const dispatch=useAppDispatch();
  const {product}=useAppSelector(store=>store);

  const [searchParam,setSearchParam]=useSearchParams();
  const {category}=useParams();
  
  const handleClickSmallFilter=()=>{
    setShowSmallFilter(!showSmallFilter);
  }
  const smallFilterRef=useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (smallFilterRef.current && !smallFilterRef.current.contains(event.target)) {
        setShowSmallFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [smallFilterRef]);

  const navigate=useNavigate();

  const [page,setPage]=useState(1);
  const [sort,setSort]=useState();
  const handleSortChange=(event:any)=>{
     setSort(event.target.value);
  }

  const handlePageChange=(value:number)=>{
    setPage(value);
  }

  useEffect(()=>{
    const [minPrice,maxPrice]=searchParam.get("price")?.split("-")||[];
    const color=searchParam.get("color");
    const minDiscount=searchParam.get("discount")?Number(searchParam.get("discount")):undefined;
    const pageNumber=page-1;

    const newFilter={
      category,
      color:color || "",
      minPrice:minPrice?Number(minPrice):undefined,
      maxPrice:maxPrice?Number(maxPrice):undefined,
      minDiscount,
      pageNumber
    }

    dispatch(fetchAllProducts(newFilter));
  },[category,searchParam])

  return (
    <div className='-z-10 mt-10' >
      <div className="">
        <h1 className="text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2">
            Women sarees
        </h1>
      </div>

      <div className="lg:flex">
        <section className='filter_section hidden lg:block w-[20%]'>
          <FilterSection/>
        </section>
        <div className="w-full lg:w-[80%] space-y-5">
          <div className="flex justify-between items-center px-9 h-[40px]">
            <div className="relative w-full">
              {!isLarge && (
                <IconButton onClick={handleClickSmallFilter}>
                  <FilterAltSharpIcon/>
                </IconButton>
              )}
              {
                !isLarge && showSmallFilter && (
                  <Box ref={smallFilterRef} className="z-50 shadow-2xl relative top-[24rem] ">
                    <FilterSection/>
                  </Box>
                )
              }
            </div>

            <FormControl size='small' sx={{width:'200px'}}>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"               
                label="sort"
                onChange={handleSortChange}
              >
                <MenuItem value={"price_low"}>price: Low - High</MenuItem>
                <MenuItem value={"price_high"}>price: High - Low</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Divider/>
          <section className='products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-5 px-5 justify-center'>
            {product.products?.map((item)=><ProductCard item={item}/>)}
          </section>   
            <div className="text-center flex justify-center items-center pt-10 pb-28">
              <Pagination color='primary' onChange={(e,value)=>handlePageChange(value)} count={10} variant='outlined' />
            </div>
        </div>

      </div>
    </div>
  )
}

export default Product
