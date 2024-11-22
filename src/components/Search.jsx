import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly '>
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex, natus dolores qui, mollitia nostrum delectus neque nam doloremque, animi tenetur quidem reiciendis dolor. Cum, officia nihil, itaque dolores inventore atque nisi nobis magnam ducimus totam hic nostrum maiores quisquam omnis quo beatae expedita harum facere ex. Architecto quae quasi esse. Voluptas natus ullam doloribus magni voluptate molestiae eum officia accusamus impedit dolore sit omnis rem ea, facere deleniti! Natus repudiandae, nisi optio dolorem at temporibus perspiciatis similique nesciunt pariatur numquam! Soluta id corporis quae tempora, natus ea praesentium, aperiam reprehenderit quo ad ab magni doloremque alias facilis recusandae. Neque?</p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50}/>
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50}/>
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>      
      </div>
      <div>
        <div className='border text-center'>
          <p className='py-2'>GET AN ADDITIONAL 10% OFF</p>
          <p className='py-4'>12 GOURS LEFT</p>
          <p className='py-2 bg-gray-800 text-gray-200'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
          <div className='flex flex-col my-2'>
            <label>Destination</label>
            <select className='border rounded-md p-2'>
              <option>Kontegor</option>
              <option>Albania</option>
              <option>Bareningo</option>
              <option>Rosario</option>
            </select>
          </div>
          <div  className='flex flex-col my-2'>
            <label>Check-In</label>
            <input className='border rounded-md p-2' type="date" />
          </div>
          <div  className='flex flex-col my-2'>
            <label>Check-Out</label>
            <input className='border rounded-md p-2' type="date" />
          </div>
          <button className='w-full my-4'>Rates & Availability</button>
        </form>
      </div>
    </div>
  )
}

export default Search