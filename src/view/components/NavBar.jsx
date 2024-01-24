import React from 'react'
import '../../index.css'
import Logo from '../../assets/Nigerian-Society-of-Engineers-NSE-logo-e1701513119769.webp'

const NavBar = () => {
  return (
    <div className='flex items-center justify-center gap-[100px] '>
        <div className='w-[350px] '>
            <img src={Logo} alt='logo'/>
        </div>
        <nav className='flex items-start justify-between gap-6 mt-10'>
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
