import { create } from "zustand";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  login: async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User  logged in:", user); 
      set({ isAuthenticated: true, user });
    } catch (error) {
      console.error("Login failed:", error);
    }
  },
  logout: async () => {
    try {
      await signOut(auth);
      console.log("User  logged out"); 
      set({ isAuthenticated: false, user: null });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },
}));


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User  state changed:", user); 
    useAuthStore.setState({ isAuthenticated: true, user });
  } else {
    console.log("User  state changed: no user"); 
    useAuthStore.setState({ isAuthenticated: false, user: null });
  }
});






















































































