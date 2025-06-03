"use client";
import React from 'react';
import { useAuthStore } from '../../store/useAuthStore';

const SignInGoogle = () => {
  const login = useAuthStore((state) => state.login);

  return (
    <button onClick={login} className='border-4  flex rounded px-4 py-2  border-amber-500 bg-red-950 text-amber-100'>
      Sign in with Google
    </button>
  );
};

export default SignInGoogle;



















