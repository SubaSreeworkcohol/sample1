import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInGoogle = () => signInWithPopup(auth, provider);


















// import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";


// const firebaseConfig = {
//   apiKey:process.env.NEXT_PUBLIC_API_KEY ,
//   authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE,
//   messagingSenderId:process.env.NEXT_PUBLIC_MESSAGINGSENDERID ,
//   appId: process.env.NEXT_PUBLIC_APPID,
// };

// const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app);

// const provider= new GoogleAuthProvider();

// export const signInGoogle= ()=> signInWithPopup(auth,provider);