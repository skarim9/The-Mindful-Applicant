import React,{ Component } from 'react';
import PropTypes, { number } from 'prop-types';
import {Polar,defaults} from 'react-chartjs-2'
//see https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/polar.js for the shape of props that need to be passed
/**
 * Polar Area Chart specially customized for Mindful Applicant. 
 * Not for generic use. (need to modify the default state options otherwise)
 */
export default class PolarAreaChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            options:{
                legend:{
                    display:false
                },
                scale:{
                    
                    ticks: {
                        max: 25,
                        min: 0,
                        stepSize: 5,
                        showLabelBackdrop:true,
                        display:false
                    },
                    gridLines:{
                        color:'#000000',
                        lineWidth:1,
                        drawBorder:false,
                        z:5
                    },
                    pointLabels:{
                        display:false
                    }
                }
            }
        }
    }
    render(){
        
        
        return (<div>
            <Polar data = {this.props.data} options = {this.state.options}></Polar>
        </div>);
    }
}
