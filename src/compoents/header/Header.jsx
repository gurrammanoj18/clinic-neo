import React from 'react';
import './header.css';
import logo from '../../assets/Group6.png';
import offer from '../../assets/Group7.png';


const Header = () => {
  return (
    <div className='header-container'>
        <div className='offer'>
            <img className='offer-img' src={offer} alt="Offer" />
        </div>


        <div className='main-container'>
        <ul className='header-list'>
            <li ><a className='item'>Home</a></li>
            <li ><a className='item'>About</a></li>
            <li ><a className='item'>Services</a></li>
        </ul>
        <div className='logo'>
            <img className='img' src={logo} alt="Clinic Neo Logo" />
        </div>

        <div className='header-list'>
            <li ><a className='item'>Contact</a></li>
            <li ><a className='item'>Gallery</a></li>
            <li ><a className='item'>Book online</a></li>
        </div>
      </div>
    </div>
  )
}

export default Header
