import React from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
// database imports
import Firebase from 'firebase';

import './App.css';
import Quiz from './quiz/Quiz';

import Dashboard from './profile/index';
import PointsAllocation from './points-allocation/PointsAllocation';
import SignIn from './login/login'

import {addOriginalQuizResult,addReallocatedQuizResult} from './firebase-db/firestore/db-functions'

class App extends React.Component {

  constructor(props:any){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
  }
  componentDidUpdate(prevProps:any, prevState:any) {
    // check on previous state
    // only write when it's different with the new state
    if (prevState !== this.state) {
      
    }
  }

  addToDB(){
    addOriginalQuizResult(
      {date: new Date(),
      quiz:{
        decision_making:389472
      }},
      "SANDRA"
    )
    addReallocatedQuizResult(
      {date: new Date(),
      quiz:{
        decision_making:389472
      }},
      "SANDRA"
    )
  }
  render(){
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
             <button onClick = {this.addToDB}>Click to add quiz result</button>
             
          </div> 
        </BrowserRouter>

        
       
      </div>
  
    );
  }
}

export default App;
