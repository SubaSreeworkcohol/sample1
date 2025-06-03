import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { create } from "zustand";

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

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  login: async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      set({ isAuthenticated: true, user });
    } catch (error) {
      console.error("Login failed:", error);
    }
  },
  logout: async () => {
    try {
      await signOut(auth);
      set({ isAuthenticated: false, user: null });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },
}));

onAuthStateChanged(auth, (user) => {
  if (user) {
    useAuthStore.setState({ isAuthenticated: true, user });
  } else {
    useAuthStore.setState({ isAuthenticated: false, user: null });
  }
});























































































