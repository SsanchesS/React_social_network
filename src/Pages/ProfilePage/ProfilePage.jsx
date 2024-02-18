import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"

import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import ProfileMain from '../../components/Main/ProfileMain/ProfileMain'

import {get_user} from '../../server_requests/server_requests'

import {useNavigate} from 'react-router-dom'                            //////////// УБРАТЬ

const ProfilePage = () => {
  const navigate = useNavigate()                                        //////////// УБРАТЬ
  const goNotFoundPage = () => navigate( '/notFound', {replace:true} )  //////////// УБРАТЬ

  
  const [user,setuser] = useState({})     /////////////// Получать через redux
  const [MessageError,setMessageError] = useState('')

  const {id} = useParams()
  const f_get_user_for_useEffect =async(id)=>{
    try{
      const data = await get_user(id) // Если id === user id from redux то 
      if(data.user){ 
        const id = data.user.id
        setuser(data.user)
        // перенаправляем (куда?) и сохраняем id
      }else{
        setMessageError(data.message)
        // goNotFoundPage()  // ССылка на страницу 404
      }               
    }catch (error) { // :any
      console.log(error)
      setMessageError(error)
    }
  }

  useEffect(()=>{
    f_get_user_for_useEffect(id)
  },[])

  return (
  <>
    <Header user={user}/>  {/* Убать */}
    <div className="center">
    <div className={`${MessageError ? '' : 'hide'} red`}><p className='mb10px'>{MessageError}</p></div>
      <div className='flex'>
        <SideBar/>
        <ProfileMain user={user}/>  {/* Убать */}
      </div>
    </div>
  </>
  )
}
export default ProfilePage