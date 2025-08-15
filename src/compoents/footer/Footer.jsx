import React from 'react';
import './footer.css';
import logo from '../../assets/Group6.png';
import footer2 from '../../assets/footer2.png';
import footer3 from '../../assets/footer3.png';
import playStore from '../../assets/playstore.png';
import appStore from '../../assets/appstore.png';

const Footer = () => {
  return (
    <section className='footer'>
    <div className="footer-container">
      <div className='footer-1'>
        <img src={logo} alt="Logo" className='footer-logo' />
        <p className='footer-1-text'>Beauty can cover a range of different topics, including skincare, makeup, fashion, health, and more. You might choose to focus on a particular demographic, like skincare advice for teens or makeup tips for moms in their 40s. </p>
        
      </div>

      
      <div className='footer-1 f-logos'>
        <img src={footer2} alt="Logo" className='footer-logo f-logo' />
        <img src={playStore} alt="Play Store" className='footer-logo f-logo' />
        <img src={appStore} alt="App Store" className='footer-logo f-logo' />

      </div>


      <div className='footer-1 f-logos'>
        <img src={footer3} alt="Logo" className='footer-logo' />
        <input type="email" placeholder='Enter your email' className='footer-email' />

        <button className='footer-button footer-email'>Sign Up for NewsLetter</button>

      </div>
  </div>
  <div className='footer-end'>
    <h1 className='footer-end-text'>@ALL RESERVED RARE BEATY COPYRIGHT POLICY</h1>

  </div>
     
      </section>
  
  )
}

export default Footer
