import React from 'react'
import ProfileFieldCard from '../../../Components/ProfileFieldCard'

const UserDetails = () => {
  return (
    <div className='flex justify-center py-10'>
      <div className="w-full lg:w[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className='text-2xl font-bold text-gray-600'>Personal Details</h1>
        </div>
        <div className="space-y-3">
          <ProfileFieldCard keys='Mobile' value='124141410' />
          <ProfileFieldCard keys='Name' value='User name' />
          <ProfileFieldCard keys='Email' value='Email@gmail.com' />
        </div>
      </div>
    </div>
  )
}

export default UserDetails
