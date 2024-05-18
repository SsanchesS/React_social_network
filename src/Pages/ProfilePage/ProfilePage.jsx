import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"

import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import ProfileMain from '../../components/Main/ProfileMain/ProfileMain'

import {useNavigate} from 'react-router-dom'
import { guestApi } from '../../store/api/guest.api'
import { useAppSelector } from '../../hooks/hooks'

const ProfilePage = () => {
  const navigate = useNavigate()
  const goNotFoundPage = () => navigate( '/notFound', {replace:true} )

  const [MessageError,setMessageError] = useState('')

  const user = useAppSelector(state=>state.UserReducer)
  const {id} = useParams()
  //
  const {data,isLoading,error} = guestApi.useGetGuestQuery(id,{skip: id===user.id})  
  if(error){
    setMessageError(`${error.status}: ${error.data.detail[0].type}: ${error.data.detail[0].msg}`)
  }else if(data?.code >= 400){
    setMessageError(`${data?.code}: ${data?.message}`)
    // goNotFoundPage()
  }
  setMessageError(data?.message)
  useEffect(() => {

  }, []);
return (
<>
  {isLoading ?
    <h2 className={ `white ${isLoading ? "" : "vis_none"}` }>Загрузка...</h2>
  :
  <>
    <Header user={user.id ? user : null}/>
    <div className="center">
    <div className={`${MessageError ? '' : 'hide'} red`}><p className='mb10px'>{MessageError}</p></div>
      <div className='flex'>
        <SideBar/>
        <ProfileMain user={user.id ? user : data.user}/>
      </div>
    </div>
  </>
  }  
</>
)}
export default ProfilePage