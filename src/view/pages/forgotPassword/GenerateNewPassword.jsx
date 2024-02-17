import React from 'react'

const GenerateNewPassword = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className=' mb-20 mt-10 '>
        <h1 className=' text-3xl'>New Password</h1>
      </div>
      <form className='flex flex-col  text-left gap-4'>
        <label><b>Enter New Password</b></label>
        <input className='border border-black rounded-full h-10 w-80 p-4 mb-10' type='password' placeholder='At least 8 digits'/>
        <label><b>Confirm Password</b></label>
        <input className='border border-black rounded-full h-10 w-80 p-4 mb-10'type='password' placeholder='........'/>
      </form>
      <button className=' bg-green-900 text-white px-32 py-3 rounded-full mb-10'>
        Send
      </button>
    </div>
  )
}

export default GenerateNewPassword
