import {auth,registration,get_user,upd_user,del_user, get_chat,new_chat,upd_chat,del_chat} from '../server_requests/server_requests'

export const authb =async()=>{
  const user = {password:"admin4", email:"admin2"}
  const data = await auth(user)
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DATA:  ",data)
}
export const registrationb =async()=>{
  const user = {password:"admin4",email:"admin4",f_name:"admin4",s_name:"admin4",avatar_file:"avatar_file"}
  const data = await registration(user)
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DATA:  ",data)
}
export const get_userb =async()=>{
  const data = await get_user(1)
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DATA:  ",data)
}
export const upd_userb =async()=>{
  const user = {f_name:"admin",mas_friends:[2,1,1]}
  const full_user = {password:"admin",email:"admin",f_name:"admin",s_name:"admin",avatar_file:"adminava",mas_friends:[1,2,1],mas_chats:[6,2]}
  const data = await upd_user(1,user)
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DATA:  ",data)
}
export const del_userb =async()=>{
  const data = await del_user(3)
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DATA:  ",data)
}
/////////////////////////////////////////////
export const get_chatb =async()=>{
  const data = await get_chat(9)
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DATA:  ",data)
}
export const new_chatb =async()=>{
  const chat = {mas_users:[1,2],mas_messages:[{sender_id:1,content:"text",timestamp:"DATETIME",is_read:false}]}
  const data = await new_chat(chat)
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DATA:  ",data)
}
export const upd_chatb =async()=>{
  const data_chat = await get_chat(9)
  let chat = data_chat.chat

  const message = {sender_id:1,content:"1",timestamp:"DATETIME",is_read:false} // "id":0,
  chat.mas_messages.push(message)
  const upd_messages_in_chat = {mas_messages:chat.mas_messages}

  console.log("upd_messages_in_chat",upd_messages_in_chat)
  const data_upd_chat = await upd_chat(9,upd_messages_in_chat)
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DATA:  ",data_upd_chat)
}
export const del_chatb =async()=>{
  const data = await del_chat(8)
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DATA:  ",data)
}

// <button onClick={get_userb}>get_userb</button>
// <button onClick={upd_userb}>upd_userb</button>
// <button onClick={get_chatb}>get_chatb</button>
// <button onClick={del_chatb}>del_chatb</button>
// <button onClick={new_chatb}>new_chatb</button>
// <button onClick={upd_chatb}>upd_chatb</button>