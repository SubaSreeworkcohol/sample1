"use client";

import React, { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/login");
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null; 
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;


















// import { useAuthStore } from '../store/useAuthStore';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// const withAuth = (WrappedComponent) => {
//   return (props) => {
//     const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
//     const router = useRouter();

//     useEffect(() => {
//       if (!isAuthenticated) {
//         router.push('/login'); // Redirect to login page if not authenticated
//       }
//     }, [isAuthenticated, router]);

//     if (!isAuthenticated) {
//       return null; // Render nothing while redirecting
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;

