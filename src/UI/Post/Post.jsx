import React,{useState} from 'react'
import s from "./Post.module.sass"

const Post = (p) => {

const [ishide,setishide] = useState(true)
const onClick=()=>{
  console.log('нажал')
  setishide(ishide=>!ishide)
}
return (
<div className={`${s.Post} card`}>
  <div className={s.Header}>
      <div className={s.authorWrap}>
          <div className={s.avatar}><img src="/img/avatar.png" alt="avatar" /></div>        {/* user */}
          <div className={s.author}>
              <div><a href="#">User Name</a></div>               {/* user */}
              <div><p href="#">31 авг в 17:47</p></div>           {/* user */}
          </div>
      </div>
      <div className={s.editPost}>
        <div>                                                                      {/* add class ?*/}
          <img src="/img/arrow.png" alt="menu" onClick={onClick}/>
          <div className={`${s.menu} ${ishide? s.hide : ''}`}>
            <ul>
              <li>Удалить Запись</li>
              <li>Архивировать Запись</li>
              <li>Сохранить в закладках</li>
              <li>Открепить</li>
              <li>Выключить комментарии</li>
            </ul>
          </div>
        </div>
      </div>
  </div>

  <div className={`${s.content}`}>                                         {/* user-content (map)*/}
    <p className={`${s.hide1}`}>что то</p>
    <div className={s.img}><img src="/img/avatar.png" alt="photo" /></div>
  </div>

  <div className={s.feedback}>
    <div className={s.lkr}>            {/* button ? */}                                            
      <div className={`button`}><button><div className={s.love}><img src="/img/love.png" alt="love" /></div>0</button></div>                              {/* user-count */}
      <div className={`button `}><button><div className={s.comment}><img src="/img/comment.png" alt="comment" /></div>0</button></div>                        {/* user-count */}
      <div className={`button`}><button><div className={s.share}><img src="/img/share.png" alt="share" /></div>0</button></div>                             {/* user-count */}
    </div>
    <div className={s.views}>
      <div className={s.view}><img src="/img/view.png" alt="view" /></div>
      <p>0</p>                                                                                                                                                  {/* user-count */}
    </div>
  </div>
</div>
)
}

export default Post

// <div className={`${s.Post} card`}>
//     <div className={s.Header}>
//         <div className={s.authorWrap}>
//             <div className={s.avatar}><img src={`${p.avatar ? p.avatar : "/img/avatar.png"}`} alt="avatar" /></div>
//             <div className={s.author}>
//                 <div><a href="#">{p.userName}</a></div>
//                 <div><p href="#">{p.content.date}</p></div>           {/* user-count 31 авг в 17:47*/}
//             </div>
//         </div>
//         <div className={s.editPost}>
//           <div>
//             <img src="/img/arrow.png" alt="menu" />
//             <div className={`${s.menu} ${ishide?'hide':''}`} onClick={onClick}>
//               <ul>
//                 <li>Удалить Запись</li>
//                 <li>Архивировать Запись</li>
//                 <li>Сохранить в закладках</li>
//                 <li>Открепить</li>
//                 <li>Выключить комментарии</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//     </div>

//     <div className={`${s.content}`}>
//       <p className={`${s.hide1}`}>{p.content.text}</p>
//       <div className={s.img}><img src={`${p.content.photo}`} alt="photo" /></div>                {/* user-content    .map        */}
//     </div>

//     <div className={s.feedback}>
//       <div className={s.lkr}>
//         <div className={`button`}><button><div className={s.love}><img src="/img/love.png" alt="love" /></div>{p.content.loveCount}</button></div>                              {/* user-count */}
//         <div className={`button `}><button><div className={s.comment}><img src="/img/comment.png" alt="comment" /></div>{p.content.commentCount}</button></div>                      
//         <div className={`button`}><button><div className={s.share}><img src="/img/share.png" alt="share" /></div>{p.content.shareCount}</button></div>                            
//       </div>
//       <div className={s.views}>
//         <div className={s.view}><img src="/img/view.png" alt="view" /></div>
//         <p>{p.content.viewCount}</p>                                                                                                                                                
//       </div>
//     </div>
// </div>