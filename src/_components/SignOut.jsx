import React from 'react'
import {Button} from "@mui/material"
import {auth} from "../firebase.js"

export default function SignOut() {
  return (
    <div className='header'>
      <Button style={{color:"white"}} onClick={()=>auth.signOut()}>サインアウト</Button>
      <h3>{auth.currentUser.displayName}</h3>
    </div>
  )
}
