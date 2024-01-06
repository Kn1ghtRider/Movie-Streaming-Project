import './App.css';
import Row from './Row';
import requests from './Request';
import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Nav from './Nav';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from "./Features/userSlice.js";
import ProfileScreen from "./ProfileScreen";
import Screen from './Screen';

function App() { 
  const user= useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
        console.log(userAuth);
      } else {
        dispatch(logout());
        //logged out
      }
    });

    return unsubscribe;
  },[dispatch]);

  return (
    <div className="App">
     <Router>
        {!user ? (
          <LoginScreen />
        ) : ( 
          <Routes>
          <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/' element={<HomeScreen />} />
          <Route path='/screen' element={<Screen />} /> 
        </Routes>

        )}
        
      </Router>
    </div>
    
  );
}

export default App;
