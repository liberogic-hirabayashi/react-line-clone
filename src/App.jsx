import './App.css';
import SignIn from './_components/SignIn';
import {auth} from "./firebase.js"
import {useAuthState} from "react-firebase-hooks/auth"
import Line from "./_components/Line.jsx"

function App() {
  const [user]=useAuthState(auth)
  return (
    <div>
      {user?<Line/>:<SignIn/>}
    </div>
  );
}

export default App;
