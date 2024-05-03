import { api } from './api/api';
import { configureStore } from "@reduxjs/toolkit";
import GuestSlice from "./reducers/GuestSlice"
import UserSlice from "./reducers/UserSlice"

export const store = configureStore({
   reducer:{
      [api.reducerPath]: api.reducer,
      GuestReducer: GuestSlice,
      UserReducer: UserSlice
   },
   middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(api.middleware)
})
export type TypeState = ReturnType<typeof store.getState>
export type TypeDispatch = typeof store.dispatch