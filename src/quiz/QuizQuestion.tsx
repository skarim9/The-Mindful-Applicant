import React, { Component } from 'react';
import './quiz.scss'
import Slider from '@material-ui/core/Slider';

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
          <Slider
            defaultValue={3}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={5}
            />
        
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
