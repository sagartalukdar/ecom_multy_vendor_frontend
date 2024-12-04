import { Delete } from '@mui/icons-material'
import { Avatar, Box, Divider, Grid, Grid2, IconButton, Rating } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
  return (
    <>
    <div className='flex justify-between my-5'>
        <Grid2 container spacing={8}>
            <Grid2 size={{xs:1}}>
              <Box>
                <Avatar className='text-white' sx={{width:40 ,height:40, bgcolor:"#9155FD"}}>
                    E
                </Avatar>
              </Box>
            </Grid2>
            <Grid2 size={{xs:9}}>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div>
                      <p className='text-lg font-semibold'>Review</p>
                      <p className='opacity-70'>2024-09-11 16:41 bah233</p>
                  </div>
                  <Rating readOnly value={4.5}  precision={.5}/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <div>
                      <img className='w-24 h-24 object-cover' src="https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/q/s/e/32-el-p-cot-el-cielo-original-imahfh98kkqgh6r5.jpeg?q=70" alt="" />
                  </div>

                </div>       
              </div>

            </Grid2>
        </Grid2>  

        <div>
          <IconButton>
            <Delete sx={{color:red[700]}}/>  
          </IconButton>   
        </div>
      
    </div> 
    <Divider/>
    </>
  )
}

export default ReviewCard
