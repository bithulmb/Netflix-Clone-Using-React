import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import profile_img from '../../assets/profile_img.png'
import bell_icon from '../../assets/bell_icon.svg'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {

    const navRef = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add('nav-dark')
            } else {
                navRef.current.classList.remove('nav-dark')
            }
        })
    })


  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New and Popular</li>
                <li>My List</li>
                <li> Browse by Languages</li>                
            </ul>
        </div>
        <div className="navbar-right">
            <img src={search_icon} alt="" className='icons' />
            <p>Children</p>
            
            <img src={bell_icon} alt="" className='icons' />
            <div className="navbar-profile relative">
                <img src={profile_img} alt="" className='profile' />
                <img src={caret_icon} alt="" className='' />
                <div className="dropdown absolute top-[100%] right-0 w-max bg-#191919 px-[18px] py-[22px] rounded-[2px] underline z-1 hidden ">
                    <p className=' text-13px cursor-pointer ' onClick={() => {logout()}} >Sign Out Of Netflix</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Navbar
