import React from 'react';
import './banner.css';
import bannerImage from '../../assets/banner.png'; 
const Banner = () => {
  return (
    <div className='banner-container'>
        <div className='banner-details'>
            <h1 className='banner-bio'>BEAUTY, MAKEUP & SKINCARE</h1>
            <input className='banner-input' type='text' placeholder='Search' />

        </div>


      
    </div>
  )
}

export default Banner
