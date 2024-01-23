import React, { FC } from 'react'

import s from "./Photo.module.sass"

const Photo:FC = () => {
return (
<div className={s.img}><img src="./img/avatar.png" alt="img" /></div>          //  user content
)
}

export default Photo