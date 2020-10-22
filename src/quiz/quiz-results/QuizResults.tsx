import React, { Component } from 'react';
import PolarAreaChart from '../../components/PolarAreaChart'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

import './quiz-results.scss'
import PointsAllocation from '../../points-allocation/PointsAllocation';

const colors = ["#ab8de0","#d34545","#45b0d3","#8fe891","#eac567","ac88ef"]

export default class QuizResults extends Component <ResultsProps,IAppState>{
  
    constructor(props: ResultsProps){
        super(props);
        this.state = {
            isAllocatePoints:false,
            stats:[
                {
                    category: "Decision Making",
                    progress:2,
                    total:5
                },
                {
                    category: "Self Awareness",
                    progress:3,
                    total:5
                },
                {
                    category: "Self Management",
                    progress:2,
                    total:5
                },
                {
                    category: "Social Awareness",
                    progress:4,
                    total:5
                },
                {
                    category: "Relationship Skills",
                    progress:1,
                    total:5
                }]
        }
    }
    
    polarChartData(){
        let stats=[];
        let categories=[];
        for(let i = 0; i<this.state.stats.length;i++){
            stats.push(this.state.stats[i].progress);
            categories.push(this.state.stats[i].category);
        }
        
        let data  = {
            datasets: [{data:stats,backgroundColor:colors,label: 'Results', borderColor:'#ffffff', borderWidth: 1}],
            labels:categories
        };
        return data;
    }

    render() {
        let data = this.polarChartData();

        return (
            <div>
                { this.state.isAllocatePoints?
                
                <PointsAllocation stats = {this.state.stats}/>:
                <div>
                    <div className="quiz-results-container">
                        <div className = "snapshot">
                            <h2>Your Elements</h2>
                        <PolarAreaChart data={data}/>
                        </div>
                        <div className = "snapshot">
                            <h2>Your Type</h2>

                        </div>
                    </div>
                    <button onClick={(e)=>{this.setState({isAllocatePoints:true})}}>Reallocate Points</button>
                </div>
                }
            </div>
        )
    }
}
interface ResultsProps{

}
interface IAppState{
    isAllocatePoints:boolean,
    stats:{
        category: string,
        progress:number,
        total:number
    }[]
}
