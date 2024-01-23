import React, {FC,useState} from 'react'
import s from "./Body.module.sass"
import Post from '../../../../UI/Post/Post'
import FriendSide from '../../../../UI/FriendSide/FriendSide'
import Sub from '../../../../UI/Sub/Sub'
import Music from '../../../../UI/Music/Music'
import Photo from '../../../../UI/Photo/Photo'

const Body:FC = () => {
const [hidePhoto,sethidePhoto] = useState(false)
const [hideMusic,sethideMusic] = useState(true)

const [textContent,settextContent] = useState('')
const createPost=()=>{
  {/* button enter */}
  settextContent('')
}
return (
  <div className={s.Wrap}>
    <div className={s.body}>

      <div className={`card ${s.content}`}>

        <div className={s.text}>
          <ul>
            <li className={hidePhoto ? '' : s.active} onClick={()=>{sethidePhoto(false);sethideMusic(true)}}><img src='./img/photo.png' alt="photo" /><p>Фото</p></li>
            <li className={hideMusic ? '' : s.active} onClick={()=>{sethidePhoto(true);sethideMusic(false)}}><img src='./img/music.png' alt="music" /><p>Музыка</p></li>
          </ul>
        </div>
        

        <div className={`${s.bodyPhoto} ${hidePhoto ? s.hide : ''}`}>          {/* user-Photo */}
        {/* .map(el=><Photo p=.photo/>) */}
          <Photo/>
          <Photo/>  
          <Photo/>
        </div>

        <div className={`${s.bodyMusic} ${hideMusic ? s.hide : ''}`}>            {/* user-Music */}
        {/* .map(el=><Music p=.music/>) */}
          <Music/>
          <Music/>
          <Music/>
        </div>

        <div className={`${s.footerPhoto} ${hidePhoto ? s.hide : ''}`}>
          <div className={`button ${s.first}`}><button>Загрузить фото</button></div>      {/* button modal window*/}
          <div className="button"><button>Показать всё</button></div>                         {/* button link */}
        </div>

        <div className={`${s.footerMusic} ${hideMusic ? s.hide : ''}`}>
          <div className={`button ${s.first}`}><button>Загрузить музыку</button></div>    {/* button modal window*/}
          <div className="button"><button>Показать всё</button></div>                     {/* button link */}
        </div>

      </div>

      <div className={`card ${s.createPost}`}>

        <div className={s.img}><img src="./img/avatar.png" alt="avatar" /></div>           {/* user */}
        <input type="text" placeholder='Что у вас нового?' value={textContent} onChange={e=>settextContent(e.target.value)}/>

        <div className={s.img}><img src='./img/photo.png' alt="photo" /></div>
        <div className={s.img}><img src='./img/video.png' alt="video" /></div>
        <div className={s.img}><img src='./img/music.png' alt="music" /></div>

      </div>

        <div className={s.postList}>                                                   {/* user post */}
          <Post/>
          <Post/>
        </div>
    </div>
    <div className={s.sidebar}>
        <div className={`card ${s.sideCard}`}>
          <a className={`${s.sideCardA} flex`} href="#"><p>Друзья</p><div className={s.count}>0</div></a>             {/* user-count */}
          <div className={`${s.FriendsWrap} flex`}>
            <FriendSide/>
            <FriendSide/>                               {/* user friend */}
            <FriendSide/>
            <FriendSide/>
            <FriendSide/>
            <FriendSide/>
          </div>
        </div>

        <div className={`card ${s.sideCard}`}>
            <a className={`${s.sideCardA} flex`} href="#"><p>Подписки {'(Не планируется)'}</p><div className={s.count}>0</div></a>           {/* user-count */}
            <div className={`${s.SubWrap}`}>
              <Sub/>
              <Sub/>                     {/* user sub */}
              <Sub/>
            </div>
        </div>
    </div>
  </div>
)
}

export default Body