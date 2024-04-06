import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex '>
       {/* will make 2 div one for text another for image (flex-row-reverse gap-20) */}
       {/* will use LATO GOOGLE font && PLAYFAIR DISPLAY FONT for text */}
       <div className='flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end'>
        <img src="./src/assets/Blue-Shape.svg" alt="1st" className='-rotate-[45deg] h-64 md:h-72 lg:h-[400px]'/>
        <img src="./src/assets/Pink-Shape.svg" alt="2nd" className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]'/>
        <img src="./src/assets/Purple-Shape.svg" alt="3rd" className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]' />
        <img src="./src/assets/Hero-Image-(Model).png" alt="last" className='absolute h-64 md:h-72 lg:h-[400px]' />

       </div>
       <div className='lg:flex-1 lg:order-1'>
        <h1 className='text-5xl font-bold font-playfair leading-tight'>Host your website in less than 5 minutes.</h1>
        <p className='font-lato text-gray-400'>With Hosterr, get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.</p>
        <form action="" className='flex flex-col gap-4 md:flex-row '>
          <input className='rounder-md px-4 py-3 placeholder:text-gray-400' type="email" placeholder='Enter e-mail address' />
          <button className='bg-blue-400	rounded-md text-white px-4 py-3 hover:bg-blue-600 '>Join Waitlist</button>
        </form>
        {/* this div is for icon and text below waitlist button */}
        <div className='flex gap-2 space-y-1.5 items-center justify-center md:justify-start'>
          <img src="./src/assets/Checkmark.svg" alt="tick" />
          <p className=' font-lato text-gray-400'>No spam, ever.Unsubscribe anytime.</p>
        </div>
       </div>
    </div>
  )
}

export default Body