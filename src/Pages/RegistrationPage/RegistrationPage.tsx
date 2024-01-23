import React, { FC,useState } from 'react'
import s from './RegistrationPage.module.sass'

import {registration} from "../../server_requests/server_requests"

import {IUser,Ibirth,Iresponse} from '../../types/types'

const RegistrationPage:FC = () => {
  const [f_name,set_f_name] = useState('')
  const [s_name,set_s_name] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  
  const [year,setyear] = useState('')
  const [month,setmonth] = useState('')
  const [day,setday] = useState('')

  const [MessageError,setMessageError] = useState('')

  const onClick_registration = ()=>{
    let birth : Ibirth = {year,month,day}
    // try:
      // datetime.strptime(birth, "%Y-%m-%d")
    // except ValueError:
      // dataAt.set("Не Корректно")
      // return

    if(!(f_name || s_name || email || password)){
      setMessageError("Введи поля корректно!")
      return
    }
    
    try {
      const data = {f_name,s_name,email,password} // Partial<IUser>
      const response:any = registration(data)

      if(response.code === 404){
        setMessageError(response.message)
        return            
      }
      else if(response.code === 201){
          const id = response.id
          console.log(id)
          return
      }

    } catch (error:any) {

      console.log(error)
      setMessageError('message')

    }
  
    // setemail('')
    // setpassword('')
    // set_f_name('')
    // set_s_name('')

    // setday('')
    // setmonth('')
    // setyear('')
}
return (
  <>
  <div className={`card ${s.center}`}>

    <div className={s.RegistrationPage}>

      <div className={s.text}>
        <h1><div className={s.logo}><a href="#"><img src="./img/logo.png" alt="logo" /></a></div>Впервые в SaNeX?</h1>
        <p>Моментальная регистрация</p>
      </div>

      <div className={s.inputs}>
        <div className='mb10px'><input type="text" placeholder='Ваше имя' value={f_name} onChange={e=>set_f_name(e.target.value)}/></div>
        <div className='mb10px'><input type="text" placeholder='Ваша фамилия' value={s_name} onChange={e=>set_s_name(e.target.value)}/></div>

        <p className='mb10px'>Дата рождения {`(Можешь не вводить, пока)`}</p>

        <div className={`${s.date} mb10px`}>
          <div className='mr10px'><input type="text" placeholder='День' value={day} onChange={e=>setday(e.target.value)}/></div>
          <div className='mr10px'><input type="text" placeholder='Месяц' value={month} onChange={e=>setmonth(e.target.value)}/></div>
          <div><input type="text" placeholder='Год' value={year} onChange={e=>setyear(e.target.value)}/></div>
        </div>

        <div className='mb10px'><input type="text" placeholder='email' value={email} onChange={e=>setemail(e.target.value)}/></div>
        <div className='mb10px'><input type="passwordword" placeholder='passwordword' value={password} onChange={e=>setpassword(e.target.value)}/></div>
      </div>
      
      <div className={`${MessageError ? '' : 'hide'} red`}><p className='mb10px'>{MessageError}</p></div>
      <div className={`${s.button} button`}><button onClick={onClick_registration}>Зарегестрироваться</button></div>

    </div>

  </div>
  </>
)
}

export default RegistrationPage