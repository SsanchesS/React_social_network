import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {IGuest, IUser} from "../../types/types"

const serverUrl  = "http://127.0.0.1:8000"     ///////////////////////////

interface IGuestState{
   user: IGuest | null,
   code: number,
   isLoading: boolean,
   message: string
}
interface IResponseData extends Omit<IGuestState, "isLoading">{}

const initialState: IGuestState = {
   user: null,
   code: 0,
   isLoading: false,
   message: ""
}
export const registration = createAsyncThunk(
   "GuestSlice/registration",
   async function(data:Partial<Pick<IUser,"f_name"|"s_name"|"email"|"password"|"avatar_file">>,{rejectWithValue}){
      try{
         const response = await axios.post(`${serverUrl}/registration/`,data)
         const responseData = await response.data
         return {
            user: responseData.user,
            code: responseData.code,
            message: responseData.message
         }
      }catch(error:any){
         if(error.response.status === 422) return rejectWithValue({user: null, code: 422, message: `Введи поля корректно!`})
         return rejectWithValue({user: null, code: 500, message: error})
      }
   }
)
const GuestSlice = createSlice({
   name: "GuestSlice",
   initialState,
   reducers: {
   },
   extraReducers: builder =>{
      builder
         .addCase(registration.pending,state=>{ // статус, функция
            state.isLoading = true
            state.message = ""
         })
         .addCase(registration.fulfilled,(state, action: PayloadAction<IResponseData>)=>{
            state.user = action.payload.user
            state.code = action.payload.code
            state.isLoading = false
            state.message = action.payload.message

            
            

         })
         .addCase(registration.rejected,(state,action:any)=>{
            if(action.payload){
               const payload:IResponseData = action.payload // ибо rejected возвращает много не нужного
               console.log('Ошибка : ', payload.message)
               state.code = payload.code
               state.isLoading = false
               state.message = payload.message
            }else{
               console.log('Ошибка : ', action.error)
               // state.code = action.error.code
               state.isLoading = false
               state.message = 'Ошибка : ' + action.error.message
            }
            
         })
   }
})
export default GuestSlice.reducer