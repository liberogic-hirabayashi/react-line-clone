import React, { useState, useEffect } from "react";
import SignOut from "./SignOut";
import { db, auth } from "../firebase";
// import { getFirestore } from "firebase/firestore";
// import { getDocs, collection, onSnapshot } from "firebase/firestore";
import SendMessage from "../_components/SendMessage";

export default function Line() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snap) => {
        const data = snap.docs.map((doc) => doc.data());
        setPosts(data);
        console.log(data);
      });
  }, []);


  return (
    <div>
      <SignOut />
      <div className="msgs">
        {posts.map(({ id, text, photoURL, uid, createdAt }) => (
          <div>
            <div
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
              key={id}
            >
              <p> {text}</p>
              <img src={photoURL} alt="" />
              {console.log(createdAt)}
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}
