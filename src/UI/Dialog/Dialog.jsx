import React from 'react'
import s from './Dialog.module.sass'

const Dialog = () => {
  return (
    <div className={s.Dialog}>
        <div className={s.img}><img src="/img/avatar.png" alt="avatar" /></div>        {/* user content proops*/}
        <div className={s.desc}>
            <div className={s.text}>
                <div><a href='#'>Валерий Марочнов</a></div>
                <p>19:06</p>
            </div>
            <div className={s.message}>
                <p>кайф</p>
            </div>
        </div>
    </div>
  )
}

export default Dialog