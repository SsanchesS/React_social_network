import { createSlice } from "@reduxjs/toolkit";
import {IGuest} from "../../types/types"

interface IGuestState{
   user: IGuest | null,
   code: number,
   isLoading: boolean,
   message: string
}
const initialState: IGuestState = {
   user: null,
   code: 0,
   isLoading: false,
   message: ""
}
const GuestSlice = createSlice({
   name: "GuestSlice",
   initialState,
   reducers: {
      
   },      
})
export default GuestSlice.reducer