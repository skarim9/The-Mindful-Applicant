import React, { Component } from 'react';
import TickBar from  './TickBar'
import './point-allocation.scss'


export default class PointsAllocation extends Component <IAppProps,IAppState>{
  
    constructor(props: IAppProps){
        super(props);
        
        this.state = {
            categories:["Decision Making", "Self Awareness", "Self Management","Social Awareness","Relationship Skills"],//categories to reallocate points to
            pointScale:5,//each category is out of pointScale points
            pointsToAllocate:10
        }
    }


    createTickBars(_categories:string[]){
        let labels = [];//labels for tickbars
        let tickBars = []; //tickbars



        for(let i = 0; i<_categories.length;i++){
            labels.push(
                <div  className = "tick-bar-padding">
                    {_categories[i]}
                </div>
            )
            tickBars.push(
                <div  className = "tick-bar-padding">
                    {
                        <TickBar filledTicks={3} numTicks={this.state.pointScale}/>
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
                    This is the Points Allocation Page
                </h1>
                

                {
                    /*Tick buttons */
                    this.createTickBars(this.state.categories)
                }

                {/* Points bank */
                    this.createPointsBank(this.state.pointsToAllocate)
                }
            
            </div>
        )
    }
}
interface IAppProps{
}
interface IAppState{
    categories: string[],
    pointScale:number
    pointsToAllocate:number
}

