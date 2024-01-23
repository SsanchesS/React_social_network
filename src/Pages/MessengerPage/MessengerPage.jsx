import React from 'react'

import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import Messenger from '../../components/Main/Messenger/Messenger'

const MessengerPage = () => (
  <>
    <Header />
    <div className="center">
      <div className='flex'>
        <SideBar />
        <Messenger/>
      </div>
    </div>
  </>
)

export default MessengerPage