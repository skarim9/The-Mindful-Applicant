import React from 'react'
import {Polar} from "react-chartjs-2"

var birdsCanvas = document.getElementById("birdsChart");

const state = {
  labels: ["Decision Making", "Self Awareness", "Self Management", "Social Awareness", "Relationship Skills"],
  datasets: [{
    data: [5, 1, 3, 2, 4],
    backgroundColor: [
      "rgba(0, 255, 0, 1)",
      "rgba(128, 0, 128, 1)",
      "rgba(0, 0, 255, 1)",
      "rgba(255, 255, 0, 1)",
      "rgba(255, 0, 0, 1)"
    ]
  }]
};

export default function ComplexGrid() {
    return (
        <div>
        <Polar
            data={state}
            options={{
            title:{
                display:true,
                text:'Your Elements',
                fontSize:20
            },
            legend:{
                display:true,
                position:'right'
            }
            }}
        />
        </div>
    );
    }