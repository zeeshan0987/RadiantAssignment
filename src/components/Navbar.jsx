// import React from 'react'
import '../components_css/Navbar.scss'
import SearchImg from '../assets/IMAGE.png'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className='nav'>
        <div>
            <div className='input_box'>
                <img src={SearchImg} alt="" />
                <input type='text'/>
            </div>
            <div className='nav_item'>
                <span>Categories</span>
            </div>
            <div className='nav_item'>
                <span>Website Builders</span>
            </div>
            <div className='nav_item'>
                <span>Today's deals</span>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar
