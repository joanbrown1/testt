import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../../../firebase'
import { AuthContext } from '../../../Auth'

export const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">Siphtor Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}