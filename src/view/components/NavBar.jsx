import React from 'react'
import '../../index.css'
import Logo from '../../assets/new-logo.png'

const NavBar = () => {
  return (
    <div className='flex items-center justify-center gap-[100px] bg-slate-300 p-5 '>
        <div className='w-[300px] '>
            <a href='/home'><img src={Logo} alt='logo'/></a>
        </div>
        <nav className='flex items-start justify-between gap-6'>
            <a href='/home'>Home</a>
            <a href='/about'>About</a>
            <a href='/membership'>Membership</a>
            <a href='/payment'>Make Payments</a>
            <a href='/events'>News/Events</a>
            <a href='/downloads'>Downloads</a>
            <a href='/gallery'>Gallery</a>
            <a href='/contact'>Contact us</a> 
        </nav>
    </div>
  )
}

export default NavBar
