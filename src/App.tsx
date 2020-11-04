import React from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Quiz from './quiz/Quiz';

import Dashboard from './profile/index';
import PointsAllocation from './points-allocation/PointsAllocation';
import Login from './login/login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
            <Switch>
             <Route path="/points-reallocation" component={PointsAllocation} />
             <Route path="/quiz" component={Quiz}/>
<<<<<<< HEAD
             <Route path="/login" component={Login}/>
=======
             <Route path ="/profile" component={Dashboard}/>
>>>>>>> origin/main
             
           </Switch>
        </div> 
      </BrowserRouter>
     
    </div>

  );
}

export default App;
