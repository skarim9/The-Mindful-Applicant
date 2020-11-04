import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './prompt-box.scss'

class PromptBox extends Component {
  
  render() {
    
    return (
      <div className = "promptStyle">
      <label>Reason for Point Reallocation:</label>
      <TextareaAutosize id="reallocation_details" />
      
      </div>
    )
  }
}
export default PromptBox;