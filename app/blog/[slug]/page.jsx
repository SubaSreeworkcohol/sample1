// "use client";
// import React, { useEffect, useState } from 'react';

// const Page = ({ params }) => {
//     const { slug } = params; 
//     const [artwork, setArtwork] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const resp = await fetch(`https://api.artic.edu/api/v1/artworks/${slug}`);
//                 if (!resp.ok) {
//                     throw new Error(`Failed to fetch artwork with slug: ${slug}`);
//                 }
//                 const data = await resp.json();
//                 setArtwork(data.data); 
//             } catch (err) {
//                 setError(err.message);
//             }
//         };

//         fetchData();
//     }, [slug]);

//     return (
//         <div>
//             <h1>Artwork Details</h1>
//             {error ? (
//                 <p>Error: {error}</p>
//             ) : artwork ? (
//                 <div>
//                     <h2>{artwork.title}</h2>
//                     <p>By: {artwork.artist_title || 'Unknown Artist'}</p>
//                     <p>Date: {artwork.date_display || 'Unknown Date'}</p>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default Page;
