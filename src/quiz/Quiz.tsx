import React, { Component } from 'react';
import './quiz.scss'
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
          <div className="sliding-dial-container">
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

}
interface IAppState{
    name:string;
}
