import axios from "axios"

const serverUrl  = "http://127.0.0.1:8000"

// auth
export const auth = async (data) =>{
    try{
        await axios.post(`${serverUrl}/auth/`,data)
        .then(response => {
            const data = response.data
            if(data.code === 401){
                console.log(data.message)
                return data.message           
            }
            else if(data.code === 200){
                if(data.user[6]){
                    data.user[6] = JSON.parse(data.user[6])
                }if(data.user[7]){
                    data.user[7] = JSON.parse(data.user[7])
                }
                const user = {"id":data.user[0],"f_name":data.user[1],"s_name":data.user[2],"password":data.user[3],"email":data.user[4],"avatar":data.user[5],"mas_friends":data.user[6],"mas_chats":data.user[7]}
                console.log(user)
                return user
            }
        })
    }catch(error){
        console.error('Error :', error)
    }
}
// registration
// export const registration = async (data:IUser):Promise<Iresponse> =>{
export const registration = async (data) =>{
    try{
        const response = await axios.post(`${serverUrl}/users/`,data)
        
        const responseData = response.data
        if(responseData.code === 404){
            console.log(responseData.message)
            return responseData           
        }
        else if(responseData.code === 201){
            responseData.user = {"id":responseData.user[0]}
            console.log(responseData.user)
            return responseData
        }else {
            return { code: 500, message: 'Server Error', user: null };
        }
    }catch(error){
        console.error('Error :', error)
        return {code: 500, message: `Ошибка: ${error}`,user:null}
    }
}
//
export const get_user = async (id) =>{
    try{
        await axios.get(`${serverUrl}/users/${id}`)
        .then(response => {
            const data = response.data
            if(data.code === 404){
                console.log(data.message)
                return data.message
            }else if(data.code === 201){
                if(data.user[6]){
                    data.user[6] = JSON.parse(data.user[6])
                }if(data.user[7]){
                    data.user[7] = JSON.parse(data.user[7])
                }
                const user = {"id":data.user[0],"f_name":data.user[1],"s_name":data.user[2],"password":data.user[3],"email":data.user[4],"avatar":data.user[5],"mas_friends":data.user[6],"mas_chats":data.user[7]}
                console.log(user)
                return user
            }
        })
    }catch(error){
        console.error('Error :', error)
    }
}
export const upd_user = async (id,data)  =>{
    if(data.mas_friends){
        data.mas_friends = JSON.stringify(data.mas_friends)
    }if(data.mas_chats){
        data.mas_chats = JSON.stringify(data.mas_chats)
    }
    try{
        await axios.put(`${serverUrl}/users/${id}`,data)
        .then(response => {
            const data = response.data
            if(data.code === 404){
                console.log(data.message)
                return data.message           
            }else if(data.code === 201){
                const id = {"id":data.id[0]}
                console.log(id)
                return id
            }
        })
    }catch(error){
        console.error('Error :', error)
    }
}
export const del_user = async (id)  =>{
    try{
        await axios.delete(`${serverUrl}/users/${id}`)
        .then(response => {
            const data = response.data
            if(data.code === 404){
                console.log(data.message)
                return data.message
            }else if(data.code === 201){
                const id = {"id":data.id[0]}
                console.log(id)
                return id
            }
        })
    }catch(error){
        console.error('Error :', error)
    }
}
//
export const get_chat = async (id)  =>{
    try{
        await axios.get(`${serverUrl}/chats/${id}`)
        .then(response => {
            const data = response.data
            if(data.code === 404){
                console.log(data.message)
                return data.message
            }else if(data.code === 201){
                if(data.chat[1]){
                    data.chat[1] = JSON.parse(data.chat[1])
                }if(data.chat[2]){
                    data.chat[2] = JSON.parse(data.chat[2])
                }
                const chat = {"id":data.chat[0],"mas_users":data.chat[1],"mas_messages":data.chat[2]}
                console.log(chat)
                return chat
            }
        })
    }catch(error){
        console.error('Error :', error)
    }
}
export const new_chat = async (data)  =>{
    if(data.mas_users){
        data.mas_users = JSON.stringify(data.mas_users)
    }if(data.mas_messages){
        data.mas_messages = JSON.stringify(data.mas_messages)
    }
    try{
        await axios.post(`${serverUrl}/chats/`,data)
        .then(response => {
            const data = response.data
            if(data.code === 201){
                const id = {"id":data.id[0]}
                console.log(id)
                return id
            }
        })
    }catch(error){
        console.error('Error :', error)
    }
}
export const upd_chat = async (id,data)  =>{
    if(data.mas_users){
        data.mas_users = JSON.stringify(data.mas_users)
    }if(data.mas_messages){
        data.mas_messages = JSON.stringify(data.mas_messages)
    }
    try{
        await axios.put(`${serverUrl}/chats/${id}`,data)
        .then(response => {
            const data = response.data
            if(data.code === 404){
                console.log(data.message)
                return data.message           
            }else if(data.code === 201){
                const id = {"id":data.id[0]}
                console.log(id)
                return id
            }
        })
    }catch(error){
        console.error('Error :', error)
    }
}
export const del_chat = async (id)  =>{
    try{
        await axios.delete(`${serverUrl}/chats/${id}`)
        .then(response => {
            const data = response.data
            if(data.code === 404){
                console.log(data.message)
                return data.message
            }else if(data.code === 201){
                const id = {"id":data.id[0]}
                console.log(id)
                return id
            }
        })
    }catch(error){
        console.error('Error :', error)
    }
}