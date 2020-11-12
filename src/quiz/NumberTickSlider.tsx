import React, { Component } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from '@material-ui/core/Slider';

const NumberTickSliderStyle = withStyles({
  root: {
    color: "#6B9BC0",
    height: 8,
    width: '80%'
  },
  thumb: {
    display:'none',
    height: 36,
    width: 36,
    backgroundColor: "#509EAA",
    marginTop: -13.5,
    marginLeft: -17.5,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {
  },
  valueLabel: {
    left: "calc(-50% + 20px)",
    
  },
  mark: {
    border:"2px solid #6B9BC0",
    backgroundColor: '#ffffff',
    height: 35,
    width: 35,
    borderRadius: 30,
    marginTop: -15,
    marginLeft: -19
  },
  markActive:{
    backgroundColor:'#6B9BC0',
    opacity:1
  },
  markLabel: {
      color:"#509EAA",
      marginTop: -17,
  },
  track: {
    height: 1,
    borderRadius: 4
  },
  rail: {
    marginTop:0,
    height: 10,
    borderRadius: 4,
    opacity:1
    
  }
})(Slider);
const options = [
    {
      value: 0,
      label: ''
    },
    {
      value: 1,
      label: '',
    },
    {
      value: 2,
      label: '',
    },
    {
      value: 3,
      label: '',
    }
  ];

export default class NumberTickSlider extends Component <IAppProps,IAppState>{
  
    constructor(props: IAppProps){
        super(props);
        this.state = {selectedNum:0,minNum:0,maxNum:3}
    }

    setValue = (value: number | number[]) =>{
        this.setState({
            selectedNum:value
        });
    }
    render() {
        const handleChange = (event: any, newValue: number | number[]) => {
            this.setValue(newValue);
            this.props.handleValue(newValue,this.state.minNum,this.state.maxNum);
        };
        return (
            <div>
                <NumberTickSliderStyle
                track={false}
                valueLabelDisplay="off"
                onChangeCommitted={handleChange}
                aria-labelledby="discrete-slider-custom"
                
                step={1}
                marks={options}
                min={this.state.minNum}
                max={this.state.maxNum}
                />
            </div>
            
        )
    }
}
interface IAppProps{
  handleValue:(value:number | number[],minValue:number, maxValue:number) => void;
}
interface IAppState{
    selectedNum:number | number[]
    minNum:number
    maxNum:number
}

