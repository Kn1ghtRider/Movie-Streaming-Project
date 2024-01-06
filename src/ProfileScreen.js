import React from 'react'
import './ProfileScreen.css'
import Nav from './Nav'
import { auth } from './firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './Features/userSlice'

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
        <Nav />

        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt=""
                />
                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen__userDetails'>
                      <h3>Username : </h3>
                      <h3>Password: </h3>

                    </div>
                    <button
                     onClick={() => auth.signOut()}
                     className='profileScreen__signOut'>Sign Out</button>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default ProfileScreen