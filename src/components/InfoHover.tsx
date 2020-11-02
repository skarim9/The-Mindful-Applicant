import React, { Component } from 'react';

export default class InfoHover extends Component <IAppProps,IAppState>{
    
    constructor(props: IAppProps){
        super(props);
        this.state={
            isShowDescription:false
        }
    }



    render() {
        const btnStyle = {
            alignSelf:"center",
            width:'30px',
            height:'30px',
            borderRadius: "30px",
            // backgroundColor: "#ffffff",
            backgroundColor: "#509EAA",
            
            border:"none"
        } as React.CSSProperties;
        return (
            
            <button style = {btnStyle} 
            onMouseEnter = {(e)=>{this.showDescription()}}
            
            onMouseLeave = {(e)=>{this.hideDescription()}} >?</button>
        )
    }
    showDescription(){
        this.setState({
            isShowDescription: true
        })
    }
    hideDescription(){
        this.setState({
            isShowDescription: false
        })
    }

}
interface IAppProps{
    description:string
}
interface IAppState{
    isShowDescription:boolean
}



            