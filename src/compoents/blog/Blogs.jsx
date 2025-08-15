import React from 'react';
import './blogs.css';
import blogImage from '../../assets/blog1.png'; 
import footerLog1 from '../../assets/ellipse.png';
import footerLog2 from '../../assets/rectangle.png';

const Blogs = () => {
  return (
    <div className='blog-div container'>
    <div className='blogs-container'>
        <h1 className='blogs-title'>THE RARE BEATY BLOG</h1>
        <p className='blogs-description'>Beauty blogs can cover a range of different topics, including skincare, makeup, fashion, health, and more. You might choose to focus on a particular demographic, like skincare advice for teens or makeup tips for moms in their 40s. Or there might be a particular aesthetic that you want to base your blog around.</p>
    </div>
      <div className='blog-box'>
        <div className='blog-image'>
            <img className='blog-img' src={blogImage} alt="Blog" />
        </div>
        <div className='blog-content'>
            <p className='blog-title'>CATEGORY NAME</p>
            <h1 className='blog-description'>YOU MOST RECENT BLOG POST TITLE CAN GO RIGHT HERE</h1>
            <button className='blog-button'>READ THE POST</button>
        </div>
      </div>
      <div className='blog-footer'>
        <h1 className='foot'>NEWER POST</h1>
             <div className='foot-logos'>
                 <img className='footer-logo1' src={footerLog1} alt="Footer Logo 1" />
                 <img className='footer-logo2' src={footerLog2} alt="Footer Logo 2" />
             </div>
        

        <h1 className='foot'>OLDER POST</h1>
      </div>

    </div>
  )
}

export default Blogs
