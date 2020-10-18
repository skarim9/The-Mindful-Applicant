import React, { Component } from 'react';
import TickBar from  './TickBar'
import PromptBox from './prompt-box/PromptBox'
import './point-allocation.scss'
import { flexbox } from '@material-ui/system';


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
        stat.progress = stat.progress-1;
        console.log("Clicked on stat. Progress is now "+this.state.stats[0].progress)
        this.setState({
            pointsToAllocate:this.state.pointsToAllocate+1
        })
        
    }
    /**
     * Takes point from point bank and adds it to the stat
     * @param stat - stat to modify
     */
    addPoint(stat:{category: string, progress:number,total:number}){
        stat.progress = stat.progress+1;
        console.log("Clicked on stat. Progress is now "+this.state.stats[0].progress)
        this.setState({
            pointsToAllocate:this.state.pointsToAllocate-1
        })
        
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
                <tr key = {this.state.stats[i].category+"-bar"} className = "tick-bar-padding" >
                    
                            
                        <th  className = "tick-bar-label" key = {this.state.stats[i].category+"-label"}>
                            {this.state.stats[i].category}
                        </th>
                        <td className="tick-bar-block">
                        <TickBar filledTicks={this.state.stats[i].progress} numTicks={this.state.stats[i].total}/>
                        </td>
                        <td className="tick-bar-modifier">
                            <button className="tick-bar-modifier" onClick={(e) => this.addPoint(this.state.stats[i])}>+</button>
                            <button className="tick-bar-modifier" onClick={(e) => this.subtractPoint(this.state.stats[i])}>-</button>
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

