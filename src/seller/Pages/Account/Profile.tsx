import { Edit } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, IconButton, Modal } from '@mui/material'
import React, { useState } from 'react'
import ProfileFieldCard from '../../../Components/ProfileFieldCard'
import PersonalDetailsForm from './PersonalDetailsForm'
import BusinessDetailsForm from './BusinessDetailsForm'
import BankDetailsForm from './BankDetailsForm'
import PickupAddressForm from './PickupAddressForm'
import { useAppSelector } from '../../../Redux/Store'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:{
    xs:400,
    sm:500
  },
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const Profile = () => {
  const {seller}=useAppSelector(selector=>selector);

  const [open,setOpen]=useState(false);
  const [selectedForm,setSelectedForm]=useState("");
  const handleOpenForm=(formName:string)=>{
    setSelectedForm(formName);
    setOpen(true);
  }
  const handleClose=()=>{
    setOpen(false);
    setSelectedForm("");
  }

  const renderSelectedForm=()=>{
    switch(selectedForm){
      case "personalDetails":return <PersonalDetailsForm/>
      case "businessDetails":return <BusinessDetailsForm/>
      case "bankDetails":return <BankDetailsForm/>
      default:return <PickupAddressForm/> 
    }
  }

  return (
    <div className='lg:px-10 pt-3 pb-20 space-y-20'>
      <div className="w-full">
        <div className="flex w-full items-center pb-3 justify-between">
          <h1 className='text-2xl font-bold text-gray-600'>Personal Details</h1>
          <div onClick={()=>handleOpenForm("personalDetails")}>
            <IconButton color='success'  >
              <Edit/> 
            </IconButton>
          </div>
        </div>
        <div className="space-y-5">
          <Avatar sx={{width:"10rem",height:"10rem"}} src='https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=600'/> 
          <div className='w-full'>
            <div className="space-y-3">
            <ProfileFieldCard keys='Mobile' value={seller.profile?.mobile} /><Divider/>
            <ProfileFieldCard keys='Name' value={seller.profile?.sellerName} /><Divider/>
            <ProfileFieldCard keys='Email' value={seller.profile?.email} /><Divider/>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex w-full items-center pb-3 justify-between">
          <h1 className='text-2xl font-bold text-gray-600'>Business Details</h1>
          <div onClick={()=>handleOpenForm("businessDetails")}>
            <IconButton color='success'  >
              <Edit/> 
            </IconButton>
          </div>
        </div>
        <div className="space-y-5">
          <div className='w-full'>
            <div className="space-y-3">
            <ProfileFieldCard keys='business name/brand name' value={seller.profile?.businessDetails?.businessName} /><Divider/>
            <ProfileFieldCard keys='GSTIN' value={seller.profile?.businessDetails?.gstin || "not provided"} /><Divider/>
            <ProfileFieldCard keys='Account status' value={seller.profile?.accountStatus} /><Divider/>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex w-full items-center pb-3 justify-between">
          <h1 className='text-2xl font-bold text-gray-600'>Bank Details</h1>
          <div onClick={()=>handleOpenForm("bankDetails")}>
            <IconButton color='success'  >
              <Edit/> 
            </IconButton>
          </div>
        </div>
        <div className="space-y-5">
          <div className='w-full'>
            <div className="space-y-3">
            <ProfileFieldCard keys='Account holder name' value={seller.profile?.bankDetails?.accountHolderName} /><Divider/>
            <ProfileFieldCard keys='Account number' value={seller.profile?.bankDetails?.accountNumber} /><Divider/>
            <ProfileFieldCard keys='IFSC code' value={seller.profile?.bankDetails?.ifscCode} /><Divider/>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex w-full items-center pb-3 justify-between">
          <h1 className='text-2xl font-bold text-gray-600'>Pickup Address</h1>
          <div onClick={()=>handleOpenForm("pickupAddress")}>
            <IconButton color='success'  >
              <Edit/> 
            </IconButton>
          </div>
        </div>
        <div className="space-y-5">
          <div className='w-full'>
            <div className="space-y-3">
            <ProfileFieldCard keys='address' value={seller.profile?.pickupAddress?.address} /><Divider/>
            <ProfileFieldCard keys='city' value={seller.profile?.pickupAddress?.city} /><Divider/>
            <ProfileFieldCard keys='state' value={seller.profile?.pickupAddress?.state} /><Divider/>
            <ProfileFieldCard keys='Mobile' value={seller.profile?.pickupAddress?.mobile} /><Divider/>
            </div>
          </div>
        </div>
      </div>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            renderSelectedForm()
          }
        </Box>
      </Modal>

     
    </div>
  )
}

export default Profile
