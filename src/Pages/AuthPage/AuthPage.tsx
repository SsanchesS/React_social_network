import React,{useState,FC} from 'react'
import s from './AuthPage.module.sass'
import {auth} from '../../server_requests/server_requests'

const AuthPage:FC = () => {

const [email,setemail] = useState('')
const [password,setpassword] = useState('')

const [MessageError,setMessageError] = useState('')

const onClick_auth = async()=>{
  if (!(email && password)){
    setMessageError("Введи поля корректно!")
    return
  }else if(password.length < 8 || password.length > 32){
    setMessageError("Введи пароль от 8 до 32 символов!")
    return
  }
  try{
    const user = {password, email}
    const data = await auth(user)
    if(data.user){
      const id = data.user.id

      setMessageError(data.message)
      console.log(data)                   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // перенаправляем и сохраняем id
    }else{
      setMessageError(data.message)
    }
  }catch (error:any) {
      console.log(error)
      setMessageError(error)
    }
}

return (
  <>
  <div className={`card ${s.center}`}>
    <div className={s.AuthPage}>
      <div className={s.text}>
        <h1><div className={s.logo}><a href="#"><img src="/img/logo.png" alt="logo" /></a></div> Вход в SaNeX</h1>
      </div>
      <div className={s.inputs}>
        <div className='mb10px'><input type="text" placeholder='email' value={email} onChange={e=>setemail(e.target.value)}/></div>
        <div className='mb10px'><input type="password" placeholder='password' value={password} onChange={e=>setpassword(e.target.value)}/></div>
      </div>
      <div className={`${MessageError ? '' : 'hide'} red`}><p className='mb10px'>{MessageError}</p></div>
      <div className={`${s.button} button`}><button onClick={onClick_auth}>Войти</button></div>
    </div>
  </div>
  </>
)
}
export default AuthPage