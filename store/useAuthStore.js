import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  login: (userData) => set({ isAuthenticated: true, user: userData }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));















// import { create } from 'zustand';


// export const useAuthStore = create((set) => ({
//   isAuthenticated: false,
//   user: null,
//   login: (userData) => set({ isAuthenticated: true, user: userData }),
//   logout: () => set({ isAuthenticated: false, user: null }),
// }));




















// const {create} =require('zustand');


// const useCounterStore =create((set)=>({
//     count:0,
//     increase: ()=>set((state)=>({count:state.count+1})),
//     decrease: ()=>set((state)=>({count:state.count-1})),
//     reset:()=>set({count:0})
// }))


// export default useCounterStore;