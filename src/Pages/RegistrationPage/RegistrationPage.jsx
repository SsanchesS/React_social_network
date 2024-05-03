import React, { FC,useState,useRef, useEffect } from 'react'
import s from './RegistrationPage.module.sass'
import { useDispatch, useSelector } from 'react-redux'

import {guestApi} from "../../store/api/guest.api"

const RegistrationPage = () => {               // :FC
  const dispatch = useDispatch()

  const [f_name,set_f_name] = useState('')
  const [s_name,set_s_name] = useState('')
  const [city,setcity] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  
  const [year,setyear] = useState('')
  const [month,setmonth] = useState('')
  const [day,setday] = useState('')

  const [avatar_file,setavatar_file] = useState(null) // or str
  const InputFileRef = useRef(null)

  const [MessageError,setMessageError] = useState('')

  // 
  const [registration,{data,isLoading,error}] = guestApi.useRegistrationMutation()
  //

  const onClick_PickFile =()=>{
    InputFileRef.current.click()
  }

  const onChange_PickFile =e=>{
    const file = e.target.files[0]
  
    if(!file){
      setMessageError('Файл не выбран');
      setavatar_file(null)
      return
    }
  
    const maxSize = 2*(1024 * 1024); // 2MB
    if (file.size > maxSize) {
      setMessageError('Файл слишком большой. Максимальный размер файла - 2MB.');
      setavatar_file(null)
      return
    }
           
    const reader = new FileReader()                           /////////////////////////////////////// МОЖНО вынести в отдельный сервис
    reader.onloadend=()=>setavatar_file(reader.result)  
    reader.readAsDataURL(file) // чтение в формате base64
    setMessageError("Файл выбран")
  }

  //

  const onClick_registration = async()=>{
    let birth = {year,month,day} ////////////////////////////// const
    // try:
      // datetime.strptime(birth, "%Y-%m-%d")
    // except ValueError:
      // dataAt.set("Не Корректно")
      // return

    if(!(f_name && s_name && email && password)){
      setMessageError("Введи поля корректно!")
      return
    }else if(email.length < 5){
      setMessageError("Введи верный email !")
      return
    }else if(password.length < 8 || password.length > 32){
      setMessageError("Введи пароль от 8 до 32 символов!")
      return
    }else if(f_name.length < 2 || s_name.length < 2){
      setMessageError("Ваше имя слишком мало!")
      return
    }
    else if(f_name.length < 2 || s_name.length < 2){ // тут проверка на ДАТУ
      setMessageError("Ваше")
      return
    }
    const registration_data = {f_name,s_name,email,password,avatar_file} // Partial<IUser>

    try {
      await registration(registration_data).then(onfulfilled=>{ // data or error
        if(onfulfilled.error){
          setMessageError(`${onfulfilled.error.status}: ${onfulfilled.error.data.detail[0].type}: ${onfulfilled.error.data.detail[0].msg}`)
          return
        }else if(onfulfilled.data.code >= 400){
          setMessageError(`${onfulfilled.data.code}: ${onfulfilled.data.message}`)
          return
        }
        const id = onfulfilled.data.user.id
        setMessageError(onfulfilled.data.message)
        // перенаправляем и сохраняем id      
        console.log(onfulfilled.data)
      })
    } catch (error) {
      setMessageError("Ошибка")
      console.log(error)
    }
}
return (
  <>
  <div className={`card ${s.center}`}>

    <div className={s.RegistrationPage}>

      <div className={s.text}>
        <h1><div className={s.logo}><a href="#"><img src="/img/logo.png" alt="logo" /></a></div>Впервые в SaNeX?</h1>
        <p>Моментальная регистрация</p>
      </div>

      <h2 className={ `${s.text} white ${isLoading ? "" : "vis_none"}` }>Загрузка...</h2>

      <div className={s.inputs}>
        <div className='mb10px'><input type="text" placeholder='Ваше имя' value={f_name} onChange={e=>set_f_name(e.target.value)}/></div>
        <div className='mb10px'><input type="text" placeholder='Ваша фамилия' value={s_name} onChange={e=>set_s_name(e.target.value)}/></div>
        <div className={`mb10px ${s.inputFile} ${s.button} button`}>
          <button onClick={onClick_PickFile}>Файл на аву</button>
          <input type="file" accept="image/*,.png,.jpg,.jpeg,.gif,.web" ref={InputFileRef} onChange={onChange_PickFile}/>
        </div>

        <p className='mb10px'>Дата рождения {`(Можешь не вводить, пока)`}</p>

        <div className={`${s.date} mb10px`}>
          <div className='mr10px'><input type="text" placeholder='День' value={day} onChange={e=>setday(e.target.value)}/></div>
          <div className='mr10px'><input type="text" placeholder='Месяц' value={month} onChange={e=>setmonth(e.target.value)}/></div>
          <div><input type="text" placeholder='Год' value={year} onChange={e=>setyear(e.target.value)}/></div>
        </div>

        <div className='mb10px'><input type="text" placeholder='email' value={email} onChange={e=>setemail(e.target.value)}/></div>
        <div className='mb10px'><input type="password" placeholder='password' value={password} onChange={e=>setpassword(e.target.value)}/></div>
      </div>
      
      <div className={`${s.button} button`}><button onClick={onClick_registration} disabled={isLoading}>Зарегистрироваться</button></div>
      
      <div className={`${MessageError ? '' : 'vis_none'} red`}><p className='mt10px'>{MessageError}</p></div>
    </div>

  </div>
  </>
)
}
export default RegistrationPage