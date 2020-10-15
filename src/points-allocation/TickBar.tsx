import React, { Component } from 'react';


export default class TickBar extends Component <IAppProps,IAppState>{
    
    constructor(props: IAppProps){
        super(props);
        this.state = {filledTicks: 3,numTicks:5}
    }
    componentWillReceiveProps(props:IAppProps) {
        this.setState({filledTicks: props.filledTicks,numTicks:props.numTicks});
    }


    /**
     * Returns an html element representing a single tick of the tickbar
     */
    createTick(_widthPercentage:number, isFilled: boolean){
        let widthPercent = ""+_widthPercentage+"%";
        const tick = {
            
            border: '1px solid white',
            backgroundColor: isFilled?"#509eaa":"",
            
            width:widthPercent,
            height: '100%',
            minHeight:'15px'
        }  
        return(
            <div style = {tick}></div>
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
            ticks.push(this.createTick(widthPercent,true));
        }
        //create empty ticks
        for(let i = 0; i<_totalTicks-_filledTicks;i++){
            ticks.push(this.createTick(widthPercent,false));
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
                this.createTicks(this.state.numTicks,this.state.filledTicks)
            }
            
            </div>
        )
    }
}
interface IAppProps{
    filledTicks:number,
    numTicks:number
}
interface IAppState{
    filledTicks:number,
    numTicks:number
}

