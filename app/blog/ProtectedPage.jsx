// "use client";
// import React from 'react';
// import { useEffect } from 'react';
// import withAuth from '@/hoc/withAuth'; 
// import { useAuthStore } from '@/store/useAuthStore'; 

// function ProtectedPage() {
//   const user = useAuthStore((state) => state.user);
//   const logout = useAuthStore((state) => state.logout);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Protected Page</h1>
//       <p>Welcome, {user?.name}!</p>
//       <button
//         className="bg-red-500 text-white px-4 py-2 rounded mt-4"
//         onClick={logout}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// export default withAuth(ProtectedPage);
