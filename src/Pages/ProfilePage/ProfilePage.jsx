import React from 'react'

import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import ProfileMain from '../../components/Main/ProfileMain/ProfileMain'

const ProfilePage = () => (
  <>
    <Header />
    <div className="center">
      <div className='flex'>
        <SideBar />
        <ProfileMain/>
      </div>
    </div>
  </>
)

export default ProfilePage