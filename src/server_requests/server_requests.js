import axios from "axios"
// import JSON

const serverUrl  = "http://127.0.0.1:8000"

export const auth = async (data) =>{
    try{
        const response = await axios.post(`${serverUrl}/auth/`,data)
        const responseData = response.data
        return responseData 
    }catch(error){
        if(error.response.status === 422) return {code: 422, message: `Введи поля корректно!`,user:null} // что то с полями 
        console.error('Ошибка :', error)
        return {code: 500, message: `Ошибка: ${error}`,user:null}
    }
}
// export const registration = async (data:IUser):Promise<Iresponse> =>{
export const registration = async (data) =>{
    try{
        const response = await axios.post(`${serverUrl}/registration/`,data)
        const responseData = response.data
        return responseData
    }catch(error){
        if(error.response.status === 422) return {code: 422, message: `Введи поля корректно!`,user:null} // что то с полями 
        console.error('Ошибка :', error)
        return {code: 500, message: `Ошибка: ${error}`,user:null}
    }
}
///////////////////////////////////////////////////////////////
export const get_user = async (id) =>{
    try{
        const response = await axios.get(`${serverUrl}/users/${id}`)
        const responseData = response.data
        return responseData
    }catch(error){
        console.error('Ошибка :', error)
        return {code: 500, message: `Ошибка: ${error}`,user:null}
    }
}
export const upd_user = async (id,data)  =>{
    if(data.mas_friends){
        data.mas_friends = JSON.stringify(data.mas_friends)
    }if(data.mas_chats){
        data.mas_chats = JSON.stringify(data.mas_chats)
    }
    try{
        const response = await axios.put(`${serverUrl}/users/${id}`,data)
        const responseData = response.data
        return responseData
    }catch(error){
        if(error.response.status === 422) return {code: 422, message: `Введи поля корректно!`,user:null} // что то с полями 
        console.error('Ошибка :', error)
        return {code: 500, message: `Ошибка: ${error}`,user:null}
    }
}
export const del_user = async (id)  =>{
    try{
        const response = await axios.delete(`${serverUrl}/users/${id}`)
        const responseData = response.data
        return responseData
    }catch(error){
        console.error('Ошибка :', error)
        return {code: 500, message: `Ошибка: ${error}`,user:null}
    }
}
///////////////////////////////////////////////////////////////
export const get_chat = async (id)  =>{
    try{
        const response = await axios.get(`${serverUrl}/chats/${id}`)
        const responseData = response.data
        return responseData
    }catch(error){
        console.error('Ошибка :', error)
        return {code: 500, message: `Ошибка: ${error}`,user:null}
    }
}
export const new_chat = async (data)  =>{
    if(data.mas_users){
        data.mas_users = JSON.stringify(data.mas_users)
    }if(data.mas_messages){
        data.mas_messages = JSON.stringify(data.mas_messages)
    }
    try{
        const response = await axios.post(`${serverUrl}/chats/`,data)
        const responseData = response.data
        return responseData
    }catch(error){
        console.error('Ошибка :', error)
        return {code: 500, message: `Ошибка: ${error}`,user:null}
    }
}
export const upd_chat = async (id,data)  =>{
    if(data.mas_users){
        data.mas_users = JSON.stringify(data.mas_users)
    }if(data.mas_messages){
        data.mas_messages = JSON.stringify(data.mas_messages)
    }
    try{
        const response = await axios.put(`${serverUrl}/chats/${id}`,data)
        const responseData = response.data
        return responseData
    }catch(error){
        if(error.response.status === 422) return {code: 422, message: `Введи поля корректно!`,user:null} // что то с полями 
        console.error('Ошибка :', error)
        return {code: 500, message: `Ошибка: ${error}`,user:null}
    }
}
export const del_chat = async (id)  =>{
    try{
        const response = await axios.delete(`${serverUrl}/chats/${id}`)
        const responseData = response.data
        return responseData
    }catch(error){
        console.error('Ошибка :', error)
        return {code: 500, message: `Ошибка: ${error}`,user:null}
    }
}