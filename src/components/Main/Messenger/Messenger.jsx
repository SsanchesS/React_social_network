import React from 'react'
import s from './Messenger.module.sass'
import Friend from '../../../UI/Friend/Friend'

const Messenger = () => {
  return (
    <div className={`${s.Messenger} card`}>
        <div className={s.search}>
            <div className={s.img}><img src="./img/search.png" alt="search" /></div>
            <input type="text" placeholder='Поиск'/>
        </div>

        <div className={s.friend}>
            <Friend/>                     {/* {user} */}
            <Friend/>
            <Friend/>
        </div>

    </div>
  )
}

export default Messenger