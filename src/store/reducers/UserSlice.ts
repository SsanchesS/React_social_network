import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../types/types";

const serverUrl  = "http://127.0.0.1:8000"     ///////////////////////////

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
      
   }
})
export default UserSlice.reducer