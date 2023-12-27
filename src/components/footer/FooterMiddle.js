import React from 'react'
import { logo, flag } from "../../assets";

const FooterMiddle = () => {
  return (
    <div className='w-full bg-amazon_blue text-white '>
      {/*footertop*/}
      <div className='w-full border-b-[1px] border-gray-500 p-10'>
        <div className='max-w-5xl mx-auto text-gray-300'>
         <div className='w-full grid xl:grid-cols-4 md:place-items-center items-start grid-cols-1 md:grid-cols-2 gap-6'>
         <div>
            <h3 className='text-black font-extralight'>Get To Know Us</h3>
            <ul>
              <li className='footerLink'>Careers</li>
              <li className='footerLink'>Blog</li>
              <li className='footerLink'>About</li>
              <li className='footerLink'>Invesitor</li>
              <li className='footerLink'>Amazon Devices</li>
              <li className='footerLink'>Amazon Service</li>
              
            </ul>
          </div>
          <div>
            <h3 className='text-black font-extralight'>Make Money with Us</h3>
            <ul>
              <li className='footerLink'>Sell Products on Amazon</li>
              <li className='footerLink'>Sell on Amazon Business</li>
              <li className='footerLink'>Sell apps on Amazon</li>
              <li className='footerLink'>Become an Amazon</li>
              <li className='footerLink'>Become an Affiliate</li>
              <li className='footerLink'>Advertise Your Products</li>
              <li className='footerLink'>Sell Product with Us</li>
              <li className='footerLink'>Host an Amazon Hub</li>
              <li className='footerLink'>See More Make Money with Us</li>
              
            </ul>
          </div>
          <div>
            <h3 className='text-black font-extralight'>Amazon Payment Products</h3>
            <ul>
              <li className='footerLink'>Amazon Business Card</li>
              <li className='footerLink'>Shop with points</li>
              <li className='footerLink'>Reload Your Balance</li>
              <li className='footerLink'>Amazon Currency Converter</li>
        
              
            </ul>
          </div>
          <div>
            <h3 className='text-black font-extralight'>Let Us Help you</h3>
            <ul>
              <li className='footerLink'>Amazon and COVID-19</li>
              <li className='footerLink'>Your Account</li>
              <li className='footerLink'>Your Order</li>
              <li className='footerLink'>Shipping Rates & Polices</li>
              <li className='footerLink'>Returns & Replacments</li>
              <li className='footerLink'>Mange Your Content and Devices</li>
              <li className='footerLink'>Amazon Assient</li>
              <li className='footerLink'>FAQ & Help</li>
              
            </ul>
          </div>
         </div>

        </div>

      </div>
      {/*footerbottom-bottom*/}
      <div className='w-full flex gap-6 items-center justify-center py-6'>
        <div className=''>
          <img className='w-20 pt-3' src={logo} alt="logo" />

        </div>
        <div className='flex gap-2'>
         <p className='flex gap-1 items-center justify-center text-red-500 border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'> English</p>
        </div>
        <div className='flex gap-1 items-center justify-center border border-gray-500 hover:border-x-amazon_yellow cursor-pointer duration-200 px-2 py-1'>
        <img className='w-8 h-6' src={flag} alt="flag" />
          <p>India</p>
        </div>
      </div>

      
    </div>
  )
}

export default FooterMiddle
