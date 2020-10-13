import React, { Component } from 'react';
import './quiz.scss'
import QuizQuestion from './QuizQuestion'
import Slider from '@material-ui/core/Slider';

export default class Quiz extends Component <IAppProps,IAppState>{
  
constructor(props: IAppProps){
    super(props);
    this.state = {name:""}
}

  render() {
    
    return (
      <div className = "quiz-container">
          
          <div>This is the Quiz page</div>
          <QuizQuestion question = "This is the first quiz question"/>
          
          <QuizQuestion question = "This is the second quiz question"/>
          
          <QuizQuestion question = "This is the third quiz question"/>
          
          <QuizQuestion question = "This is the fourth quiz question"/>
      </div>
    )
  }
}
interface IAppProps{

}
interface IAppState{
    name:string;
}
