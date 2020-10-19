import React, { Component } from 'react';
import { SimplePieChart } from "../../components/SimplePieChart";

import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

import './quiz-results.scss'
import Slider from '@material-ui/core/Slider';
import PointsAllocation from '../../points-allocation/PointsAllocation';


export default class QuizResults extends Component <ResultsProps,IAppState>{
  
    constructor(props: ResultsProps){
        super(props);
        this.state = {}
    }
    

    render() {
        return (
            <div>

            <div className="quiz-results-container">
                <div className = "snapshot">
                    <h2>Your Elements</h2>
                   <SimplePieChart/>
                </div>
                <div className = "snapshot">
                    <h2>Your Type</h2>

                </div>
            </div>
            
            <Switch>
                <Route path="/points-reallocation" component={PointsAllocation} />
                </Switch>
                <Link  style = {{color:"white"}} to="/points-reallocation">Click Here To Challenge Your Results</Link>
            </div>
        )
    }
}
interface ResultsProps{
}
interface IAppState{
    
}
