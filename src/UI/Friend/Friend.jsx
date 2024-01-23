import React from 'react'
import s from './Friend.module.sass'

const Friend = () => {
  return (
    <div className={s.Friend}>
        <div className={s.img}><img src="./img/avatar.png" alt="avatar" /></div>      {/* user content proops */}
        <div className={s.desc}>
            <div className={s.text}>
                <h1>Валерий Марочнов</h1>
                <p>кайф</p>
            </div>
            <div className={s.time}>
                19:06
            </div>
        </div>
    </div>
  )
}

export default Friend