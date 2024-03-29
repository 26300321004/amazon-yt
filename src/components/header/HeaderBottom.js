import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import  AccountCircleIcon  from '@mui/icons-material/AccountCircle'
import {motion} from "framer-motion"
import SideNavContent from './SideNavContent'
import { useSelector } from "react-redux";

const HeaderBottom = () => {
  const userInfo = useSelector((state)=> state.amazon.userInfo)
  const ref=useRef();
  const [sidebar,  setSidebar] =useState(false)
  useEffect(()=>{
    document.body.addEventListener("click", (e)=>{
      if(e.target.contains(ref.current)){
        setSidebar(false)
      }
    })
  },[ref, setSidebar])
  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-white  flex items-center'>
      {/*list items*/}

      <ul className='flex items-center gap-2 text-sm tracking-wide'>
      <li onClick={()=> setSidebar(true)} className='headerHover flex items-center gap-1'> <MenuIcon/>
            All
        </li>  <li className='headerHover hidden md:inline-flex'>
            Today's Deals
        </li>  <li className='headerHover hidden md:inline-flex'>
            Customer Service
        </li>  <li className='headerHover hidden md:inline-flex'>
            Gift Cards
        </li>  <li className='headerHover hidden md:inline-flex'>
            Registey
        </li>  <li className='headerHover hidden md:inline-flex'>
            Sell
        </li>
      </ul>
      {
        sidebar && (
          <div className='w-full h-screen text-black fixed top-0 left-0 z-30 bg-amazon_blue bg-opacity-40'>
            <div className=' w-full h-full  relative '>
              <motion.div ref={ref} initial={{x:-500, opacity:0}} animate={{x:0, opacity:1 } } transition={{duration: 0.5}} className='w-[350px] h-full bg-white border-black'>
                <div  className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>

                  <AccountCircleIcon className='font-titleFont font-bold text-lg tracking-wide'/>
              {
                userInfo ? (
                  <h3>{userInfo.userName}</h3>
                ) : (
                  <h3>Hello, Sign In</h3>
                )
              }

                </div>
                <SideNavContent title="Digital Content & Devices" one="Amazon Music" two="Kindle E-readers & Books" three="Amazon Appstore"/>
                <SideNavContent title="Show By Department" one="Electronics" two="Computers" three="Smart Home"/>
                <SideNavContent title="Programs & Features" one="Gift Cards" two="Amazon live" three="Interbational Shopping"/>

                <span onClick={()=> setSidebar(false)} className='absolute top-0 left-0 left-[310px] w-10 h-10 cursor-pointer text-black flex items-center justify-center border bg-gray-300 hover:bg-rose-600 hover:text-white duration-300'><CloseIcon/></span>
                
              </motion.div>
              

            </div>


          </div>
        )
      }

            
     
    </div>
  )
}

export default HeaderBottom
