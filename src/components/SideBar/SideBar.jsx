import React from 'react'
import s from "./SideBar.module.sass"
const SideBar = () => {
  return (
    <div className={s.sideBar}>
        <ul>
            <li className={s.active}><a href="#">Моя Страница</a></li>             {/* LINK */}
            <li><a href="#">Новости</a></li>
            <li><a href="#">Мессенджер</a></li>
            <li><a href="#">Друзья</a></li>
            <li><a href="#">Сообщества</a></li>
            <li><a href="#">Фотографии</a></li>
            <li><a href="#">Музыка</a></li>
            <li><a href="#">Видео</a></li>
        </ul>
    </div>
  )
}

export default SideBar