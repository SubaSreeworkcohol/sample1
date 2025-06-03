"use client"
import React from 'react'
import Header from '../common/Header'

const Hero = () => {
  return (
    <div>
      <h1>About us</h1>
      <Header/>
    </div>
  )
}

export default Hero














// "use client";
// import React, { useEffect, useState } from 'react';

// const Hero = () => {
//     const [characters, setCharacters] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const resp = await fetch("https://api.artic.edu/api/v1/artworks");
//                 const data = await resp.json();
//                 setCharacters(data.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className='bg-gray-900 text-white min-h-screen p-8'>
//             <h1 className='text-3xl font-bold mb-8 text-center'>Artworks Gallery</h1>
//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
//                 {characters.map((character) => (
//                     <div 
//                         key={character.id} 
//                         className='bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300'>
//                         <h2 className='text-xl font-semibold mb-2 text-yellow-400'>{character.title}</h2>
//                         <p className='text-sm text-gray-300'>
//                             <strong className='text-yellow-500'>Artist:</strong> {character.artist_title || "Unknown Artist"}
//                         </p>
//                         <p className='text-sm text-gray-300'>
//                             <strong className='text-yellow-500'>Date:</strong> {character.date_display || "Unknown Date"}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Hero;
























// "use client";
// import React, { useEffect, useState } from 'react';

// const Hero = () => {
//     const [characters, setCharacters] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const resp = await fetch("https://api.artic.edu/api/v1/artworks");
//                 const data = await resp.json();
//                 setCharacters(data.data); 
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className=''>
//             <h1>Artworks</h1>
//             <ul>
//                 {characters.map((character) => (
//                     <li key={character.id}>
//                         <strong>{character.title}</strong> by {character.artist_title || "Unknown Artist"}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Hero;
