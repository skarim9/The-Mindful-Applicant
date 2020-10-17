import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Quiz from './quiz/Quiz';
import PointsAllocation from './points-allocation/PointsAllocation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
            <Switch>
             <Route path="/points-reallocation" component={PointsAllocation} />
             <Route path="/quiz" component={Quiz}/>
             
           </Switch>
        </div> 
      </BrowserRouter>
     
    </div>

  );
}

export default App;
