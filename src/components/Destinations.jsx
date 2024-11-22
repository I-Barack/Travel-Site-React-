import React from 'react'
import Travel6 from '../assets/travel6.jpg';
import Travel7 from '../assets/travel7.jpg';
import Travel8 from '../assets/travel8.jpg';
import Travel9 from '../assets/travel9.jpg';
import Travel10 from '../assets/travel10.jpg';


const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1>All-Inclusive Resorts</h1>
      <p className='my-4'>On the Caribbean's Best Beaches</p>
      <div className='grid grid-rows-none py-4 gap-2 md:grid-cols-5 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Travel6} alt="/" />
        <img className='w-full h-full object-cover' src={Travel7} alt="/" />
        <img className='w-full h-full object-cover' src={Travel8} alt="/" />
        <img className='w-full h-full object-cover' src={Travel9} alt="/" />
        <img className='w-full h-full object-cover' src={Travel10} alt="/" />
      </div>
    </div>
  )
}

export default Destinations