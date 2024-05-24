import React from 'react'
import {Button} from '@mui/material'
import firebase from "firebase/compat/app"
import {auth} from "../firebase.js"


export default function SignIn() {
  

    const signInGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            const result = await auth.signInWithPopup(provider);
            console.log("Google sign-in successful", result);
        } catch (error) {
            console.error("Error during sign-in:", error.message, error.code);
            alert(`Error during sign-in: ${error.message} (Code: ${error.code})`);
        }
    }


  return (
<div className='header'>
      <Button style={{color:"white"}} onClick={signInGoogle}>Googleでログイン</Button>
    </div>
  )
}
