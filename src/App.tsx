import React from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
// database imports

import './App.css';
import Quiz from './quiz/Quiz';

import Dashboard from './profile/Dashboard';
import PointsAllocation from './points-allocation/PointsAllocation';
import SignIn from './login/login';
import SignUp from './signup/Signup';

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
               <Route path="/signup" component={SignUp}/>
               
             </Switch>
             
          </div> 
        </BrowserRouter>

        
       
      </div>
  
    );
  }

export default App;
