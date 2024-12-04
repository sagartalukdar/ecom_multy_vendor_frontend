import React from 'react'

const DealCard = () => {
  return (
    <div className='w-[10rem] cursor-pointer'>
      <img className='border-x-[7px] border-t-[7px] border-pink-600 w-full h-[10rem] object-cover object-top' src="https://rukminim2.flixcart.com/image/612/612/kppt47k0/table-clock/9/b/p/unicorn-alarm-table-clock-with-pen-stand-silent-bedside-alarm-original-imag3w7ssys7p2vr.jpeg?q=70" alt="" />
      <div className="border-4 border-black bg-black text-white p-2 text-center">
        <p className='text-lg font-semibold'>Smart Watch</p>
        <p className='text-2xl font-bold'>23% off</p>
        <p className='text-balance text-lg'>shop now</p>
      </div>
    </div>
  )
}

export default DealCard
