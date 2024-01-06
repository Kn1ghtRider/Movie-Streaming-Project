import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './LoginScreen.css'
import SignupScreen from './SignupScreen'
import Screen from './Screen'


function LoginScreen(props) {
const [signIn, setSignIn] = useState(false);
const [getStarted, setGetStarted] = useState(false);
const navigate = useNavigate();

  return (
  <div className='LoginScreen'>
    <div className='LoginScreen__Logo'
    onClick={() => navigate('/')}>
        <p>Incendio</p>
        <button onClick={() => setSignIn(true)}
        className='LoginScreen__Button'>Sign In</button>
    </div>
    
    <div className='LoginScreen__Gradient'/>
    <div className='LoginScreen__Body'>
      {signIn ? (
        <SignupScreen/>
        ) : getStarted ?(
          <Screen/>
        ) : (
          <>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h3>Ready to watch? Enter your Email </h3>
          <div className='LoginScreen__Input'>
            <form>
              <input type='email' placeholder='Email Address'/>
              <button onClick={(e) =>{ 
              e.preventDefault();
              setGetStarted(true);
            }}
              className='LoginScreen__GetStarted'>GET STARTED</button>
            </form>
          </div>
      
          </>
      )}
        
    </div>
  </div>
    )
}


export default LoginScreen