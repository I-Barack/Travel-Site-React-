import React from 'react'
import Travel6 from '../assets/travel6.jpg';
import Travel7 from '../assets/travel7.jpg';
import Travel8 from '../assets/travel8.jpg';
import Travel9 from '../assets/travel9.jpg';
import Travel10 from '../assets/travel10.jpg';
import SelectsCard from './SelectsCard';


const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

      <SelectsCard bg={Travel6} text='Bahamas' />
      <SelectsCard bg={Travel7} text='Bahamas' />
      <SelectsCard bg={Travel8} text='Bahamas' />
      <SelectsCard bg={Travel9} text='Bahamas' />
      <SelectsCard bg={Travel10} text='Bahamas' />
      <SelectsCard bg={Travel8} text='Bahamas' />

    </div>
  )
}

export default Selects