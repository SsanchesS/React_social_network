import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {IGuest} from "../../types/types"

const initialState:IGuest|null = {
   id:0,
   f_name: "",
   s_name: "",
   city: "",
   // birth : Date // date(1990, 1, 1),

   avatar_file: "" // file
}
const GuestSlice = createSlice({
   name: "GuestSlice",
   initialState,
   reducers: {
      setGuest:(state,action: PayloadAction<IGuest>)=>{
         return action.payload
      }
   },      
})
export default GuestSlice.reducer
export const {setGuest} = GuestSlice.actions