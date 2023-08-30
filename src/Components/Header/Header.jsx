import React from 'react';
import './Header.css';


import HomeSlider from '../HomeSlider/HomeSlider';
import { Navbar } from '../Navbar/Navbar';
import { Topbar } from '../Topbar/Topbar';

const Header = () => {
  return (
    <header className='header-section'>

      <div className='fixed top-0 w-full z-10'>
        <div className='header-bg'>    
          <div className='max-w-screen-xl mx-auto'>
              <Topbar />
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto'>
            <Navbar />
        </div>

      </div>

      <div className='max-w-screen-xl mx-auto'>
        <HomeSlider />
      </div>

    </header>
  )
}


export default Header