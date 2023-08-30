import React from 'react';
import logo from '../../assets/images/logo.png';

export const Topbar = () => {
  return (
    <>
        <div className='topbar flex justify-end gap-8 py-2'>
        <div className='flex items-center gap-2'>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.54322 19.608C3.69418 13.0155 3.15715 8.6408 8.69054 1.47893C8.83592 1.29076 9.09741 1.23021 9.30968 1.33738L12.4366 2.91605C12.6625 3.0301 12.7675 3.29495 12.6813 3.53284L11.4851 6.83162C11.4163 7.02138 11.2401 7.15115 11.0385 7.16062L9.04449 7.25423C8.85589 7.26309 8.68748 7.37779 8.61341 7.55146C7.62966 9.858 7.67133 11.1968 8.89945 13.3048C8.98058 13.4441 9.12599 13.533 9.28667 13.5455L11.3914 13.7088C11.5703 13.7227 11.728 13.8313 11.8047 13.9936L13.3232 17.2048C13.4313 17.4335 13.3515 17.7071 13.1373 17.8418L10.1818 19.7004C9.97619 19.8297 9.70443 19.7897 9.54322 19.608Z" stroke="#FFFBEC" stroke-width="1.4" stroke-linecap="round"/>
                <path d="M15.4463 7.98877C16.5951 9.56055 16.4733 10.6214 15.4463 11.9888" stroke="#FFFBEC" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M16.9463 5.98877C18.9463 8.48877 19.1302 10.918 17.4463 13.9888" stroke="#FFFBEC" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span className='text-base font-normal text-[#FFFBEC] leading-[130%]'> 01724121499 </span>
        </div>
        <div className='flex items-center gap-2'>
            <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.91748 2L9.07936 8.57424C9.2706 8.74978 9.56436 8.74978 9.7556 8.57424L16.9175 2M3.41748 13.5H15.4175C16.522 13.5 17.4175 12.6046 17.4175 11.5V3.5C17.4175 2.39543 16.522 1.5 15.4175 1.5H3.41748C2.31291 1.5 1.41748 2.39543 1.41748 3.5V11.5C1.41748 12.6046 2.31291 13.5 3.41748 13.5Z" stroke="#FFFBEC" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
            <span className='text-base font-normal text-[#FFFBEC] leading-[130%]'>  info@gmail.com </span>
        </div>
        </div>

        <div className='logo-area flex items-center gap-6 pb-5'>
        <img src={logo} alt='logo'/>
        <div>
            <h1 className='text-white lg:text-4xl text-2xl font-semibold leading-7'> Test High School </h1>
            <h3 className='text-white text-base font-medium leading-7'> Established on 1987 </h3>
        </div>
        </div>

        <div className='notice-bg py-2'>
        <ul className='flex items-center gap-10'>
            <li className='text-[#FFFBEC] text-base font-bold leading-7'> গণপ্রজাতন্ত্রী বাংলাদেশ সরকার </li>
            <li className='text-[#FFFBEC] text-base font-bold leading-7'> গণপ্রজাতন্ত্রী বাংলাদেশ সরকার </li>
            <li className='text-[#FFFBEC] text-base font-bold leading-7'> গণপ্রজাতন্ত্রী বাংলা </li>
        </ul>
        </div>   
    </>
  )
}
