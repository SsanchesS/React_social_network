export interface Ibirth{
    year:string
    month:string
    day:string
}
export interface IUser{
    id:number
    f_name: string
    s_name: string
    city: string
    // birth : Date // date(1990, 1, 1),

    avatar_file: string // file
    mas_photosFiles: Array<number> 
    mas_music : Array<number>

    Posts : Array<IPost> ///////////////////////

    password: string  // не обязательно?
    email: string
    
    mas_friends: Array<number>
    mas_chats: Array<number>
}
export interface IGuest{
    id:number
    f_name: string
    s_name: string
    city: string
    // birth : Date // date(1990, 1, 1),

    avatar_file: string // file
    mas_photosFiles: Array<number> 
    mas_music : Array<number>

    Posts : Array<IPost> ///////////////////////

    password: string  // не обязательно?
    email: string
    
    mas_friends: Array<number>
    mas_chats: Array<number>
}
//
export interface IPost{
    id:number
    user_id:number
    content: string
    file: string  // file
    // timestamp: string
    // можно расширить и добавить массив юзеров, кто лайкнул ?
}
export interface IMusicFile{
    id:number
    user_id:number
    file: string  // file
}
export interface IUsersFile{
    id:number
    user_id:number
    file: string  // file
}
/////////////////////////
export interface IMessage{
    sender_id: number
    content: string
    // timestamp: date
    is_read: boolean
}
export interface IChat{
    id:number
    mas_users: Array<number>
    mas_messages: Array<IMessage>  // вроде все ок
}
//
export interface Iresponse{
    code: number
    message: string
    user: IUser | null
}
// export type IUserBase = Partial<IUser>;