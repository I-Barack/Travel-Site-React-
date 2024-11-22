import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16 flex justify-center'>
      <div className='max-w-[1240px] flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>BEACHES.</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaInstagram className='icon' />
            <FaPinterest className='icon' />
            <FaYoutube className='icon' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroon</li>
            <li>Advertising</li>
          </ul>
          <ul className='lg:flex text-right'>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Views</li>
            <li>Books</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer