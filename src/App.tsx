import React from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Quiz from './quiz/Quiz';

import Dashboard from './profile/index';
import PointsAllocation from './points-allocation/PointsAllocation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
            <Switch>
             <Route path="/points-reallocation" component={PointsAllocation} />
             <Route path="/quiz" component={Quiz}/>
             <Route path ="/profile" component={Dashboard}/>
             
           </Switch>
        </div> 
      </BrowserRouter>
     
    </div>

  );
}

export default App;
