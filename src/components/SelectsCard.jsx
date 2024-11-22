import React from 'react'

const SelectsCard = (props) => {
  return (
      <div className='relative'>
        <img className='w-full h-full object-cover' src={props.bg} alt="/" />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-800/30'>
          <p className='absolute left-4 bottom-4 text-white font-bold text-2xl'> {props.text} </p>
        </div>
      </div>
  )
}

export default SelectsCard