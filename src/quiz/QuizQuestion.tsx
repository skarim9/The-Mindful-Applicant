import React, { Component } from 'react';
import './quiz.scss'
import NumberTickSlider from './NumberTickSlider'


export default class QuizQuestion extends Component <IAppProps,IAppState>{
  
constructor(props: IAppProps){
    super(props);
    this.state = {name:""}
}

  render() {
    
    return (
      <div className = "quiz-question-container">
          <div>
          <p>{this.props.question}</p>
          
            <NumberTickSlider />
        
        </div>
      </div>
    )
  }
}
interface IAppProps{
    question:string;
}
interface IAppState{
    name:string;
}

