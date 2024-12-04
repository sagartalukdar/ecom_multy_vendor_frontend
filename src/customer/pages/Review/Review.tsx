import React from 'react'
import ReviewCard from './ReviewCard'
import { Box, Grid, LinearProgress, Rating } from '@mui/material'

const Review = () => {
  return (
    <div className='p-5 lg:px-20 flex flex-col lg:flex-row gap-20'>
       <section className='lg:h-[70vh] w-full md:w-1/2 lg:w-[40%] space-y-2 lg:sticky top-0'>
        <img className='w-full h-full rounded-md' src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRGteKTPVMvr-REOc0qa5jymkZjItz0cJgi1HCIN3EI7ubtC2t4uRQC2AQaQsWQSHxBFaRm3GhvAD2oF2CiKewAdIRVhDhRdvdfl-iHCqWreUgehrWIx-JJIg&usqp=CAc" alt="" />
        <div>
          <div>
            <p className='font-bold text-xl'>raam clothing</p>
            <p className='text-lg text-primary-color'>Men's White shirt</p>
          </div>
          <div className="flex items-center gap-3 mt-5 text-2xl">
            <span className='font-sans text-gray-800'>₹400</span>
            <span className='line-through text-gray-400'>₹999</span>
            <span className='text-primary-color font-semibold'> 60%</span>
          </div>
        </div>
       </section>
       <section className='w-full lg:w-[60%]'>
       <h1 className="font-semibold text-lg pb-4">Recent Review and Ratings</h1>
          <div className="border p-5">
            <Grid container spacing={7}>             
              <Grid item xs={12} md={12}>
                <h1 className="text-xl font-semibold pb-2">Product Ratings</h1>
                <div className='flex items-center space-x-5'>
                  <Rating value={4.6} precision={.5} readOnly />
                  <p className="opacity-50">254 ratings</p>
                </div>
                <Box className='mt-5 space-y-3'>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Exzcelent</p>
                    </Grid>
                    <Grid item xs={8}>
                      <LinearProgress sx={{bgcolor:'#d0d0d0',borderRadius:4,height:7}} variant='determinate' value={40} color='success'/>
                    </Grid>
                    
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Very good</p>
                    </Grid>
                    <Grid item xs={8}>
                      <LinearProgress sx={{bgcolor:'#d0d0d0',borderRadius:4,height:7}} variant='determinate' value={30} color='success'/>
                    </Grid>
                    
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Good</p>
                    </Grid>
                    <Grid item xs={8}>
                      <LinearProgress sx={{bgcolor:'#d0d0d0',borderRadius:4,height:7}} variant='determinate' value={25} color='primary'/>
                    </Grid>
                    
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Average</p>
                    </Grid>
                    <Grid item xs={8}>
                      <LinearProgress sx={{bgcolor:'#d0d0d0',borderRadius:4,height:7}} variant='determinate' value={20} color='warning'/>
                    </Grid>
                  
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>poor</p>
                    </Grid>
                    <Grid item xs={8}>
                      <LinearProgress sx={{bgcolor:'#d0d0d0',borderRadius:4,height:7}} variant='determinate' value={10} color='error'/>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
         {[1,1,1,1,1,,1,1].map((item)=><ReviewCard/>)}
       </section>

    </div>
  )
}

export default Review
