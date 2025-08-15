import React from 'react';
import './explore.css';
import category1 from '../../assets/explore1.png';
import category2 from '../../assets/explore2.png'; 
import category3 from '../../assets/explore3.png';

const Explore = () => {
  return (
    <div className='explore-container'>
        <h1 className='explore-title'>EXPLORE BY CATEGORY</h1>
        <div className='explore-categories'>
            <div className='category-1 category'>
              <p className='c-title'>MAKE UP CARE</p>
            </div>
            <div className='category-2 category'>
              <p className='c-title'>SKIN CARE</p>
            </div>
            <div className='category-3 category'>
              <p className='c-title'>BRIDE CARE</p>
            </div>


        </div>
        <div className='ex-cont'>
          <p className='ex-bio'>EXPLORE MORE</p>
          <p className='ex-bio'>EXPLORE MORE</p>
          <p className='ex-bio'>EXPLORE MORE</p>
        </div>
      
    </div>
  )
}

export default Explore
