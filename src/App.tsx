//Sanches Network/Exchange
// && И || ИЛИ

import { FC } from "react";
import {Routes,Route} from 'react-router-dom'

import { useAppSelector } from "./hooks/hooks";

import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import MessengerPage from "./Pages/MessengerPage/MessengerPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import DialogPage from "./Pages/DialogPage/DialogPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

const App:FC=()=> {
  const user = useAppSelector(state=>state.UserReducer)
  console.log(user)                                         ///////////////////////////////
return (
  <div className="App">         {/* 141414 */}
  { user.id ?
    <Routes>
      <Route path ='/profile/:id' element = {<ProfilePage/>}/>
      <Route path="/messenger" element={<MessengerPage/>}/>
      <Route path="/dialog" element={<DialogPage/>}/>
      <Route path="/notFound" element={<NotFoundPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    :
    <Routes>
      <Route path ='/profile/:id' element = {<ProfilePage/>}/>
      <Route path="/registration" element={<RegistrationPage/>}/>
      <Route path="/auth" element={<AuthPage/>}/>
      <Route path="/notFound" element={<NotFoundPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  }

{/* {
  user.id ?
<>
<ProfilePage/>
<MessengerPage/>
<DialogPage/></> :
<>
<RegistrationPage/>
<AuthPage/>
<NotFoundPage/></>
} */}

{/* <ProfilePage/>
<MessengerPage/>
<DialogPage/>
<RegistrationPage/>
<AuthPage/>
<NotFoundPage/> */}
  </div>
  );
}

export default App;