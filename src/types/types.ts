export interface Ibirth{
    year:string
    month:string
    day:string
}
//
export interface IUser{
    id:number
    f_name: string
    s_name: string
    // birth : Date // date(1990, 1, 1),
    avatar: string

    password: string  // не обязательно?
    email: string
    
    mas_friends: Array<number>
    mas_chats: Array<number>
}
export interface IChat{
    id:number
    mas_users: Array<number>  ///////////////////////
    mas_messages: Array<number>  ///////////////////////
}
//
export interface Iresponse{
    code:number
    message:string
    user:IUser | null
}
// export type IUserBase = Partial<IUser>;