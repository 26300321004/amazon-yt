import React, { useState } from "react";
import { darkLogo } from "../assets/index";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {RotatingLines} from "react-loader-spinner"
import {motion} from "framer-motion"

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from "react-router-dom";
const Registration = () => {

  const navigate=useNavigate()
  
const auth = getAuth();

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  const [firebaseErr, setFirebaseErr]=useState("");

  const [loading, setLoading]=useState(false);
  const [successMsg, setSuccessMsg]=useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  //handlefunction
  const handleEmail=(e)=>{
    setEmail(e.target.value);
    setErrEmail("")
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);
    setErrPassword("")
  }
  const handleCPassword=(e)=>{
    setCPassword(e.target.value);
    setErrCPassword("")
  }
  //email validation
  const emailValidation=(email)=>{
    return String(email).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

  }

  const handleRegistration = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your name");
    }
    if(!email){
        setErrEmail("Enter your email");
        setFirebaseErr("")

    }else{
        if(!emailValidation(email)){
            setErrEmail("Enter a Valid email")
        }
    }
    if(!password){
        setErrPassword("Enter your password");
        
    }  else{
        if(password.length < 6){
            setErrPassword("Password must be at least 6 characters")
        }
    }
    if(!cPassword){
        setErrCPassword("Confirm your password")
    }else{
        if(cPassword !== password){
            setErrCPassword("password not match")
        }
    }
    if(clientName && emailValidation (email) && password && password.length >=6 && cPassword &&cPassword === password ){
      setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    updateProfile(auth.currentUser,{
      displayName:clientName,
      photoURL:"https://media.istockphoto.com/id/1205742669/photo/young-indian-man-wearing-denim-shirt-standing-over-isolated-yellow-background-cheerful-with-a.jpg?s=612x612&w=0&k=20&c=OnnM5rjkR_xl7ohnUx2ZlJXfVl9-8hcOdSimZQW5DBM="
    })
    // Signed up 
    const user = userCredential.user;
   
    setLoading(false)
    setSuccessMsg("Account Created Succesfully!");
    setTimeout(()=>{
      navigate("/signin")
    },3000)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;

  if(errorCode.includes("auth/email-already-in-use")){
    setFirebaseErr("Email Already in use, Try another one")
  }
    // ..
  });




        setClientName("")
        setEmail("")
        setPassword("")
        setCPassword("")
        setErrCPassword("")
        setFirebaseErr("")
    }
  };
  return (
    <div className="w-full ">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[370px] flex flex-col items-center mx-auto">
          <img className="w-32" src={darkLogo} alt="darkLogo" />
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-sans text-2xl font-medium mb-4">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-light">Your Name</p>
                <input
                  onChange={handleName}
                  value={clientName}
                  className="w-full   py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-rose-600 focus-within:shadow-amazonInput"
                  type="text"
                />
                {errClientName && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="text-base font-sans italic">!</span>
                    {errClientName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-light">Email or phone number</p>
                <input
                  onChange={handleEmail}
               value={email}
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-rose-600 focus-within:shadow-amazonInput"
                  type="email"
                />
                {errEmail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="text-base font-sans italic">!</span>
                    {errEmail}
                  </p>
                )}
                  {firebaseErr && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="text-base font-sans italic">!</span>
                    {firebaseErr}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-light">password</p>
                <input
                onChange={handlePassword}
                value={password}
                  className="w-full   py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-rose-600 focus-within:shadow-amazonInput"
                  type="password"
                />
                {errPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="text-base font-sans italic">!</span>
                    {errPassword}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-light">Re-enter Password</p>
                <input
             onChange={handleCPassword}
             value={cPassword}
                  className="w-full   py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-rose-600 focus-within:shadow-amazonInput"
                  type="password"
                />
                {errCPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="text-base font-sans italic">!</span>
                    {errCPassword}
                  </p>
                )}
                <p className="text-xs text-gray-600">
                  Password must be at least 6 characters
                </p>
              </div>
              <button
                onClick={handleRegistration}
                className="w-full bg-yellow-500 rounded-md py-2  px-1 font-medium cursor-pointer hover:border-green-400 duration-300 hover:bg-yellow-500 active:bg-yellow-700 flex items-center justify-center  focus-within:border-rose-600 focus-within:shadow-amazonInput"
              >
                Contine
              </button>
              {
                loading && (
                  <div className="flex justify-center items-center">
                    <RotatingLines
  visible={true}
  height="50"
  width="50"
  color="red"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
                  </div>
                )
              }
              {
                successMsg && (
                  <div>
                    <motion.p initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5}} className="text-base font-serif font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center">{successMsg}</motion.p>
                  </div>
                )
              }
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              ByCreating an account, you agree to amazon's{" "}
              <span className="text-blue-600">Condition of use </span>
              <span>and </span>
              <span className="text-blue-600">Privace Notice.</span>
            </p>
            <div>
              <p className="text-xs text-black ">
                Aleardy have an account?
                <Link to="/signin">
                  <span className="text-blue-600 text-[15px] hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                    Sign in
                  </span>
                </Link>
                <span>
                  <ArrowRightIcon />
                </span>
              </p>
              <p className="text-xs text-black -mt-2">
                Buying for work?{" "}
                <span className="text-xs text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer duration-100">
                  Create a free business account
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full bg-gradient-to-t from-white py-2 via-white flex-col flex gap-4 justify-center to-zinc-200 ">
        <div className="flex item-center gap-6 justify-center ">
          <p className="text-blue-600 text-xs hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Condition of Use
          </p>
          <p className="text-blue-600 text-xs hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>{" "}
          <p className="text-blue-600 text-xs hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
        </div>
        <p className="text-xs text-gray-600 items-center justify-center flex">
          @ 1996-2023 ReactBd.com Inc or its affiates
        </p>
      </div>
    </div>
  );
};

export default Registration;
