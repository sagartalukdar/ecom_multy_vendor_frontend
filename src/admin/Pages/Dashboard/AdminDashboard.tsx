import React from 'react'
import AdminDrawerList from '../../Components/AdminDrawerList'
import AdminRoutes from '../../../Routes/AdminRoutes'

const AdminDashboard = () => {
  const toggleDrawerList=()=>{}
  return (
    <div>
      <div className="lg:flex lg:h-[90vh]">
        <section className='hidden lg:block h-full'>
          <AdminDrawerList toggleDrawerList={toggleDrawerList}  />
        </section>
        <section className='p-10 w-full lg:w-[80%] overflow-y-auto'>
          <AdminRoutes/>
        </section>
      </div>
    </div>
  )
}

export default AdminDashboard
