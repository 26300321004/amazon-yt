import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from "../redux/amazonSlice";
import {emptyCart} from "../assets/index"

import { Link } from "react-router-dom";


const Cart = () => {
  const dispatch= useDispatch()
  const products = useSelector((state) => state.amazon.products);
  const [totalPrice,  setTotalPrice] =useState("")
useEffect(()=>{
  let Total = 0;

  products.map((item)=>{
    Total += item.price * item.quantity
    return setTotalPrice(Total.toFixed(2))
  })
},[products])
  return (
    <div className="w-full  bg-gray-100 p-4">
    {
      products.length > 0 ? (
        <div className="container   mx-auto grid sml:grid-cols-1 mdl:grid-cols-5 gap-5">
        <div className="w-full bg-white px-4 sml:col-span-1 mdl:col-span-4">
          <div className="font-medium flex items-center justify-between border-b-[1.5px] border-b-rose-200 py-3">
            <h2 className="text-[22px]  font-serif">Shopping Cart</h2>
            <h4 className="text-[17px] font-serif">Subtitle</h4>
          </div>
          {/*products*/}
          <div>
            {products.map((item) => (
              <div
                key={item.id}
                className="w-full border-b-[1px] border-b-gray-300 p-4 flex item-center gap-6"
              >
                <div className="w-2/5  ">
                  <img
                    className="mdl:w-full   h-44 object-contain "
                    src={item.image}
                    alt="productImage"
                  />
                </div>
                <div className="sml:mr-20">
                  <h2 className="font-semibold mdl:text-lg sml:text-sm">{item.title}</h2>
                  <p className="mdl:pr-10 sml:pr-20 text-sm ">{item.description.substring(0, 100)}..</p>

                  <p className="text-base">
                    Unit Price{" "}
                    <span className="text-semibold">${item.price}</span>
                  </p>
                  <div className="bg-[#F0F2F2] flex justify-center  items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md">
                    <p className="px-1 cursor-pointer bg-gray-200 rounded-md hover:bg-gray-400 duration-300">
                      Qty:
                    </p>
                    <p onClick={()=>dispatch(  decrementQuantity(item.id))} className="px-1 cursor-pointer bg-gray-200 rounded-md hover:bg-gray-400 duration-300">
                      -
                    </p>
                    <p>{item.quantity}</p>
                    <p onClick={()=>dispatch(incrementQuantity(item.id))} className="px-1 cursor-pointer bg-gray-200 rounded-md hover:bg-gray-400 duration-300">
                      +
                    </p>
                  </div>
                  <button onClick={()=>dispatch(deleteItem(item.id))} className="bg-rose-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-500 active:bg-red-800 duration-300">
                    Delete Item
                  </button>
                </div>
                <div>
                  <p className="tex-lg  font-semibold">
                    {item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div onClick={()=>dispatch(resetCart())}><button  className="bg-red-600 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-800 duration-300">Clear Cart</button></div>
        </div>
    
        <div className="w-full bg-white h-auto gap-3 col-span-1 flex flex-col items-center p-4">
          <div>
            <p className="flex gap-2 items-start text-sm">
              <span className="bg-white text-yellow-400 rounded-full">
                <CheckCircleIcon />
              </span>
              Your order qulifies for Free Shopping this option at
              cheackout.see deatiles..
            </p>
          </div>
         
<div>
<p className="font-semibold px-1 py-1  flex item-center justify-between">Total:<span className="text-lg font-bold">${totalPrice}</span></p>
</div>
<button className='w-full bg-yellow-400 rounded-md py-2 font-medium cursor-pointer hover:border-green-400 duration-300 hover:bg-yellow-500 active:bg-yellow-700 flex items-center justify-center'>Proceed to pay</button>
        </div>
   
      </div>
      ) : <div  className="flex justify-center items-center gap-6  py-4">
      <div className="w-80 rounded-lg ">
         <img src={emptyCart} alt="emptyCart" />
        </div>
        <div className="w-96 p-4 flex flex-col mb-4 items-center rounded-md shadow-lg">
        <h1 className="font-sans text-center">Your Cart Feels lonely.</h1>
         <p className="text-sm text-center ">Your shopping cart lives to serve. Give it purpose - fill  it with books, electronics, video etc. and make it happy</p>
      <Link to="/">
      
      <button  className='w-full bg-yellow-400 rounded-md py-2 mt-10 px-1 font-medium cursor-pointer hover:border-green-400 duration-300 hover:bg-yellow-500 active:bg-yellow-700 flex items-center justify-center'>Continue Shopping</button>
      </Link>
        </div>
      </div>
    }
    </div>
  );
};

export default Cart;
