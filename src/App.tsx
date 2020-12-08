import React, { useContext, useState }  from 'react';
import { BrowserRouter, Route, Switch,Link, Router, Redirect } from 'react-router-dom';
// database imports
import { signInWithGoogle,auth} from "./firebase-db/config";

import './App.css';
import Application from './Application'
import {addNewUser,addOriginalQuizResult,addReallocatedQuizResult} from './firebase-db/firestore/db-functions'
import { UserContext } from './providers/UserProvider';
import SignIn from './login/login';
import SignUp from './signup/Signup';



function App(){
  const user = useContext(UserContext);
  const [currentUser,setCurrentUser] = useState(null);
  return (
    <div> {
      user?
      <div className="App">
        <Application />
        </div>:<div>
        <BrowserRouter>
        <Switch>
        <Route path="/signup" >
          <SignUp  />
        </Route>
        <Route path="/signin" >
          <SignIn  />
        </Route>
        <Route path="/" >
                    <Redirect to="/signin" />
                  </Route>
          </Switch>
        </BrowserRouter>
        <button onClick = {() => { signInWithGoogle(); } }>
          Sign in with Google
        </button>
      </div>
  }</div>
  );
}

export default App;