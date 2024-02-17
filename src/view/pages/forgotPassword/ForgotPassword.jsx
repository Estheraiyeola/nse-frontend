import React from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex mb-20 mt-10 '>
        <a className=' mt-3 pr-11' href='/login'><FaArrowLeft/></a>
        <h1 className=' text-3xl'>Forgot Password</h1>
      </div>
      <div className='mb-10 flex flex-col gap-5'>
        <h1 className=' text-center'>Enter Email Address</h1>
        <input 
          className=' border border-black rounded-full h-10 w-80 p-4' 
          placeholder='example@email.com'
        />
        <Link to='/login' className='flex items-center justify-center' >
          <button  className=' cursor-pointer'>
            Back to sign in
          </button>
        </Link>
        
      </div>
      
      <button className=' bg-green-900 text-white px-32 py-3 rounded-full mb-10'>
        Send
      </button>
    </div>
  )
}

export default ForgotPassword
