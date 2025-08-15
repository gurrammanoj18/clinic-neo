import React from 'react';
import './gallery.css';
import galleryImage from '../../assets/gallery.png';

const Gallery = () => {
  return (
    <div className='gallery-container'>
        <div className='gallery-title-box'>
            <div className='gallery-title'>
                  <h1 className='gallery-heading'>HAVE QUESTIONS</h1>
                  <p className="gallery-bio">CALL AT +91 123 456 789</p>           
            </div>
            <div className='gallery-title'>
                  <h1 className='gallery-heading'>LOCATED IN</h1>
                  <p className="gallery-bio">HYDERABAD, INDIA</p>           
            </div>
            <div className='gallery-title'>
                  <h1 className='gallery-heading'>BUSINESS HOURS</h1>
                  <p className="gallery-bio">Mon-Sat 9:00 am - 8:00 pm</p>           
            </div>
            
        </div>
        <div className='gallery-images'>
            <img className='gallery-img' src={galleryImage} alt="Gallery" />
        </div>

        <div className='gallery-footer'>
            <ul className='gallery-footer-list'>
                <li className='gallery-footer-item'>Home</li>
                <li className='gallery-footer-item'>About</li>
                <li className='gallery-footer-item'>Services</li>
                <li className='gallery-footer-item'>Gallery</li>
                <li className='gallery-footer-item'>Contact</li>
                <li className='gallery-footer-item'>Book Online</li>

            </ul>

        </div>
      
    </div>
  )
}

export default Gallery
