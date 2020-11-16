import React, { useContext }  from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
// database imports

import { signInWithGoogle,auth } from "./firebase-db/config";
import './App.css';
import Quiz from './quiz/Quiz';

import Dashboard from './profile/index';
import PointsAllocation from './points-allocation/PointsAllocation';
import SignIn from './login/login'

import {addNewUser,addOriginalQuizResult,addReallocatedQuizResult} from './firebase-db/firestore/db-functions'
import { UserContext } from './oauth/UserProvider';



function App(){
  const user = useContext(UserContext);
  return (
    
    <div>{user?
    <div className="App">
   
      <BrowserRouter>
        <div>
            
          <Link to="/quiz">Take Quiz</Link>
            <Switch>
             <Route path="/points-reallocation" component={PointsAllocation} />
             <Route path="/quiz" component={Quiz}/>
             <Route path ="/profile" component={Dashboard}/>
             <Route path="/signin" component={SignIn}/>
             
           </Switch>
           {/* <button onClick = {this.addUser}>Click to add user</button>
           
           <button onClick = {this.addToDB}>Click to add quiz result</button>
            */}
        </div> 
      </BrowserRouter>

      <button onClick = {() => {auth.signOut()}}>Sign Out</button>
     
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
