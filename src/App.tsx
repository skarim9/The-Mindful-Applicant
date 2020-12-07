import React, { FC, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
// database imports
import { signInWithGoogle,auth} from "./firebase-db/config";

import './App.css';
import Application from './Application'
import {addNewUser,addOriginalQuizResult,addReallocatedQuizResult} from './firebase-db/firestore/db-functions'
import { UserContext } from './providers/UserProvider';
import SignIn from './login/login';
import SignUp from './signup/Signup';
import Dashboard from './profile/Dashboard';
import {firebase} from "./firebase-db/config";
import { getUserById, setLoading, setNeedVerification } from './store/actions/authActions';
import { RootState } from './store';
import { createStore } from 'redux';




const App: FC = () => {
  // const dispatch = useDispatch()
  // const { loading } = useSelector((state: RootState) => state.auth);

  // // Check if user exist
  // useEffect(() => {
  //   dispatch(setLoading(true));
  //   const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
  //     if(user) {
  //       dispatch(setLoading(true));
  //       await dispatch(getUserById(user.uid));
  //       if(!user.emailVerified) {
  //         dispatch(setNeedVerification());
  //       }
  //     }
  //     dispatch(setLoading(false));
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [dispatch]);


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/profile" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;