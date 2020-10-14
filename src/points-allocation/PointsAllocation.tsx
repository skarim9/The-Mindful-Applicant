import React, { Component } from 'react';
import TickBar from  './TickBar'
import './point-allocation.scss'


export default class PointsAllocation extends Component <IAppProps,IAppState>{
  
    constructor(props: IAppProps){
        super(props);
        this.state = {name:""}
    }

    render() {
        
        return (
            <div>
                <p>
                    This is the Points Allocation Page
                </p>
                <TickBar/>
            

            
            </div>
        )
    }
}
interface IAppProps{
}
interface IAppState{
}

