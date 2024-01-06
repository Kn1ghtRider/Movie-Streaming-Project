import './Screen.css';
import React, { useRef } from 'react';
import { auth, createUserWithEmailAndPassword } from './firebase';

function Screen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();

    // Access the values when the form is submitted
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    // Perform the authentication logic
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='Screen'>
      <form>
        <input ref={emailRef} placeholder='Username' type='email' />
        <input ref={passwordRef} placeholder='Password' type='password' />
        <button type='submit' onClick={signIn}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Screen;
