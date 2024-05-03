import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/types";

const initialState:IUser = {
   id:0,
   f_name: "",
   s_name: "",
   city: "",
   // birth : Date // date(1990, 1, 1),

   avatar_file: "", // file
   mas_photosFiles: [],
   mas_music : [],

   Posts : [], ///////////////////////

   password: "",
   email: "",
   
   mas_friends: [],
   mas_chats: []
}
//

const UserSlice = createSlice({
   name:"UserSlice",
   initialState,
   reducers:{
      setUser:(state,action: PayloadAction<IUser>)=>{
         return action.payload
      }
   }
})
export default UserSlice.reducer
export const {setUser} = UserSlice.actions