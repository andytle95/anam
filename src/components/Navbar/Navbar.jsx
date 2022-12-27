import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

// import images from '../../img'
import './Navbar.css';

const Navbar = () => (
    <nav className="app__navbar">
        <div classname="app__navbar-logo">
            {/* <img src={images.anam} alt="app logo" /> */}
        </div>
        <ul className='app__navbar-links'>
            <li className='p__opensans'><a href="#home">Home</a></li>
            <li className='p__opensans'><a href="#about">About</a></li>
            <li className='p__opensans'><a href="#menu">Menu</a></li>
            <li className='p__opensans'><a href="#awards">Awards</a></li>
            <li className='p__opensans'><a href="#contact">Contact Us</a></li>
        </ul>
    </nav>
)

export default Navbar
