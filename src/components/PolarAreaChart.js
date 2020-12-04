import React,{ Component } from 'react';
import PropTypes, { number } from 'prop-types';
import {Polar,defaults,Chart} from 'react-chartjs-2'
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
                
                tooltips:{
                    enabled: true,
                    // callbacks: {
                    //     titleColor:'#000000',
                    //     title: (toolTipItem, data) => {return data.labels[0]},//data.datasets[items[0].datasetIndex].data[items[0].index].title,
                    //     label: (toolTipItem, data) => {return data.customLabelCaption[toolTipItem.index]}//data.datasets[item.datasetIndex].data[item.index],
                        
                    //   },
                //     custom: function(tooltipModel) {
                //         // https://www.chartjs.org/docs/latest/configuration/tooltip.html#external-custom-tooltips
                //         // Tooltip Element
                //         var tooltipEl = document.getElementById('chartjs-tooltip');
        
                //         // Create element on first render
                //         if (!tooltipEl) {
                //             tooltipEl = document.createElement('div');
                //             tooltipEl.id = 'chartjs-tooltip';
                //             tooltipEl.innerHTML = '<table></table>';
                //             document.body.appendChild(tooltipEl);
                //         }
        
                //         // Hide if no tooltip
                //         if (tooltipModel.opacity === 0) {
                //             tooltipEl.style.opacity = 0;
                //             return;
                //         }
        
                //         // Set caret Position
                //         tooltipEl.classList.remove('above', 'below', 'no-transform');
                //         if (tooltipModel.yAlign) {
                //             tooltipEl.classList.add(tooltipModel.yAlign);
                //         } else {
                //             tooltipEl.classList.add('no-transform');
                //         }
        
                //         function getBody(bodyItem) {
                //             return bodyItem.lines;
                //         }
        
                //         // Set Text
                //         if (tooltipModel.body) {
                //             var titleLines = tooltipModel.title || [];
                //             var bodyLines = tooltipModel.body.map(getBody);
        
                //             var innerHtml = '<thead>';
        
                //             titleLines.forEach(function(title) {
                //                 innerHtml += '<tr><th>' + title + '</th></tr>';
                //             });
                //             innerHtml += '</thead><tbody>';
        
                //             bodyLines.forEach(function(body, i) {
                //                 var colors = tooltipModel.labelColors[i];
                //                 var style = 'background:' + colors.backgroundColor;
                //                 style += '; border-color:' + colors.borderColor;
                //                 style += '; border-width: 2px';
                //                 var span = '<span style="' + style + '"></span>';
                //                 innerHtml += '<tr><td>' + span + body + '</td></tr>';
                //             });
                //             innerHtml += '</tbody>';
        
                //             var tableRoot = tooltipEl.querySelector('table');
                //             tableRoot.innerHTML = innerHtml;
                //         }
        
                //         // `this` will be the overall tooltip
                //         var position = this._chart.canvas.getBoundingClientRect();
        
                //         // Display, position, and set styles for font
                //         tooltipEl.style.opacity = 1;
                //         tooltipEl.style.position = 'absolute';
                //         tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                //         tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                //         tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                //         tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                //         tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                //         tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                //         tooltipEl.style.pointerEvents = 'none';
                //     },
                    
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
                        generateLabels: function(chart){
                            // https://stackoverflow.com/questions/39454586/pie-chart-legend-chart-js
                            const data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map(function(label, i) {
                                    const meta = chart.getDatasetMeta(0);
                                    const ds = data.datasets[0];
                                    const arc = meta.data[i];
                                    const custom = arc && arc.custom || {};
                                    const getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                                    const arcOpts = chart.options.elements.arc;
                                    const fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                                    const stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                                    const bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
        
                                    // We get the value of the current label
                                    const value = chart.config.data.datasets[arc._datasetIndex].data[arc._index];
        
                                    return {
                                        // Instead of `text: label,`
                                        // We add the value to the string
                                        text: label + " : " + value+"",
                                        fillStyle: fill,
                                        strokeStyle: stroke,
                                        lineWidth: bw,
                                        hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                                        index: i
                                    };
                                });
                            } else {
                                return [];
                            }
                        
                        }
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
            <Polar data = {this.props.data} options = {this.state.options}></Polar>
        </div>);
    }
}
