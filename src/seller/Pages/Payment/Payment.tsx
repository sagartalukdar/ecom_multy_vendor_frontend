import { Button, Card, Divider } from '@mui/material'
import React from 'react'
import TransactionTable from './Transaction'

const Payment = () => {
  return (
    <div className='space-y-4'>
      <Card className='rounded-md space-y-4 p-5'>
        <h1 className="text-gray-600 font-medium">Total Earning</h1>
        <h1 className="font-bold text-xl pb-1">₹10425</h1>
        <Divider/>
        <p className="text-gray-600 font-medium pt-1">last payment</p>
      </Card>
      <Button>
        transaction
      </Button>
      <TransactionTable/>
    </div>
  )
}

export default Payment
