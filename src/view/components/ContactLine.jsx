import React from 'react'
import { FaPhone, FaMailBulk } from 'react-icons/fa'
import { Link } from "react-router-dom";

const ContactLine = () => {
  return (
    <div className='flex items-center justify-center gap-[300px] p-7 '>
      <div className='flex gap-7 '>
        <div className='flex gap-3 '>
          <FaPhone/>
          <p>0123456789, </p>
          <p>0123456789</p>
        </div>
        <div className='flex gap-3 '>
          <FaMailBulk/>
          <p>name@email.com</p>
        </div>
      </div>
      <div className='flex gap-4 ' >
        <a href='/registration' className='hover:text-blue-400 '>Membership Registration</a>
        <p>|</p>
        <Link to="/login">
        <a href='/login' className='hover:text-blue-400 '>Login</a>
        </Link>
        <p>|</p>
        <a href='/forgot-password' className='hover:text-blue-400 '>Forgot Password</a>

      </div>
    </div>
  )
}

export default ContactLine
