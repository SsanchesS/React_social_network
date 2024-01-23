import React from 'react'
import s from "./FriendSide.module.sass"

const FriendSide = () => {
  return (
    <a className={s.Friend}>                           
        <div className={s.img}><img src="./img/avatar.png" alt="FriendSide" /></div>   {/* user content */}
        <p>FriendSide</p>
    </a>
  )
}

export default FriendSide