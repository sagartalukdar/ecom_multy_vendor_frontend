import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Avatar, Badge, Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CategorySheet from './CategorySheet';
import { mainCategory } from '../../../Data/Category/MainCategory';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../../Redux/Store';

const navLists=[
  {name:"Men"},
  {name:"Women"},
  {name:"Home & Furniture"},
  {name:"Electronics"},
]

const Navbar = () => {
  const {cart,customer}=useAppSelector(store=>store);

  const navigate=useNavigate();
  
  const theme=useTheme();
  const isLarge=useMediaQuery(theme.breakpoints.up("lg"));

  const [selectedCategory,setSelectedCategory]=useState("men");
  const [showSheet,setShowSheet]=useState(false);
  return (
        <Box className="sticky top-0 left-0 right-0 bg-white z-10">
            <div className='flex items-center justify-between px-5 lg:px-10 border-b h-[70px]'>
                <div className='flex items-center gap-10'>
                    <div className='flex items-center gap-2'>
                      {!isLarge && <IconButton>
                        <MenuIcon/>
                      </IconButton>}
                      <h1 onClick={()=>navigate("/")} className="logo cursor-pointer text-lg md:text-2xl text-primary-color">
                        Ecom multi vendor
                      </h1>
                    </div>
                   {isLarge && <ul className='flex items-center font-medium text-gray-800'>
                      {mainCategory.map((item)=>
                        <li 
                        onMouseLeave={()=>{
                          setShowSheet(false);
                        }}
                        onMouseEnter={()=>{
                          setShowSheet(true);
                          setSelectedCategory(item.categoryId)
                        }}
                        className='mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center'>
                          {item.name}
                        </li>
                      )}
                    </ul>}
                </div>

                <div className='flex gap-1 lg:gap-3 items-center'>
                  <IconButton>
                    <SearchIcon/>
                  </IconButton>
                  {customer.profile?
                    <Button onClick={()=>navigate("/account/orders")} className='flex items-center gap-2'>
                      <Avatar>
                        {customer.profile?.fullName?.[0].toUpperCase()}
                      </Avatar>
                    </Button>:
                    <Button onClick={()=>navigate("/login")} variant='outlined'>Login</Button>
                  }
                  <IconButton>
                    <FavoriteBorderIcon sx={{fontSize:29}}/>
                  </IconButton>
                  <IconButton onClick={()=>navigate("/cart")}>
                    <Badge badgeContent={cart.cart?.cartItems?.length} color='success'>
                    <AddShoppingCartIcon className='text-gray-700' sx={{fontSize:29}}/>
                    </Badge>
                  </IconButton>
                  {isLarge && <Button onClick={()=>navigate("become-seller")} variant='outlined' startIcon={<StorefrontIcon/>}>
                    Become seller
                  </Button>                  
                  }
                </div>
            </div>

            {showSheet && selectedCategory &&<div
            onMouseLeave={()=>setShowSheet(false)}
            onMouseEnter={()=> setShowSheet(true)}
            className='categorySheet absolute top-[4.41rem] left-20 right-20 border'>
              <CategorySheet selectedCategory={selectedCategory}/>
            </div>}
        </Box>
  )
}

export default Navbar
