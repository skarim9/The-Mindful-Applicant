import React, { useContext }  from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
// database imports
import { signInWithGoogle,auth} from "./firebase-db/config";

import './App.css';
import Application from './Application'
import {addNewUser,addOriginalQuizResult,addReallocatedQuizResult} from './firebase-db/firestore/db-functions'
import { UserContext } from './providers/UserProvider';



function App(){
  const user = useContext(UserContext);
  return (
    
    <div>{
      user?
    <div className="App">
      <Application />

      <button onClick = {() => { auth.signOut()}}>Sign Out</button>
     
    </div>
    :
    
    <div>Sign up to continue.
            Put link to login page here.
            Put link to signup page here.
            <button
            onClick={() => {
              signInWithGoogle();
            }}
          >
            Sign in with Google
          </button>
    </div>}
    </div>

  );
}

export default App;