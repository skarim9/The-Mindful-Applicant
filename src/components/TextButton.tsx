// universal text button to use for this side
import React, { Component } from 'react';

export default class TickBar extends Component <IAppProps,IAppState>{
    
    constructor(props: IAppProps){
        super(props);
    }



    render() {
        const btnStyle = {
            alignSelf:"center",
            minHeight: "30px",
            borderRadius: "5px",
            backgroundColor: "#ffffff",
            // backgroundColor: "#509EAA",
            
            border:"none"
        } as React.CSSProperties;
        return (
            
            <button style = {btnStyle} onClick = {(e)=>{this.props.onClick()}} >{this.props.textLabel}</button>
        )
    }
}
interface IAppProps{
    onClick: Function,
    textLabel:string
}
interface IAppState{
}



            