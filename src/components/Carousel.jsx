import React, {useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

const sliderData = [
  {
    url: 'https://images.unsplash.com/photo-1541417904950-b855846fe074?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    url: 'https://images.unsplash.com/photo-1516370873344-fb7c61054fa9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    url: 'https://images.unsplash.com/photo-1586902197503-e71026292412?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D'
  }
]

const Carousel = () => {

  const [slide, setSlide] = useState(0)
  const lenght = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === lenght - 1 ? 0 : slide + 1);
  }
  const nextSlide = () => {
    setSlide(slide === 0 ? lenght - 1 : slide - 1);
  }

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8' />
      <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8' />
      {sliderData.map((item, index) => (
        <div className={index === slide ? 'opacity-100 w-full' : 'opacity-0'}>
          {index === slide && (
            <img className='w-full rounded-md' src={item.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  )
}

export default Carousel