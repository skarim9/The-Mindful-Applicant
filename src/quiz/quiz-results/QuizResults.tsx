import React, { Component, useContext } from 'react';
import PolarAreaChart from '../../components/PolarAreaChart';
import {addOriginalQuizResult,addReallocatedQuizResult} from '../../firebase-db/firestore/db-functions'
import {statToScore} from '../QuizAdapterFunctions'
import './quiz-results.scss'
import PointsAllocation from '../../points-allocation/PointsAllocation';
import { Typology } from './TypologyDeterminator';
import TypologyDisplay from './typologies/TypologyDisplay';
import { UserContext } from '../../providers/UserProvider';
import {auth} from '../../firebase-db/config';
import ScrollToTop from '../../utils/ScrollToTop'
export const colors = ["#ab8de0","#d34545","#45b0d3","#8fe891","#eac567","ac88ef"];
export default class QuizResults extends Component <ResultsProps,IAppState>{
  
    constructor(props: ResultsProps){
        super(props);
        this.state = {
            isAllocatePoints:false,
        }
    }
    componentDidMount(){
        let a = "";
        
        for(let k in this.props.stats){
            a+="\n"+this.props.stats[k].category+":"+this.props.stats[k].progress;
            
        }
        //add result to user
        const user = auth.currentUser;
        if(user!=null&&this.props.date!=null){
            console.log(`User is not null. Saving results now for user ${user}`);
            addOriginalQuizResult({
                date: this.props.date,
                typology: this.props.typology,
                quiz:statToScore(this.props.stats)
            },user.uid);
        }
        else{
            console.log("User is null");
        }

        

        
        console.log(`Quiz Results are  is ${a}`);

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
        let data = this.polarChartData(this.props.stats);
        
        return (
            <div>
                <ScrollToTop />
                { this.state.isAllocatePoints?
                
                <PointsAllocation polarChartData = {this.polarChartData}stats = {this.props.stats}/>:
                <div>
                    <div className="quiz-results-container">
                        <div className = "snapshot">
                            <h2>Your Elements</h2>
                        <PolarAreaChart data={data}/>
                        </div>
                        <div className = "snapshot">
                            <h2>Your Type</h2>
                            <TypologyDisplay typology = {this.props.typology}/>

                        </div>
                    </div>
                    {
                        this.props.canReallocatePoints?
                    <button onClick={(e)=>{this.setState({isAllocatePoints:true})}}>Reallocate Points</button>
                    :
                    <div></div>
                    }   
                </div>
                }
            </div>
        )
    }
}
interface ResultsProps{
    stats:{
        category: string,
        progress:number,
        total:number
    }[],
    typology: Typology,
    canReallocatePoints:boolean,
    date: Date | null
}
interface IAppState{
    isAllocatePoints:boolean,
    
    
}
