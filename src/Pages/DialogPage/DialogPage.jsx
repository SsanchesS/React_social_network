import React from 'react'
import s from './DialogPage.module.sass'

import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import Dialog from '../../UI/Dialog/Dialog'

const DialogPage = () => (
  <>
    <Header />
    <div className="center">
      <div className='flex'>
        <SideBar />
        <div className={`card ${s.DialogWrap}`}>
            <Dialog/>
            <Dialog/>                                                     {/* user dialog */}
            <Dialog/>
            <Dialog/>
        </div>
      </div>
    </div>
  </>
)

export default DialogPage