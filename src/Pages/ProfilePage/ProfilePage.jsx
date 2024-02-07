import React,{useEffect} from 'react'
import {useParams} from "react-router-dom"

import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import ProfileMain from '../../components/Main/ProfileMain/ProfileMain'

import {get_user} from '../../server_requests/server_requests'

import {useNavigate} from 'react-router-dom'                            //////////// УБРАТЬ

const ProfilePage = () => {
  const navigate = useNavigate()                                        //////////// УБРАТЬ
  const goNotFoundPage = () => navigate( '/notFound', {replace:true} )  //////////// УБРАТЬ

  
  const [user,setuser] = React.useState({})     /////////////// Получать через redux

  const {id} = useParams()
  const f_get_user_for_useEffect =async(id)=>{
    try{
      const data = await get_user(id) // Если id === user id from redux то 
      if(data.user){ 
        const id = data.user.id
        setuser(data.user)
        // перенаправляем (куда?) и сохраняем id
      }else{
        goNotFoundPage()  // ССылка на страницу 404
      }               
    }catch (error) { // :any
      console.log(error)
      alert(error)
    }
  }

  useEffect(()=>{
    f_get_user_for_useEffect(id)
  },[])

  return (
  <>
    <Header user={user}/>
    <div className="center">
      <div className='flex'>
        <SideBar user={user}/>
        <ProfileMain user={user}/>
      </div>
    </div>
  </>
  )
}
export default ProfilePage