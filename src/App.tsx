import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './quiz/Quiz';

function App() {
  return (
    <div className="App">
      
      <Quiz questions={["Question 1 is here", "So is Question 2", "Here's Question 3"]}/>
    </div>
  );
}

export default App;
