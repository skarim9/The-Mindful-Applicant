import * as React from "react";
import * as d3 from "d3";

const data = [1, 1, 1, 1,1];

export const SimplePieChart = () => {
  const height = 400;
  const width = 400;

  let pie = d3.pie()(data);

  function createSlices(num){
    let slices = [];
    
    

    for(let i = 0; i<num;i++){
      const space = 3;
      const start = i*100/num+space;
      const end = start + 100/num-space;
      slices.push(
      <Slice key = {i+"-slice"}  pie={pie} innerRadius = {start} outerRadius={end} />
      
      )
    }

    return (
      <div key = {num+"UNIQUE KEY"}>
        
    <svg height={height} width={width}>
      <g transform={`translate(${width / 2},${height / 2})`}>
        {slices}
        </g>
    </svg>
      </div>
    )
  }

  return (
        
        <div>
          {
            createSlices(5)
          }
        </div>
    
  );
};

const Slice = props => {
  let { pie } = props;
  let { innerRadius} = props;
  let { outerRadius} = props;

  let arc = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358");

  return pie.map((slice, index) => {
    let sliceColor = interpolate(index / (pie.length - 1));

    return <path key = {"Path "+innerRadius+", "+outerRadius+","+sliceColor} d={arc(slice)} fill={sliceColor} />;
  });
};
