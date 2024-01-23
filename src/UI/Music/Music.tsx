import React, { FC } from 'react'

import s from "./Music.module.sass"

const Music:FC = () => {
return (
<div className={s.block}>
    <div className={s.left}>                                               {/* user content */}
        <div className={s.img}><img src="./img/avatar.png" alt="img" /></div>
        <div className={s.desc}><h1>GTA</h1><p>MORGENSHTERN</p></div>
    </div>
    <div className={s.time}>2:07</div>
</div>
)
}

export default Music