/**
 * File for rendering the typologies consisting of a photo of the type and a description
 */
import React, { Component } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";

const container = {
    display: 'flex',
    flexDirection:'row',
    border: '2px solid white',
    borderRadius:'5px',
    padding: "0"
} as React.CSSProperties;

export default class TickBar extends Component <IAppProps,IAppState>{
    
    constructor(props: IAppProps){
        super(props);
        this.state = {filledTicks: 2,numTicks:5}
    }
    render(){
        return(<div style={container}>
            <img height = "200px" width = "200px"src={this.props.image} alt="Image of your type">
            </img>
                <p style = {{display:"flex",flexDirection:"column", overflowWrap:"anywhere",overflow:"auto"}}>{this.props.description}</p>
        </div>)
    }
}
interface IAppProps{
    description: string,
    image: string
}
interface IAppState{
    
}