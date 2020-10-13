import React, { Component } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import './quiz.scss'
import Slider from '@material-ui/core/Slider';

const PrettoSlider = withStyles({
  root: {
    color: "#595959ff",
    height: 8
  },
  thumb: {
    height: 25,
    width: 25,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  mark: {
    backgroundColor: '#4593C4',
    height: 35,
    width: 35,
    borderRadius: 30,
    marginTop: -13,
    marginLeft: -17,
  },
  track: {
    height: 0,
    borderRadius: 4
  },
  rail: {
    marginTop:-4,
    height: 16,
    borderRadius: 4
  }
})(Slider);
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
          
            <PrettoSlider
              valueLabelDisplay="auto"
              
              aria-labelledby="discrete-slider"
              defaultValue={20}
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

