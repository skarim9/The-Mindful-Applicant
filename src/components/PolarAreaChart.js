import React,{ Component } from 'react';
import PropTypes, { number } from 'prop-types';

import TooltipTrigger from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';
import {Polar,defaults,Chart} from 'react-chartjs-2';
import {getCategoryDefinition} from '../quiz/quiz-questions-data'
//see https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/polar.js for the shape of props that need to be passed
/**
 * Polar Area Chart specially customized for Mindful Applicant. 
 * Not for generic use. (need to modify the default state options otherwise)
 */
export default class PolarAreaChart extends Component{
    _chartRef = React.createRef();
    setPositionAndData = (top, left, date, value) => {
        this.setState({top, left, date, value});
      };
    constructor(props){
        super(props);
        https://stackoverflow.com/questions/44814522/custom-tooltips-with-react-chartjs-2-library
        this.state = {
            top: 0,
            left: 0,
            date: '',
            value: 0,
            options:{
                
                tooltips:{
                    enabled: true,
                    callbacks: {
                        titleColor:'#000000',
                        title: (toolTipItems, data) => {
                            // console.log(`toolTipItems[0] is ${toolTipItems[0].index}`)
                            return data.labels[toolTipItems[0].index]},//data.datasets[items[0].datasetIndex].data[items[0].index].title,
                        label: (toolTipItem, data) => {return data.customLabelCaption[toolTipItem.index]}//data.datasets[item.datasetIndex].data[item.index],
                        
                      },
                    custom:(tooltipModel) => {
                        // if chart is not defined, return early
                        let chart = this._chartRef.current;
                        if (!chart) {
                          return;
                        }
                
                        // hide the tooltip when chartjs determines you've hovered out
                        if (tooltipModel.opacity === 0) {
                        //   this.hide();
                          return;
                        }
                
                        const position = chart.chartInstance.canvas.getBoundingClientRect();
                
                        // assuming your tooltip is `position: fixed`
                        // set position of tooltip
                        const left = position.left + tooltipModel.caretX;
                        const top = position.top + tooltipModel.caretY;
                
                        // set values for display of data in the tooltip
                        const date = tooltipModel.dataPoints[0].xLabel;
                        const value = tooltipModel.dataPoints[0].yLabel;
                
                        this.setPositionAndData({top, left, date, value});
                      },
                    
                    mode:'index',
                    position:'nearest',
                    backgroundColor:'#ffffffff',
                    titleFontColor:'#6b9bc0',
            
                    bodyFontColor:'#6b9bc0',
                    bodyAlign:'center',
                },
                legend:{
                    display:true,
                    position:'bottom',
                    tooltips:{
                        mode:'label'
                    },
                    labels:{
                        usePointStyle:true,
                        fontColor:'#6b9bc0',
                    //     generateLabels: function(chart){
                    //         // https://stackoverflow.com/questions/39454586/pie-chart-legend-chart-js
                    //         const data = chart.data;
                    //         if (data.labels.length && data.datasets.length) {
                    //             return data.labels.map(function(label, i) {
                    //                 const meta = chart.getDatasetMeta(0);
                    //                 const ds = data.datasets[0];
                    //                 const arc = meta.data[i];
                    //                 const custom = arc && arc.custom || {};
                    //                 const getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                    //                 const arcOpts = chart.options.elements.arc;
                    //                 const fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                    //                 const stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                    //                 const bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
        
                    //                 // We get the value of the current label
                    //                 const value = chart.config.data.datasets[arc._datasetIndex].data[arc._index];
        
                    //                 return {
                    //                     // Instead of `text: label,`
                    //                     // We add the value to the string
                    //                     text: label, //+ " : " + value+"",
                    //                     fillStyle: fill,
                    //                     strokeStyle: stroke,
                    //                     lineWidth: bw,
                    //                     hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                    //                     index: i
                    //                 };
                    //             });
                    //         } else {
                    //             return [];
                    //         }
                        
                    //     }
                    },
                    onHover:function(e, item){
                        // alert(`Item with text ${item.text} and index ${item.index} hovered`);
                    
                    },
                    
                    onClick: function(event, legendItem) {
                        console.log(`item ${legendItem.text} was clicked `)
                      }
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
            <Tooltip style={{top: this.state.top, left: this.state.left}}>
            <div>Date: {this.state.date}</div>
            <div>Value: {this.state.value}</div>
          </Tooltip>
            <Polar data = {this.props.data} options = {this.state.options} ref = {this._chartRef}></Polar>
        </div>);
    }
}


const Tooltip = ({children, tooltip, hideArrow, ...props}) => (
    <TooltipTrigger
      {...props}
      tooltip={({
        arrowRef,
        tooltipRef,
        getArrowProps,
        getTooltipProps,
        placement
      }) => (
        <div
          {...getTooltipProps({
            ref: tooltipRef,
            className: 'tooltip-container'
          })}
        >
          {!hideArrow && (
            <div
              {...getArrowProps({
                ref: arrowRef,
                className: 'tooltip-arrow',
                'data-placement': placement
              })}
            />
          )}
          {tooltip}
        </div>
      )}
    >
      {({getTriggerProps, triggerRef}) => (
        <span
          {...getTriggerProps({
            ref: triggerRef,
            className: 'trigger'
          })}
        >
          {children}
        </span>
      )}
    </TooltipTrigger>
  );
  