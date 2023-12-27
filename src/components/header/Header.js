import React, { useState } from "react";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDown'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from "@mui/icons-material/Search"
import { logo } from "../../assets";
import { allItems } from "../../constants";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import LogoutIcon from "@mui/icons-material/Logout"
import { userSignOut } from "../../redux/amazonSlice";



const Header = () => {
  const auth = getAuth();

const dispatch = useDispatch()

   const [showAll, setShowAll] =useState(false)
    const products = useSelector((state) => state.amazon.products);
    const userInfo = useSelector((state)=> state.amazon.userInfo)
    

    const handleLogout=()=>{
      signOut(auth).then(() => {
        
        dispatch(userSignOut())
      }).catch((error) => {
console.log(error);
      });
    }




  return (
    <div className="w-full sticky top-0 z-50  bg-amazon_blue  " >
      {/*Logo*/}
    <div className="w-full py-3 bg-amazon_blue  text-white px-4   flex items-center gap-4">
             <Link to="/">
             
             <div className="headerHover">
        <img src={logo} alt="logo" className="w-24 mt-2" />
      </div>
             
             </Link>
      <div className="headerHover hidden mdl:inline-flex">
      <AddLocationIcon />
    <p className="text-sm text-zinc-400 flex flex-col  ">Deliver to <span className="text-sm font-semibold -mt-1 text-whiteText">Kolkata</span></p>
      </div>


      {/*searchbar*/}


      <div className="h-10 rounded-md flex flex-grow relative hidden mdl:flex">
        <span onClick={()=>setShowAll(!showAll)} className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-serif flex items-center justify-center rounded-tl-md rounded-bl-md">All <span><ArrowDropDownOutlinedIcon/></span></span>
        {
          showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-green-200 border-[1px] rounded-md border-rose-400 text-rose-400 p-2 flex flex-col gap-1 z-50">
                {
                  allItems.map((item)=>(
                    <li className="text-sm tracking-wide border-b-[2px] border-b-transparent hover:border-red-400 cursor-pointer duration-200" key={item._id}>{item.title}</li>
                  ))
                }
                
              </ul>






            </div>
          )
        }
        <input   className="h-full text-base text-amazon_blue flex flex-grow outline-none border-none px-2" type="text"/>
        <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md"><SearchIcon/></span>
      </div>

      {/*signin option*/}
<Link to="/signin">


<div className="flex flex-col items-start justify-center headerHover">
       {
        userInfo ? (
          <p>{userInfo.userName}</p>
        ) : (
          <p  className="text-lightText font-light ">Heloo, signin </p>
        )
       }
        <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex" >Accounts & Lists <span><ArrowDropDownOutlinedIcon/></span></p>
      </div>
</Link>
      {/*order list*/}
       <div className="flex flex-col items-start justify-center headerHover hidden mdl:flex">
        <p className="text-lightText font-light">Returns</p>
        <p className="text-sm font-semibold -mt-1 text-whiteText">& order</p>
       </div>

      {/*cart start*/}

     <Link to="/cart">
     
     <div className="flex items-start justify-center headerHover relative" >
               <ShoppingCartIcon className="text-rose-400 "/>
                <p className="text-xs font-semibold mt-3 text-whiteText">Cart <span className="absolute text-xs top-0 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-rose-600 flex items-center justify-center rounded-full">
                  
             {products.length > 0 ?products.length:0}
                  
                  </span></p>
      </div>
     
     </Link>
     {
      userInfo && (
        <div onClick={handleLogout} className="flex flex-col justify-center items-center headerHover relative">
          <LogoutIcon/>
          <p className="hidden mdl:inline-flex text-xs font-serif text-white">Log out</p>
        </div>
      )
     }






    </div>
    <HeaderBottom/>
   
    </div>
  );
};

export default Header;
