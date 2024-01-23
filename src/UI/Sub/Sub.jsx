import React from 'react'
import s from "./Sub.module.sass"
const Sub = () => {
  return (
    <a className={`${s.Sub} flex`}>
        <div className={s.img}><img src="./img/avatar.png" alt="group" /></div>                  
        <div className={`${s.descWrap}`}>
            <p className={s.title}>Крутая Группа</p>                                         {/* user sub */}
            <p className={s.desc}>Новое видео уже на канале!</p>
        </div>
    </a>
  )
}

export default Sub