import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './quiz/Quiz';

function App() {
  return (
    <div className="App">
      
      <Quiz numQuestions={5}/>
    </div>
  );
}

export default App;
