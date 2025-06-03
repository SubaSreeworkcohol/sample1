"use client";

import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import SignInGoogle from "../common/SignInGoogle";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="m-4 flex justify-between items-center text-blue-600">
      <h1>LOGO</h1>
      {user ? (
        <div className="flex items-center gap-2.5 text-orange-600 bg-amber-200">
          <span>Welcome, {user.displayName}</span>
          <button
            onClick={handleLogout}
            className="bg-amber-800 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <SignInGoogle />
      )}
    </div>
  );
};

export default Header;
























// "use client"
// import React,{useState,useEffect} from 'react'
// import Hero from '../Home/Hero'
// import SignInGoogle from './SignInGoogle'
// import { onAuthStateChanged, signOut } from 'firebase/auth'

// const Header = () => {

//   const {user,setUser} = useState(null);
//   useEffect(()=>{
//     const unsubscribe=onAuthStateChanged(auth,(user)=>{
//     setUser(user)})
//     return ()=>unsubscribe();

//   },[])
//   const handleLogout=async()=>{
//     await signOut(auth);
//   }

//   return (
//     <div className='m-4 flex justify-between items-end'>
//         <h1>LOGO</h1>
//         {
//           user ? <div className='flex items-center gap-2.5'>
// <span>
//   Welcome, {user.displayName}
// </span>
// <button onClick={handleLogout} className='bg-amber-800 text-white px-4 py-2 rounded'>
//   Logout
// </button>
//             </div>:<SignInGoogle/>
//            }
      
//     </div>
//   )
// }

// export default Header
