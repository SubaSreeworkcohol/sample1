"use client";
import React from "react";
import { signInGoogle } from "../../firebase";


const SignInGoogle = () => {
  const handleSignIn = async () => {
    try {
      await signInGoogle();
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <button
      onClick={handleSignIn}
      className="bg-amber-950 border-amber-200 border-2 text-white flex px-4 py-2 rounded"
    >
      Sign In with Google
    </button>
  );
};

export default SignInGoogle;
















// import React from 'react'

// const SignInGoogle = () => {
//   return (
//     <button className='border-2 rounded px-4 py-2 bg-amber-600 text-amber-100'>
//         Sign in with Google
//     </button>
//   )
// }

// export default SignInGoogle
