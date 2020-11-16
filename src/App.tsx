import React from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Quiz from './quiz/Quiz';

import Dashboard from './profile/index';
import PointsAllocation from './points-allocation/PointsAllocation';
import SignIn from './login/login'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAyXW5rmBKE6CVO_alY3JaTprY6Qs4qqpE",
  authDomain: "quickstart-1573950019598.firebaseapp.com",
  databaseURL: "https://quickstart-1573950019598.firebaseio.com",
  projectId: "quickstart-1573950019598",
  storageBucket: "quickstart-1573950019598.appspot.com",
  messagingSenderId: "581831503315",
  appId: "1:581831503315:web:6da8aa3cb8f9d2ad14d326",
  measurementId: "G-RQL95BZ6NJ"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
            <Switch>
             <Route path="/points-reallocation" component={PointsAllocation} />
             <Route path="/quiz" component={Quiz}/>
             <Route path ="/profile" component={Dashboard}/>
             <Route path="/signin" component={SignIn}/>
             
           </Switch>
        </div> 
      </BrowserRouter>
     
    </div>

  );
}

export default App;
