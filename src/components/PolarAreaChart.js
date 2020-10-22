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
                scale:{
                    
                    ticks: {
                        max: 5,
                        min: 0,
                        stepSize: 1,
                        showLabelBackdrop:false,
                        display:false
                    },
                    gridLines:{
                        color:'#ffffff',
                        lineWidth:1,
                        drawBorder:false,
                        z:1
                    },
                    pointLabels:{
                        display:false
                    }
                }
                // segmentShowStroke:false,
                // scaleLineColor:"#ff",
                // scaleOverride:true,
                // scaleSteps:5,
                // scaleStepWidth: 1,
                // scaleStartValue: 1,
                // stepped: true
            }
        }
    }
    render(){
        
        
        return (<div>
            <Polar data = {this.props.data} options = {this.state.options}></Polar>
        </div>);
    }
}
