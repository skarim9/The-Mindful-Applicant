import React from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Quiz from './quiz/Quiz';
import PointsAllocation from './points-allocation/PointsAllocation';
import Login from './login/login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
        <nav>
          <ul>
            <li>
             <Link  style = {{color:"white"}} to="/quiz">Quiz</Link>
             </li>

             <li>
             <Link  style = {{color:"white"}} to="/points-reallocation">Points Allocation</Link>
             </li>
          </ul>
             
         </nav>
            <Switch>
             <Route path="/points-reallocation" component={PointsAllocation} />
             <Route path="/quiz" component={Quiz}/>
             <Route path="/login" component={Login}/>
             
           </Switch>
        </div> 
      </BrowserRouter>
     
    </div>

  );
}

export default App;
