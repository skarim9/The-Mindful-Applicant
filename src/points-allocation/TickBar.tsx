import { Color } from '@material-ui/core';
import React, { Component } from 'react';


export default class TickBar extends Component <IAppProps,IAppState>{
    
    constructor(props: IAppProps){
        super(props);
        this.state = {filledTicks: 2,numTicks:5}
    }


    /**
     * Returns an html element representing a single tick of the tickbar
     */
    createTick(_widthPercentage:number, _isFilled: boolean, _key:string){
        let widthPercent = ""+_widthPercentage+"%";
        const tick = {
            
            border: '1px solid white',
            backgroundColor: _isFilled?this.props.color:"",
            
            width:widthPercent,
            height: '100%',
            minHeight:'15px'
        }  
        return(
            <div style = {tick} key={_key}></div>
            )
    }

    /*Creates the ticks of the bar. 
    @param _totalTicks - total number oftickmarks in the tickbar
    @param _filledTicks - total number of tickmarks that are filled in the tickbar
    Returns a collection of ticks in form of a div*/
    createTicks(_totalTicks:number,_filledTicks:number){
        
        const container = {
            display: 'flex',
            flexDirection:'row',
            border: '2px solid white',
            borderRadius:'5px',
            padding: "0"
        } as React.CSSProperties;
       
        const widthPercent = 100/_totalTicks;
        let ticks=[];
        //create filled ticks
        for(let i = 0; i<_filledTicks;i++){
            ticks.push(this.createTick(widthPercent,true,i+"tickBar"));
        }
        //create empty ticks
        for(let i = 0; i<_totalTicks-_filledTicks;i++){
            ticks.push(this.createTick(widthPercent,false,(_totalTicks-i)+"tickBarUnfilled"));
        }
        return(
            <div style={container}> 
                {
                    ticks
                }
            </div>
        )
    }

    render() {
        return (
            <div>
            {
                this.createTicks(this.props.numTicks,this.props.filledTicks)
            }
            
            </div>
        )
    }
}
interface IAppProps{
    filledTicks:number,
    numTicks:number,
    color: string
}
interface IAppState{
    filledTicks:number,
    numTicks:number
}

