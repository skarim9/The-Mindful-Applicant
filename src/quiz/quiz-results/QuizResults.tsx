import React, { Component } from 'react';
import PolarAreaChart from '../../components/PolarAreaChart'
import Typology from '../../components/Typology'
import './quiz-results.scss'
import PointsAllocation from '../../points-allocation/PointsAllocation';
import TextButton from '../../components/TextButton'
export const colors = ["#ab8de0","#d34545","#45b0d3","#8fe891","#eac567","ac88ef"]


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
    
    polarChartData(stats:{
        category: string,
        progress:number,
        total:number
    }[]){
        let values=[];
        let categories=[];
        for(let i = 0; i<stats.length;i++){
            values.push(stats[i].progress);
            categories.push(stats[i].category);
        }
        
        let data  = {
            datasets: [{data:values,backgroundColor:colors,label: 'Results', borderColor:'#ffffff', borderWidth: 1}],
            labels:categories
        };
        return data;
    }

    render() {
        let data = this.polarChartData(this.state.stats);
        //TODO REMOVE THESE DUMMIES LATER
        const dummyPicUrl = "/typology-images/dummy-pic.png";
        let dummyMessage = "Dummy description to be replaced later";
        for(let i = 0; i<400;i++){
            dummyMessage+=" ";
        }
        return (
            <div>
                { this.state.isAllocatePoints?
                
                <PointsAllocation polarChartData = {this.polarChartData}stats = {this.state.stats}/>:
                <div>
                    <div className="quiz-results-container">
                        <div className = "snapshot">
                            <h2>Your Elements</h2>
                        <PolarAreaChart data={data}/>
                        </div>
                        <div className = "snapshot">
                            <h2>Your Type</h2>
                            <Typology description = {dummyMessage} image = {dummyPicUrl}/>
                        </div>
                    </div>
                    <TextButton onClick={()=>this.setState({isAllocatePoints:true})} textLabel="Reallocate Points" /> 
                
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
