import React, { Component } from 'react';
import TickBar from  './TickBar'
import PromptBox from './prompt-box/PromptBox'
import './point-allocation.scss'


export default class PointsAllocation extends Component <IAppProps,IAppState>{
  
    constructor(props: IAppProps){
        super(props);
        
        this.state = {
            
        pointsToAllocate:10,
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
    
    /**
     * Removes point from stat and puts it in the point bank
     * @param stat - stat to modify
     */
    subtractPoint(stat:{category: string, progress:number,total:number}){
        if(stat.progress>0){//can only subtract point from stat if stat has points
            stat.progress = stat.progress-1;
            console.log("Clicked on stat. Progress is now "+this.state.stats[0].progress)
            this.setState({
                pointsToAllocate:this.state.pointsToAllocate+1
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
            console.log("Clicked on stat. Progress is now "+this.state.stats[0].progress)
            this.setState({
                pointsToAllocate:this.state.pointsToAllocate-1
            })
        }
        
    }
    

    createTickBars(){
        let labels = [];//labels for tickbars
        let tickBars = []; //tickbars



        for(let i = 0; i<this.state.stats.length;i++){
            labels.push(
                <div  key = {this.state.stats[i].category+"-label"} className = "tick-bar-padding">
                    {this.state.stats[i].category}
                </div>
            )
            tickBars.push(
                <div key = {this.state.stats[i].category+"-bar"} className = "tick-bar-padding" >
                    {
                        <div onClick={(e) => this.addPoint(this.state.stats[i])}>
                        <TickBar filledTicks={this.state.stats[i].progress} numTicks={this.state.stats[i].total}/>
                        </div>
                    }
                </div>
            )
        }
        return(
            <div className = "tick-bars-container">
                <div style = {{float:"left"}}>
                {labels}
                </div>
                <div>
                {tickBars}
                </div>
            </div>
        )
    }
    createPointsBank(_pointsToAllocate:number){
        return(<div  className = "points-label-container">
                    <h2>Social Emotional Points Bank</h2>
                    <div className="points-label">{_pointsToAllocate}</div>
                </div>)
    }
    render() {
        
        return (
            <div className="points-allocation-page-container">
                <h1>
                    Social Emotional Points Reallocation
                </h1>
                

                {
                    /*Tick buttons */
                    this.createTickBars()
                }

                {/* Points bank */
                    this.createPointsBank(this.state.pointsToAllocate)
                }
                <PromptBox/>
            
            </div>
        )
    }
}
interface IAppProps{
}
interface IAppState{
    stats:{
        category: string,
        progress:number,
        total:number
    }[],
    pointsToAllocate:number
}

