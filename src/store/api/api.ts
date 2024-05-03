import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({
   reducerPath: "api",
   tagTypes: [""],
   baseQuery: fetchBaseQuery({
      baseUrl: "http://127.0.0.1:8000",
   }),
   endpoints: build=>({

   })
})