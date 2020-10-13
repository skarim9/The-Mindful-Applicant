import React, { Component } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from '@material-ui/core/Slider';

const NumberTickSliderStyle = withStyles({
  root: {
    color: "#595959ff",
    height: 8
  },
  thumb: {
    height: 36,
    width: 36,
    backgroundColor: "#4593C4",
    marginTop: -13.5,
    marginLeft: -17.5,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 20px)"
  },
  mark: {
    border:"2px solid #4593C4",
    backgroundColor: '#595959ff',
    height: 35,
    width: 35,
    borderRadius: 30,
    marginTop: -15,
    marginLeft: -19,
  },
  markLabel: {
    backgroundColor: "ff0000"
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
                valueLabelDisplay="on"
                onChangeCommitted={handleChange}
                aria-labelledby="discrete-slider-custom"
                defaultValue={3}
                step={1}
                marks
                min={1}
                max={5}
                />
                <p>{this.state.selectedNum}</p>
            </div>
            
        )
    }
}
interface IAppProps{
}
interface IAppState{
    selectedNum:number | number[]
}

