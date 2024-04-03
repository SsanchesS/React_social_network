import { configureStore } from "@reduxjs/toolkit";
import GuestSlice from "./reducers/GuestSlice"
import UserSlice from "./reducers/UserSlice"

export const store = configureStore({
   reducer:{
      GuestReducer: GuestSlice,
      UserReducer: UserSlice
   }
})