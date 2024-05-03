import { IUser, Iresponse } from "../../types/types";
import { api } from "./api";

interface IRegistrationData extends Partial<Pick<IUser,"f_name"|"s_name"|"email"|"password"|"avatar_file">>{}

export const guestApi = api.injectEndpoints({
   endpoints: build =>({
      registration: build.mutation<Iresponse,IRegistrationData>({
         query: (RegistrationData:IRegistrationData)=>({
            url: "/registration",
            method: "POST",
            body: RegistrationData
         }),
         // invalidatesTags: ["User"]
      }),

   })
})