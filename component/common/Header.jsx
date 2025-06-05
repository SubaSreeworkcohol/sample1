"use client";
import React, { useState, useEffect } from 'react';
import SignInGoogle from '../common/SignInGoogle';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase'; 


const Header = () => {
  const [user, setUser ] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser (user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className='m-4 flex justify-between items-end text-pink-800'>
      <h1>LOGO</h1>
      {
        user ? (
          <div className='flex items-center gap-2.5 text-'>
            <span>
              Welcome, {user.displayName}
            </span>
            <button onClick={handleLogout} className='bg-amber-800 text-white px-4 py-2 rounded'>
              Logout
            </button>
          </div>
        ) : <SignInGoogle />
      }
    </div>
  );
};

export default Header;




















