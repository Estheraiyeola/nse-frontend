import React from 'react'
import {FaArrowLeft} from 'react-icons/fa'


const Verification = () => {
  return (
    <div className=' flex flex-col items-center justify-center'>
      <div className='flex mb-20 mt-10'>
        <a className=' mt-3 pr-11' href='/login'><FaArrowLeft/></a>
        <h1 className=' text-3xl'>Verification</h1>
      </div>
      <form className=' flex gap-10 mb-10'>
        <input
            type='text'
            maxLength='1'
            placeholder='1' 
            className=' border border-black border-solid rounded-full w-16 h-16 pl-4 text-5xl '
            onInput={(e) => {
                const { value } = e.target;
                if (value.length === 1) {
                    e.target.nextElementSibling?.focus(); // Move focus to the next input field
                }
            }}
        />
        <input
            type='text' 
            maxLength='1'
            placeholder='1' 
            className=' border border-black border-solid rounded-full w-16 h-16 pl-4 text-5xl '
            onInput={(e) => {
                const { value } = e.target;
                if (value.length === 1) {
                    e.target.nextElementSibling?.focus(); // Move focus to the next input field
                }
            }}
        />
        <input
            type='text' 
            maxLength='1'
            placeholder='1' 
            className=' border border-black border-solid rounded-full w-16 h-16 pl-4 text-5xl '
            onInput={(e) => {
                const { value } = e.target;
                if (value.length === 1) {
                    e.target.nextElementSibling?.focus(); // Move focus to the next input field
                }
            }}
        />
        <input
            type='text' 
            maxLength='1'
            placeholder='1' 
            className=' border border-black border-solid rounded-full w-16 h-16 pl-4 text-5xl '
            onInput={(e) => {
                const { value } = e.target;
                if (value.length === 1) {
                    e.target.nextElementSibling?.focus(); // Move focus to the next input field
                }
            }}
        />
      </form>
      <div className='flex gap-1 mb-10'>
        <p>If you didn't receive a code, </p>
        <button className=' cursor-pointer text-green-700'> 
          <p className=' cursor-pointer'>Resend</p>  
        </button>
      </div>
      <button className=' bg-green-900 text-white px-32 py-3 rounded-full mb-10'>
        Send
      </button>
    </div>
  )
}

export default Verification
