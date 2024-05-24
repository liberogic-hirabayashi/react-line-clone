import React, {  useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import {Input} from "@mui/material"
import SendIcon from "@mui/icons-material/Send";


export default function SendMessage() {

  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const { uid, photoURL } = auth.currentUser;
  const SendMessage = (e) => {
    e.preventDefault();
    setMessage('')


    db.collection("posts")
      .add({
        text: message,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
  };

  return (
    <div>
      <form action="" onSubmit={SendMessage}>
        <div className="sendMsg">
          <Input
            type="text"
            placeholder="message"
            onChange={handleChange}
            value={message}
            style={{
                width: "78%",
                fontSize: "15px",
                fontWeight: "550",
                marginLeft: "5px",
                marginBottom: "-3px",
              }}
          />
          <SendIcon  style={{ color: "#7AC2FF", marginLeft: "20px" }}/>
        </div>
      </form>
    </div>
  );
}
