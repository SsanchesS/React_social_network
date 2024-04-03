//Sanches Network/Exchange
// && И || ИЛИ

import { FC } from "react";
import {Routes,Route} from 'react-router-dom'

import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import MessengerPage from "./Pages/MessengerPage/MessengerPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import DialogPage from "./Pages/DialogPage/DialogPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

const App:FC=()=> {
return (
  <div className="App">         {/* 141414 */}

  <Routes>
    <Route path ='/profile/:id' element = {<ProfilePage/>}/>
    <Route path="/messenger" element={<MessengerPage/>}/>
    <Route path="/dialog" element={<DialogPage/>}/>
    <Route path="/registration" element={<RegistrationPage/>}/>
    <Route path="/auth" element={<AuthPage/>}/>
    <Route path="/notFound" element={<NotFoundPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Routes>

{/*  <ProfilePage/>
  <MessengerPage/>
  <DialogPage/>
  <RegistrationPage/>
  <AuthPage/>
  <NotFoundPage/>*/}

  </div>
  );
}

export default App;