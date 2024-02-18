import React from 'react'
import s from "./Header.module.sass"

const Header = ({user}) => {
  return (                                      // position поменять
    <div className={s.header}>       

      <div className={s.center}>

        <div className={s.headerWrap}>
        
          <div className={s.left}>  {/* 323232 */}
              <div className={s.logo}><a href="#"><img src="/img/logo.png" alt="logo" /></a></div>
              <div className={s.title}><h2>SaNeX</h2></div>
              <div className={s.search}><input type="text" /></div>                                                           {/* maybe delete */}
              <div className={s.notification}><a href="#"><img src="/img/notification.png" alt="notification" /></a></div>           {/* button */}
              <div className={s.music}><a href="#"><img src="/img/music.png" alt="music" /></a></div>                             {/* button */}
          </div>

          <div className={s.right}>
              <div className={s.userName}><h3>{user.f_name} {user.s_name}</h3></div>
              <div className={s.avatar}><a href="#"><img src={user.avatar_file} alt="avatar" /></a></div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Header