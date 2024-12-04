import React from 'react'
import { menLevelTwo } from '../../../Data/Category/LevelTwo/MenLevelTwo'
import { womenLevelTwo } from '../../../Data/Category/LevelTwo/WomenLevelTwo'
import { electricLevelTwo } from '../../../Data/Category/LevelTwo/ElectricLevelTwo'
import { furnitureLevelTwo } from '../../../Data/Category/LevelTwo/FurnitureLevelTwo'
import { menLevelThree } from '../../../Data/Category/LevelThree/MenLevelThree'
import { womenLevelThree } from '../../../Data/Category/LevelThree/WomenLevelThree'
import { electricLevelThree } from '../../../Data/Category/LevelThree/ElectricLevelThree'
import { furnitureLevelThree } from '../../../Data/Category/LevelThree/FurnitureLevelThree'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router'

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

const CategorySheet = ({selectedCategory}:any) => {
  const navigate=useNavigate();
  const childCategory=(category:any,parentCategoryId:any)=>{
    return category.filter((child:any)=>child.parentcategoryId===parentCategoryId);
  }
  return (
    <Box sx={{zIndex:1}} className="bg-white shadow-lg lg:h-[400px] overflow-y-auto">
      <div className="flex text-sm flex-wrap">
        {categoryTwo[selectedCategory]?.map((item:any,index)=>
        <div key={index} className={`p-8 lg:w-[20%] ${index%2===0?"bg-slate-50":"bg-white"}`}>
          <p className='text-primary-color mb-5 font-semibold'>{item.name}</p>
          <ul className='space-y-3'>
            {childCategory(categoryThree[selectedCategory],item.categoryId).map((item:any)=>
            <li onClick={()=>navigate(`/products/${item.categoryId}`)} className="hover:text-primary-color cursor-pointer">
              {item.name}
            </li>
            )}
          </ul>
        </div>
        )}
      </div>
    </Box>
  )
}

export default CategorySheet
