import React,{ Component } from 'react';
import PropTypes, { number } from 'prop-types';
import {Polar,defaults,Chart} from 'react-chartjs-2';
import { Parser as HtmlToReactParser } from 'html-to-react';
//see https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/polar.js for the shape of props that need to be passed
/**
 * Polar Area Chart specially customized for Mindful Applicant. 
 * Not for generic use. (need to modify the default state options otherwise)
 */
export default class PolarAreaChart extends Component{
    myRef;
    constructor(props){
        super(props);
        this.myRef = null;
        

        this.createMarkup = this.createMarkup.bind(this);
    this.myRef = null;
        this.state = {
            legend: <>no legend</>,
            
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
                    display:false,
                    position:'bottom',
                    
                },
                
      legendCallback: (chart) => {
        const renderLabels = (chart) => {
          const { data } = chart;
          return data.datasets[0].data
            .map(
              (_, i) =>
                `<div>
                    <div id="legend-${i}-item" class="legend-item">
                      <span style="background-color:
                        ${data.datasets[0].backgroundColor[i]};border-radius:15px">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      ${
                        data.labels[i] &&
                        `<span class="label">${data.labels[i]}: Ok${data.datasets[0].data[i]}</span>`
                      }
                    </div>
                </div>
              `
            )
            .join("");
        };
        return `
          <ul class="chartjs-legend">
            ${renderLabels(chart)}
          </ul>`;
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
    
    setTextInputRef(element){

        this.myRef = element;
    }
    componentDidMount() {
        
    const leg = this.generateLegend();
    this.setState({legend:leg});
      }
      
setTextInputRef(element){

    this.myRef = element;
}
      generateLegend(){
        if(!this.myRef) return null;
        return (this.myRef).chartInstance.generateLegend();
    
    }
      createMarkup() { 
     
        return {__html: this.state.legend}; 
    
    };
    render(){
        const htmlToReactParser = new HtmlToReactParser();
        
        return (<div>
            <Polar data = {this.props.data} options = {this.state.options}    ref={(element) => this.setTextInputRef(element)}></Polar>
            <div dangerouslySetInnerHTML={this.createMarkup()} />
       </div>);
    }
}
