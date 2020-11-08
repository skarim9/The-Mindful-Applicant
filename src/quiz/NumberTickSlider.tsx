import React, { Component } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from '@material-ui/core/Slider';

const NumberTickSliderStyle = withStyles({
  root: {
    color: "#ffffff",
    height: 8,
    width: '80%'
  },
  thumb: {
    height: 36,
    width: 36,
    backgroundColor: "#509EAA",
    marginTop: -13.5,
    marginLeft: -17.5,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 20px)",
    
  },
  mark: {
    border:"2px solid #509EAA",
    backgroundColor: '#fffffff',
    height: 35,
    width: 35,
    borderRadius: 30,
    marginTop: -15,
    marginLeft: -19
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
      value: 1,
      label: ''
    },
    {
      value: 2,
      label: '',
    },
    {
      value: 3,
      label: '',
    },
    {
      value: 4,
      label: '',
    }
  ];

export default class NumberTickSlider extends Component <IAppProps,IAppState>{
  
    constructor(props: IAppProps){
        super(props);
        this.state = {selectedNum:3}
    }

    setValue = (value: number | number[]) =>{
        this.setState({
            selectedNum:value
        });
    }
    render() {
        const handleChange = (event: any, newValue: number | number[]) => {
            this.setValue(newValue);
        };
        return (
            <div>
                <NumberTickSliderStyle
                track={false}
                valueLabelDisplay="off"
                onChangeCommitted={handleChange}
                aria-labelledby="discrete-slider-custom"
                defaultValue={3}
                step={1}
                marks={options}
                min={1}
                max={4}
                />
            </div>
            
        )
    }
}
interface IAppProps{
}
interface IAppState{
    selectedNum:number | number[]
}

