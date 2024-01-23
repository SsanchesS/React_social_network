import React, {FC} from 'react'
import s from './NotFoundPage.module.sass'

const NotFoundPage:FC = () => {
return (
<div className={s.content}>
    <div className={s.text}>
        NotFound 404
    </div>
</div>
)
}

export default NotFoundPage