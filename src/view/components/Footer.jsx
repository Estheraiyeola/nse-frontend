import React from 'react'
import { FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex  justify-center bg-black gap-[250px] p-5 '>
      <div className='text-white'>
        <h3 className='text-[20px] pb-3 '>Membership Login</h3>
        <form className='bg-white w-64 flex flex-col justify-center p-6 gap-5'>
          <input type='text' placeholder='Username' className='border-2 border-gray-600 rounded-md p-2 text-black'/>
          <input type='password' placeholder='Password' className='border-2 border-gray-600 rounded-md p-2 text-black'/>
          <div className='text-black flex gap-14'>
            <p>Remember me</p>
            <input type='checkbox'/>
          </div>
          <button className='text-black border-2 border-gray-500 rounded-md p-2 bg-zinc-500'>
            Login
          </button>
          <div className='text-black flex justify-center gap-4'>
            <a href='/login' className='hover:text-blue-400'>Login</a>
            <p>|</p>
            <a href='/register' className='hover:text-blue-400'>Register</a>

          </div>
        </form>
      </div>
      <div className='text-white flex flex-col'>
        <h3 className='text-[20px] pb-3 '>Navigation</h3>
        <a href='/home'>Home</a>
        <a href='/about'>About</a>
        <a href='/membership'>Membership</a>
        <a href='/payment'>Make Payments</a>
        <a href='/events'>News/Events</a>
        <a href='/downloads'>Downloads</a>
        <a href='/gallery'>Gallery</a>
        <a href='/contact'>Contact us</a>
      </div>
      <div className='text-white'>
        <h3 className='text-[20px] pb-3 '>Latest News</h3>
      </div>
      <div className='text-white justify-start gap-5'>
        <h3 className='text-[20px] pb-3 '>Subscribe NewsLetter</h3>
        <form className='flex flex-col justify-center text-white gap-5'>
          <input placeholder='Enter Email Address' className='bg-transparent border-2 border-white p-5 rounded-md'/>
          <button className='border-2 border-gray-500 bg-blue-600 text-white w-40 p-2 rounded-md'>
            Subscribe
          </button>
        </form>
        <hr className='mt-5 mb-5'/>
        <p className='mb-4 text-2xl'>Follow us on Social Media</p>
        <div className='flex  gap-5 '>
          <a href='/facebook'><FaFacebook/></a>
          <a href='/youtube'><FaYoutube/></a>
          <a href='/linkedin'><FaLinkedin/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
