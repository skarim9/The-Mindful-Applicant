import React from 'react';
import ReactDOM from 'react-dom';
import {render,cleanup} from '@testing-library/react';

import Application from '../Application';
import Quiz from '../quiz/Quiz';
import Login from '../login/login';
import Signup from '../signup/Signup';
import Navbar from '../profile/NavBar';
import PromptBox from '../points-allocation/prompt-box/PromptBox'
import UserProvider from '../providers/UserProvider'
import QuizResults from '../quiz/quiz-results/QuizResults'
//TUtorial for testing with jest and react test library: https://www.youtube.com/watch?v=3e1GHCA3GP0

//clean up after each test
afterEach(cleanup);

it("application renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Application/>,div);
});

it("quiz renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Quiz/>,div);
});


it("login renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Login/>,div);
});

it("signup renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Signup/>,div);
});

it("navbar renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Navbar/>,div);
});

it("user provider renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<UserProvider/>,div);
});

it("prompt box renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<PromptBox/>,div);
});



