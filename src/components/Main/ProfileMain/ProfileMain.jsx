import React from 'react'
import s from "./ProfileMain.module.sass"
import Body from './Body/Body'

const ProfileMain = () => {  //  {/* Убать */}
return (
<div className={s.ProfileMain}>
  <div className={s.center}>
    <div className={`${s.ProfileMainWrap}`}>
      
      <div className={s.profile}>
        <div className={s.about}>
          <div className={s.avatar}>
            <div className={s.img}><img src={""} alt="avatar" /></div> {/* ВТСАИВТЬ */}
          </div>
          <div className={s.text}>
            <h2 className={s.name}>{} {}</h2>                   {/* ВТСАИВТЬ */}
            <div className={s.aboutMore}>
              <ul className='flex'>
                <li className='Lright'><a href="#">{}</a></li>    {/* ВТСАИВТЬ */}
                <li><a href="#">Подробнее</a></li>                        {/* button */}
              </ul>
            </div>
          </div>
        </div>

        <div className={s.edit}>
          <div className="button Bright"><button>Редактировать профиль</button></div>       {/* button */}
          <div className="button Bleft"><button>Ещё</button></div>                            {/* button */}
        </div>
      </div>
    </div>
    
    <Body/>
  </div>
</div>
)
}

export default ProfileMain