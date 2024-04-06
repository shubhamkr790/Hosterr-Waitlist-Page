import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-lato text-gray-400'>
        <li>
          {/* Note one thing we use link tag in  react instead on anchor */}
          <a href="www.facebook.com"> Facebook</a>
        </li>
        <li>
          <a href="www.instagram.com"> Instagram</a>
        </li>
        <li>
          <a href="www.twitter.com"> Twitter</a>
        </li>
      </ul>
      <div className='flex gap-2'>
        <img src="./src/assets/Help-Avatar.svg" alt="Help" />
        <div>
          <p className='font-playfair font-thin'>Have any questions?</p>
          <a className='font-lato font-medium' href="#">Talk to a specialist?</a>
        </div>
      </div>
    </div>
  )
}

export default Footer