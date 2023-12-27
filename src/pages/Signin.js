import React, { useState } from "react";
import { darkLogo } from "../assets/index";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {RotatingLines} from "react-loader-spinner"
import {useDispatch} from "react-redux"

import { Link, useNavigate } from "react-router-dom";
import { setUserInfo } from "../redux/amazonSlice";

const Signin = () => {
  const dispatch= useDispatch()
  const auth = getAuth();
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [loading, setLoading]=useState(false);
  const [successMsg, setSuccessMsg]=useState("");
  const [userEmailErr, setUserEmailErr]=useState("")
  const [userPassErr, setUserPassErr]=useState("")

  const handleEmail = (e) => {
 setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Enter your email");
    }
    if (!password) {
      setErrPassword("Enter your password");
    }
    if(email && password){
      setLoading(true)
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch(setUserInfo({
      _id:user.uid,
      userName:user.displayName,
      email:user.email,
      Image:user.photoURL
    }))
    console.log(user)
    setLoading(false)
    setSuccessMsg("Logged in Succesfull Welcome you back!");
    setTimeout(()=>{
   navigate("/")
    },2000)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
 if(errorCode.includes("auth/invalid-email")){
  setUserEmailErr("Invalid Email");
 }
 if(errorCode.includes("auth/worng-password")){
  setErrPassword("Worng password! try again");
 }
    console.log("Something is up, Try with correct Creadtial!");
  });
      
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="w-full pb-4   ">
      <div className=" w-full bg-gray-200 pb-16">
      {
        successMsg ? (
          <div className="w-full flex justify-center items-center py-32">
            <p className="border-[1px] border-green-600 text-green-500 font-mono text-lg font-semibold px-2 py-2">{successMsg}</p>
          </div>


        ):(
          <form className="w-[320px] flex flex-col items-center mx-auto ">
          <img className="w-32  pb-4" src={darkLogo} alt="darklogo" />
          <div className="w-full border border-zinc-300 p-6">
            <h2 className="font-sans  text-2xl font-medium mb-4">Sigin</h2>
            <div className="flex flex-col gap-3">
              <div className="flex- flex-col gap-4">
                <p className="text-sm font-medium">Email or phone number</p>
                <input
                  onChange={handleEmail}
                  value={email}
                  className="w-full  lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-rose-600 focus-within:shadow-amazonInput"
                  type="email"
                />
                    {errEmail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="text-base font-sans italic">!</span>
                    {errEmail}
                  </p>
                )}
                   {userEmailErr && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="text-base font-sans italic">!</span>
                    {userEmailErr}
                  </p>
                )}
              </div>
              <div className="flex- flex-col gap-2">
                <p className="text-sm font-medium">Passowrd</p>
                <input
                  onChange={handlePassword}
                  value={password}
                  className="w-full  lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-rose-600 focus-within:shadow-amazonInput"
                  type="password"
                />
                  {errPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="text-base font-sans italic">!</span>
                    {errPassword}
                  </p>
                )}
                 {userPassErr && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="text-base font-sans italic">!</span>
                    {userPassErr}
                  </p>
                )}
              </div>
              <button
               onClick={handleLogin}
                className="w-full bg-yellow-400 rounded-md py-2  px-1 font-medium cursor-pointer hover:border-green-400 duration-300 hover:bg-yellow-500 active:bg-yellow-700 flex items-center justify-center  focus-within:border-rose-600 focus-within:shadow-amazonInput"
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
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By Contining, you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of Use </span>{" "}
              <span>and{"  "}</span>
              <span className="text-blue-600">Privace Notice.</span>
            </p>
            <p className="text-xs text-gray-700 mt-4 cursor-pointer group">
              <ArrowRightIcon />
              <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                Need help?
              </span>
            </p>
          </div>
          <p className="w-full text-xs text-gray-600 flex- items-center ">
            <span className="w-1/3 h-[1px] inline-flex bg-zinc-400"></span>
            <span className="w-1/3 text-center">New to Amazon?</span>
            <span className="w-1/3 h-[1px] inline-flex bg-zinc-400"></span>
          </p>
          <Link to="/registration">
            <button className="w-full mt-4 text-sm bg-gray-300 rounded-md py-2  px-1 font-medium cursor-pointer text-black  text-normal  flex items-center justify-center  focus-within:border-rose-600 focus-within:shadow-amazonInput">
              Create your Amazon account
            </button>
          </Link>
        </form>
        )
        
      }
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

export default Signin;
