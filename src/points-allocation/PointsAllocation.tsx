import React, { Component } from 'react';
import TickBar from  './TickBar'
import PromptBox from './prompt-box/PromptBox'
import './point-allocation.scss'
import PolarAreaChart  from "../components/PolarAreaChart";
import {colors} from "../quiz/quiz-results/QuizResults";
import {addReallocatedQuizResult} from '../firebase-db/firestore/db-functions';
import {statToScore} from '../quiz/QuizAdapterFunctions';
import {determineType, Typology} from '../quiz/quiz-results/TypologyDeterminator';
import {auth} from '../firebase-db/config'
import TypologyDisplay from '../quiz/quiz-results/typologies/TypologyDisplay'
 
export default class PointsAllocation extends Component <IAppProps,IAppState>{
  
    constructor(props: IAppProps){
        super(props);
        const initStats:{
            category: string,
            progress:number,
            total:number
        }[] = [];
        for(let i = 0; i<this.props.stats.length;i++){
            const statCopy:{
                category: string,
                progress:number,
                total:number
            } = {
                category: this.props.stats[i].category,
                progress: this.props.stats[i].progress,
                total: this.props.stats[i].total
            }
            initStats.push(statCopy);
        }
        this.state = {
        oldStats:initStats,
        pointsToAllocate:0,
        newTypology: this.props.initTypology
            
        }
    }

    
    render() {
        let data = this.props.polarChartData(this.props.stats);
        return (
            <div className="points-allocation-page-container">
                <h1>
                    Social Emotional Points Reallocation
                </h1>
                
                <div className = "resultsContainer">
                    
                
                {
                    /*Tick buttons */
                    this.createTickBars()
                }
                <div className="polar-chart-container">
                <PolarAreaChart data={data}/>
                </div>
                        
                </div>
                <div>
                    <h3>New Typology</h3>
                    <TypologyDisplay typology = {this.state.newTypology}/>
                </div>
                {/* Points bank */
                    this.createPointsBank(this.state.pointsToAllocate)
                }
                <PromptBox/>
                <button onClick = {()=>{this.saveResults()}} className = "button">Submit</button>
            
            </div>
        )
    }
    saveResults(){
        alert("Results will be saved");
                //add result to user
                const user = auth.currentUser;
                if(user!=null&&this.props.date!=null){
                    console.log(`User is not null. Saving results now for user ${user}`);
                    addReallocatedQuizResult({
                        date: this.props.date,
                        typology: this.state.newTypology,
                        quiz:statToScore(this.props.stats)
                    },user.uid);
                }
                else{
                    console.log("User is null");
                }
        

    }

    
        /**
     * Removes point from stat and puts it in the point bank
     * @param stat - stat to modify
     */
    subtractPoint(stat:{category: string, progress:number,total:number}){
        if(stat.progress>0){//can only subtract point from stat if stat has points
            stat.progress = stat.progress-1;
            console.log("Clicked on stat. Progress is now "+this.props.stats[0].progress)
            this.setState({
                pointsToAllocate:this.state.pointsToAllocate+1,
                newTypology: determineType(statToScore(this.props.stats))
            })
        }
    }
    /**
     * Takes point from point bank and adds it to the stat
     * @param stat - stat to modify
     */
    addPoint(stat:{category: string, progress:number,total:number}){
        if(this.state.pointsToAllocate>0&&stat.progress<stat.total){//add point iff stat is not full and there are points in bank
            stat.progress = stat.progress+1;
            console.log("Clicked on stat. Progress is now "+this.props.stats[0].progress)
            this.setState({
                pointsToAllocate:this.state.pointsToAllocate-1,
                newTypology:determineType(statToScore(this.props.stats))
            })
        }
        
    }

    createTickBars(){
        let labels = [];//labels for tickbars
        let tickBars = []; //tickbars



        for(let i = 0; i<this.props.stats.length;i++){
            labels.push(
                <div  key = {this.props.stats[i].category+"-label"} className = "tick-bar-padding">
                    {this.props.stats[i].category}
                </div>
            )
            tickBars.push(
                <tr key = {this.props.stats[i].category+"-bar"} className = "tick-bar-padding" >
                    
                            
                        <th  className = "tick-bar-label" key = {this.props.stats[i].category+"-label"}>
                            {this.props.stats[i].category}
                        </th>
                        <td className="tick-bar-block">
                        <TickBar color = {colors[i%colors.length]} filledTicks={this.props.stats[i].progress} numTicks={this.props.stats[i].total}/>
                        </td>
                        <td className="tick-bar-modifier">
                            <button className="add-btn" onClick={(e) => this.addPoint(this.props.stats[i])}>+</button>
                            <button className = "sub-btn"onClick={(e) => this.subtractPoint(this.props.stats[i])}>-</button>
                            
                        </td>
                    
                </tr>
            )
        }
        return(
            <table className = "tick-bars-container">
                <tbody>
                {tickBars}
                </tbody>
            </table>
        )
    }
    createPointsBank(_pointsToAllocate:number){
        return(<div  className = "points-label-container">
                    <h2>Social Emotional Points Bank</h2>
                    <div className="points-label">{_pointsToAllocate}</div>
                </div>)
    }
}
interface IAppProps{
    stats:{
        category: string,
        progress:number,
        total:number
    }[],
    polarChartData:Function,
    date: Date | null,
    initTypology:Typology
}
interface IAppState{
    oldStats:{
        category: string,
        progress:number,
        total:number
    }[],
    newTypology:Typology,
    pointsToAllocate:number
}

