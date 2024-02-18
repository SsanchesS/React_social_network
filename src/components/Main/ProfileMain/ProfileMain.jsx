import React from 'react'
import s from "./ProfileMain.module.sass"
import Body from './Body/Body'

const ProfileMain = ({user}) => {  //  {/* Убать */}
return (
<div className={s.ProfileMain}>
  <div className={s.center}>
    <div className={`${s.ProfileMainWrap}`}>
      
      <div className={s.profile}>
        <div className={s.about}>
          <div className={s.avatar}>
            <div className={s.img}><img src={user.avatar_file} alt="avatar" /></div>
          </div>
          <div className={s.text}>
            <h2 className={s.name}>{user.f_name} {user.s_name}</h2>
            <div className={s.aboutMore}>
              <ul className='flex'>
                <li className='Lright'><a href="#">{user.city}</a></li>
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
    
    <Body user={user}/>
  </div>
</div>
)
}

export default ProfileMain