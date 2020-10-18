import React, { Component } from 'react';
import './quiz-results.scss'
import Slider from '@material-ui/core/Slider';

export default class QuizResults extends Component <ResultsProps,IAppState>{
  
    constructor(props: ResultsProps){
        super(props);
        this.state = {}
    }
    

    render() {
        return (
            <div className="quiz-results-container">
                <div className = "snapshot">

                </div>
                <div className = "snapshot">

                </div>
        </div>
        )
    }
}
interface ResultsProps{
}
interface IAppState{
    
}
